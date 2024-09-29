// Validasyon Şeması
// Yup kullanarak bir doğrulama şeması oluşturabiliriz.
// Şemalar, nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarının tanıtılmasını sağlar

import * as yup from "yup";

// REGEX Kuralları: en az
// 1 büyük harf
// 1 küçük harf
// 1 rakam
// 1 özel karakter
// min 5 karakter
const regex =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// yup.object().shape() ifadesi form'un state'ini tutuğumuz nesnenin her bir alanın geçerli olması için gerekli olan koşulları ifade etmemizi sağlar
const schema = yup.object().shape({
  // email alanın geçerli olması için gerekli olan koşulları
  email: yup
    .string()
    .required("Email alanı zorunludur")
    .email("Email formatı doğru değil"),

  // age alanın geçerli olması için gereklı olan koşulları
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer("Yaş değeri tam sayı olmalı")
    .required("Yaş alanı zorunludur"),

  // password alanının geçerli olması için gerekli koşullar
  password: yup
    .string()
    .min(5, "şifre en az 5 karakter olmalı")
    // matches: metin regex'deki kurallara uygun mu?
    .matches(regex, "şifre yeterince güçlü değil")
    .required("şifre alanı zorunludur"),

  // passwordConfirm alanının geçerli olması için gerekli koşullar
  // oneOf: metin dizideki elemanlardan biriyle aynı mı?
  // ref: nesnenin farklı bir değerini çağırır
  passwordConfirm: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "doğrulama şifresi asıl şifreyle eşleşmiyor"
    )
    .required("lütfen şifrenizi doğrulayın"),
});

export default schema;
