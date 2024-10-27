import { render, screen } from '@testing-library/react';
import CartInfo from '../components/cart/CartInfo';
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/cartSlice';
import userEvent from '@testing-library/user-event';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Cart Info', () => {
  const dispatchMock = jest.fn();
  const closeMock = jest.fn();

  const cart = [
    { id: 1, price: 50, quantity: 2 },
    { id: 2, price: 30, quantity: 1 },
  ];

  const emptyCart = [];

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    dispatchMock.mockClear();
  });

  it('subtotal, shipping, total değerleri doğru şekilde renderlanır', () => {
    render(<CartInfo cart={cart} close={closeMock} />);

    const subTotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
    const shipping = 20;
    const total = subTotal + shipping;

    screen.getByText(subTotal + '₺');
    screen.getByText(shipping + '₺');
    screen.getByText(total + '₺');
  });

  it('sepette eleman olmadığında sipariş butonu inaktiftir', () => {
    render(<CartInfo cart={emptyCart} close={closeMock} />);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  it('sepette eleman olduğunda sipariş butonu aktiftir', () => {
    render(<CartInfo cart={cart} close={closeMock} />);
    const btn = screen.getByRole('button');
    expect(btn).toBeEnabled();
  });

  it('sipariş butonuna tıklanıdığında doğru aksiyon tetiklenir', async () => {
    const user = userEvent.setup();

    render(<CartInfo cart={cart} close={closeMock} />);

    const btn = screen.getByRole('button');

    await user.click(btn);

    expect(closeMock).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(createOrder());
  });
});
