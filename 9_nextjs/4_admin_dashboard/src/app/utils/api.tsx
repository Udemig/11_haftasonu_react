import { Order, Product, User, Values } from "../types";

export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch("http://localhost:3030/orders");

  if (!res.ok) {
    throw new Error("Siparişler alınırken bir sorun oluştu");
  }

  return res.json();
};

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:3030/products");

  if (!res.ok) {
    throw new Error("Ürünler alınırken bir sorun oluştu");
  }

  return res.json();
};

export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`http://localhost:3030/products/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Ürün silme işlemi başarısız");
  }
};

export const createProduct = async (data: Product): Promise<Product> => {
  const res = await fetch(`http://localhost:3030/products`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Ürün ekleme işlemi başarısız");
  }

  return res.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`http://localhost:3030/products/${id}`);

  if (!res.ok) {
    throw new Error("Böyle bir ürün bulunamadı");
  }

  return res.json();
};

export const updateProduct = async (data: Product): Promise<Product> => {
  const res = await fetch(`http://localhost:3030/products/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Ürün güncelleme işlemi başarısız");
  }

  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("http://localhost:3030/users");

  if (!res.ok) {
    throw new Error("Kullanıcı verileri alınırken bir sorun oluştu");
  }

  return res.json();
};

export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`http://localhost:3030/users/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Kullanıcı hesabı kaldırılırken bir sorun oluştu");
  }

  return res.json();
};

export const getUserById = async (id: string): Promise<User> => {
  const res = await fetch(`http://localhost:3030/users/${id}`);

  if (!res.ok) {
    throw new Error("Kullanıcı verisi alınamadı");
  }

  return res.json();
};

export const getValues = async (): Promise<Values> => {
  const orderData = await getOrders();
  const userData = await getUsers();
  const productData = await getProducts();

  return {
    totalUsers: userData.length * 186,
    totalOrders:
      orderData.reduce(
        (a, b) => a + b.items.reduce((c, d) => c + d.quantity, 0),
        0
      ) * 78,
    totalIncome: Math.round(
      orderData.reduce((a, b) => a + b.total_price, 0) * 94
    ),
    totalProducts: productData.length * 127,
  };
};
