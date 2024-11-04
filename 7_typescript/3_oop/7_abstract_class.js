/*
 * Abstract Class (Soyut Sınıf)

 * Abstract class'lar sınıflar için birebir şema görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirleriz.
 
 * Soyut sınıfların doğrudan örnekleri oluşturulamazlar.
 * Bundan dolayı soyut sınıfılara, normal sınıflar için bir tip tanımı diyebiliriz.

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Soyut Sınıf
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
    }
    // miras alan sınıflara doğrudan geçer
    TakePhoto.prototype.takePicture = function () {
        console.log("fotoğraf çekiliyor...");
    };
    return TakePhoto;
}());
// new TakePhoto(); //! Soyut sınıfın örneği oluşturulamaz
// Abstract class'ın özelliklerini ve methodlarını miras alan yeni bir alt class oluşturucaz.
// Oluşturduğumuz bu alt class'ın içerisinde abstract methodunun görevini tanımlamak zorundayız.
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // abstract class'da sadece tipi tanımlanna share methodunun görevini tanımlamak zorundayız (implement)
    Instagram.prototype.share = function (send_to) {
        console.log("\u00C7ekilen foto ".concat(send_to, " ki\u015Fisiyle payla\u015F\u0131l\u0131yor.."));
    };
    return Instagram;
}(TakePhoto));
var insta = new Instagram("ön kamera", "gece");
insta.takePicture();
insta.share("@ahmet");
// 2.kez soyut sınıfı miras alan farklı bir alt class oluşturalım
var Twitter = /** @class */ (function (_super) {
    __extends(Twitter, _super);
    function Twitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Twitter.prototype.share = function (send_to) {
        console.log("G\u00F6nderilen tweet ".concat(send_to, " ile payla\u015F\u0131ld\u0131...."));
    };
    return Twitter;
}(TakePhoto));
var tw = new Twitter("arka kamera", "manzara");
tw.takePicture();
tw.share("@ali");
