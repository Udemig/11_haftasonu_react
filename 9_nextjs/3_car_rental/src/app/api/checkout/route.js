import { NextResponse } from "next/server";
import Order from "../(models)/Order";
const stripe = require("stripe")(process.env.STRIPE_KEY);

const getActiveProducts = async () => {
  // katalogdaki bütün ürünleri al
  let stripeProducts = await stripe.products.list();

  // aktif ürünleri filtrele
  return stripeProducts.data.filter((i) => i.active);
};

export const POST = async (req) => {
  try {
    //1) isteğin body kısmında gelen satın alınacak araç verisine eriş
    const product = await req.json();
    console.log("PRODUCT", product);

    //2) stripte catalog'una kaydedilmiş ürünleri al
    const stripeProducts = await getActiveProducts();

    //3) satın alıncak ürün catalog'da var mı kontrol et
    let foundProduct = stripeProducts.find((i) => i.metadata.product_id === product._id);

    //4) catolog'da yok ise satın alınacak ürünü catalog'a ekle
    if (!foundProduct) {
      foundProduct = await stripe.products.create({
        name: product.make + " " + product.model,
        images: [product.imageUrl],
        default_price_data: {
          unit_amount: product.price * 100,
          currency: "USD",
        },
        metadata: {
          product_id: product._id,
        },
      });
    }

    //5) ürünün stripe tarafından oluşturulan id'sini ve satın alım miktarını bir nesneye koy
    const product_info = {
      price: foundProduct.default_price,
      quantity: 1,
    };

    //6) ödeme oturumu (url) oluştur
    const session = await stripe.checkout.sessions.create({
      line_items: [product_info],
      mode: "payment",
      success_url: process.env.BASE_API_URL + "/success",
      cancel_url: process.env.BASE_API_URL + "/cancel",
    });

    const orderItem = {
      product: product._id,
      money_spend: product.price,
      currency: "usd",
      type: "one_time",
    };

    // satın alınan ürünü siparişler kolleksiyonuna ekle
    await Order.create(orderItem);

    //7) satın alım url'ini client'a döndür
    return NextResponse.json({
      url: session.url,
    });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Ödeme oturumu olşturuluken hata meydana geldi",
      },
      { status: 500 }
    );
  }
};
