//* Soyut Bir Parent Class
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusics() {
    console.log(this.apiUrl + " api'ında müzikle alınıyor...");
  }

  abstract playMusic(name: string): void;
}

// Child Class
class Spotify extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " spotify'da çalıyor...");
  }
}

// Child Class
class AppleMusic extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + "applemusic'de çalıyor...");
  }
}

const spo = new Spotify("www.api.spotify.com");
const apple = new AppleMusic("www.apple.api.com");

spo.getMusics();
spo.playMusic("test");

apple.getMusics();
apple.playMusic("deneme");
