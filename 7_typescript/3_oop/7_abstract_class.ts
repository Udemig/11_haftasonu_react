/*
 * Abstract Class (Soyut Sınıf)

 * Abstract class'lar sınıflar için birebir şema görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirleriz.
 
 * Soyut sınıfların doğrudan örnekleri oluşturulamazlar.
 * Bundan dolayı soyut sınıfılara, normal sınıflar için bir tip tanımı diyebiliriz. 

*/

// Soyut Sınıf
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  // miras alan sınıflara doğrudan geçer
  takePicture() {
    console.log("fotoğraf çekiliyor...");
  }

  // soyut bir methoddur görevi miras alan sınıf içerisinde tanımlanır
  // burada sadece tipini tanımladık
  abstract share(send_to: string): void;
}

// new TakePhoto(); //! Soyut sınıfın örneği oluşturulamaz
// Abstract class'ın özelliklerini ve methodlarını miras alan yeni bir alt class oluşturucaz.
// Oluşturduğumuz bu alt class'ın içerisinde abstract methodunun görevini tanımlamak zorundayız.

class Instagram extends TakePhoto {
  // abstract class'da sadece tipi tanımlanna share methodunun görevini tanımlamak zorundayız (implement)
  share(send_to: string): void {
    console.log(`Çekilen foto ${send_to} kişisiyle paylaşılıyor..`);
  }
}

const insta = new Instagram("ön kamera", "gece");
insta.takePicture();
insta.share("@ahmet");

// 2.kez soyut sınıfı miras alan farklı bir alt class oluşturalım
class Twitter extends TakePhoto {
  share(send_to: string): void {
    console.log(`Gönderilen tweet ${send_to} ile paylaşıldı....`);
  }
}

const tw = new Twitter("arka kamera", "manzara");
tw.takePicture();
tw.share("@ali");
