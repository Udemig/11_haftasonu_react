// Validasyon Şeması
// Yup kullanarak bir doğrulama şeması oluşturabiliriz.
// Şemalar, nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarının tanıtılmasını sağlar

import * as yup from "yup";

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
});

export default schema;
