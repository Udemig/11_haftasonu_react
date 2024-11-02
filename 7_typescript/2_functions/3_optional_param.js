/*
 * Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir.
  
 * Bazı durumlar bazı parametrelerin zorunlu olmasını istemeyebiliriz.
 
 * Tanım:
 * (a:string,b?:number) => nu kullanımda a parametresi zorunlu b ise opsiyonel olur
  
 * Eğer opsiyonel olan parametreyi göndermezsek undefined değeri gider.
 * Opsiyonel parametreler, parametre listesinin en sonunda yer alır.
 * Bir opsiyonel parametrenin ardından zorunlu bir parametre gelemez.
 */
function exaFunc(par1, par2, par3) {
    console.log("1.param", par1);
    console.log("2.param", par2);
    console.log("3.param", par3);
}
exaFunc(324, "selam", true);
exaFunc(324, "selam");
exaFunc(324);
exaFunc(324, undefined, false);
// örnek - 2
var karsilama = function (isim, zaman) {
    if (zaman) {
        return "\u0130yi ".concat(zaman, ", ").concat(isim);
    }
    else {
        return "Merhaba, ".concat(isim);
    }
};
console.log(karsilama("Ahmet", "akşamlar"));
console.log(karsilama("Ali"));
