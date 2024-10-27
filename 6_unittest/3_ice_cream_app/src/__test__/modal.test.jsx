import { render, screen, rerender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../components/cart/Modal';

import { useSelector } from 'react-redux';
import CartInfo from '../components/cart/CartInfo';
import CartItem from '../components/cart/CartItem';

// use selector mock
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// cart item mock
jest.mock('../components/cart/CartItem', () =>
  jest.fn(() => <div data-testid="cart-item" />)
);

// cart info mock
jest.mock('../components/cart/CartInfo');

describe('Modal Component', () => {
  const closeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('isOpen değerine göre modal ekrana basılır', () => {
    // use selector çağrıldığında return etmesi gereken veriyi söyle
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla
    const { rerender } = render(<Modal isOpen={false} close={closeMock} />);

    // modal ekranda yoktur
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    // isOpen true gönderip tekrar renderlayalım
    rerender(<Modal isOpen={true} close={closeMock} />);

    // modal ekrandadır
    screen.getByTestId('modal');
  });

  it('sepet boş ise ekrana mesaj basılır', () => {});

  it('sepet dolu ise ekrana cart itemlar gelir', () => {});

  it('x butonuna tıklanınca modal kapanır', () => {});
});
