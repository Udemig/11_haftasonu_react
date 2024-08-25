# Memorization

- Memorization bir optimizasyon tekniğidir.
- Bir bileşenin veya fonksiyonun gereksiz yere yeniden render edilmesini veya hesaplama yapmasını önlemek için kullanılan bir tekniktir. Bu sayede performans iyileştirilir.

- React'ta memorization adına 3 hook bulunur.

# useMemo

- Daha önce yapılan hesaplamaların sonuçlarını hafızada (RAM) tutar.
- Bu sayede her render sırasında tekrar hesaplama yapmak yerine daha önceki yapılan ve RAM'de tutulan hesaplama sonucunu alarak gereksiz hesaplamaların önüne geçer.

# useCallback

- Daha önce oluşturulan bir fonksiyonu hafızada tutar
