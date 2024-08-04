import { Component } from "react";
import "./CounterClass.css";

/*
 * Componentler iki çeşittir.Biri Function Component diğeri ise Class Component dir. Class Componentler Function Componentlerin atasıdır.Bizler günümüzde class componenti çok kullanmasakda hem lifeCycle metotlarının  hemde react hooklarının daha anlaşılır olması için önemlidir.

*/
export default class CounterClass extends Component {
  // Class componentin kurucu metodu
  constructor(props) {
    super(props);

    // Class component de state tanımlama
    this.state = {
      count: 0,
    };
  }
  arttır = () => {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };
  azalt = () => {
    this.setState({ ...this.state, count: this.state.count - 1 });
  };
  /* lifeCycle(Yaşam Döngüsü): Tıpkı bizler gibi componentlerde doğar,büyür ve ölürler.Bu aşamaları yakalayabilmemiz için yani bir bileşenin ekrana geldiği,güncellendiği yada ekrandan kaldırıldığı anları yakalamak için lifeCycle kullanılır. Componentin ekrana geldiği anı componentDidMount; componentin ekrandan kaldırıldığı anı componentWillUnmount  ve compoenentin   güncellendiği anı ise componentDidUpdate ile yakalarız.
  // ! Bileşenin Ekrana Gelmesi
  componentDidMount() {
    console.log("Bileşen Ekrana Geldi");
  }
  // ! Bileşenin Ekrandan Kaldırılması
  componentWillUnmount() {
    console.log("Bileşen Ekrandan Kaldırıldı");
  }
  // ! Bileşenin Güncellenmesi
  componentDidUpdate() {
    console.log("Bileşen Güncellendi");
    alert("Bileşen Güncellendi");
  }
*/
  render() {
    return (
      <div id="wrapper">
        <h1>Class Component</h1>
        <button style={{ background: "green" }} onClick={() => this.arttır()}>
          Arttır
        </button>
        {this.state.count}
        <button style={{ background: "red" }} onClick={() => this.azalt()}>
          Azalt
        </button>
      </div>
    );
  }
}
