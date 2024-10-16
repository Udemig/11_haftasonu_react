# Kütüphaneler

- react-router-dom
- react-icons
- tailwind
- react-simple-maps
- @reduxjs/toolkit
- react-redux
- @testing-library/user-event@14.0
- axios@^0.27.2

# API:

https://rapidapi.com/Gramzivi/api/covid-19-data/playground/apiendpoint_5c132769-7bb2-4000-b320-f42731a7dee3

# Unit Test

- Test geliştirme süreci 2'ye ayrılır

## TDD (Test Driven Development)

- Önce test'leri yazarız ardından kodları yazarız.
- Red to Green Test.

## BDD (Behaviour Driven Development)

- Önce kodları yazarız ardından test'leri yazılır.

# Seçiciler

1.  Method Tipi | 2. All İfadesi | 3. Seçici Method

- get > render anında DOM'da olan elementleri almak için kullanılır | elementi bulamazsa hata verir

- query > elementin ekranda olma durumu kesin değilse kullanılır get ile benzer çalışır | elementi bulamazsa hata vermez

- find > elementin ekrana basılmasının asenkron olduğu durumlarda kullanılır
- not: find methodu promise döndürdüğü için async await ile kullanılmalı

- eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir
- not: all kullanıırsa dönen cevapta 1 eleman olsa bile dizi döner
- not: all kullanılmzsa ama ekranda koşula uyan 1den fazla eleman varsa hatat verir
