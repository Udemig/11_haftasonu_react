import { render, screen, rerender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/cart/Modal";

import { useSelector } from "react-redux";
import CartInfo from "../components/cart/CartInfo";
import CartItem from "../components/cart/CartItem";

// use selector mock
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

// cart item mock
jest.mock("../components/cart/CartItem", () => () => (
  <div data-testid="cart-item" />
));

// cart info mock
jest.mock("../components/cart/CartInfo");

describe("Modal Component", () => {
  const closeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("isOpen değerine göre modal ekrana basılır", () => {
    // use selector çağrıldığında return etmesi gereken veriyi söyle
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla
    const { rerender } = render(
      <Modal isOpen={false} close={closeMock} />
    );

    // modal ekranda yoktur
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();

    // isOpen true gönderip tekrar renderlayalım
    rerender(<Modal isOpen={true} close={closeMock} />);

    // modal ekrandadır
    screen.getByTestId("modal");
  });

  it("sepetin doluluk durumuna göre ekrana uyarı basılır", () => {
    // useSelector çağrılınca boş sepete döndür
    useSelector.mockReturnValue({ cart: [] });

    //bileşeni renderla
    const { rerender } = render(<Modal isOpen close={closeMock} />);

    // ekranda uyarı mesajı vardır
    screen.getByText("Henüz sepete ürün eklenmedi");

    // useSelector çağrılınca dolu sepet döndür
    const cartItems = [{ id: 1, name: "Ürün 1" }];
    useSelector.mockReturnValue({ cart: cartItems });

    // bileşeni tekrar renderla
    rerender(<Modal isOpen={true} close={closeMock} />);

    // ekranda uyarı mesajı yoktur
    expect(screen.queryByText(/eklenmedi/)).not.toBeInTheDocument();
  });

  it("sepet dolu ise ekrana cart itemlar gelir", () => {
    const cartItems = [
      { id: 1, name: "Ürün 1" },
      { id: 2, name: "Ürün 2" },
    ];

    useSelector.mockReturnValue({ cart: cartItems });

    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);

    const items = screen.getAllByTestId("cart-item");

    expect(items.length).toBe(2);

    useSelector.mockReturnValue({ cart: [] });

    rerender(<Modal isOpen={true} close={closeMock} />);

    expect(screen.queryByTestId("cart-item")).not.toBeInTheDocument();
  });

  it("x butonuna tıklanınca modal kapanır", async () => {
    const user = userEvent.setup();

    useSelector.mockReturnValue({ cart: [] });

    render(<Modal isOpen close={closeMock} />);

    const btn = screen.getByTestId("close");

    await user.click(btn);

    expect(closeMock).toHaveBeenCalled();
  });
});
