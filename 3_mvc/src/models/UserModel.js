// Model: Veri işlemleri burada tanımlanır
export default class UserModel {
  // api'dan kullanıcı veirlerini alıcak method tanımla
  async getUsers() {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      return await res.json();
    } catch (error) {
      console.log(err);
    }
  }
}
