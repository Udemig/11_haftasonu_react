import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Card from '../components/card';
import { addToCart } from '../redux/cartSlice';

// useDispatch'i mockla
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
const useDispatchMock = require('react-redux').useDispatch;

describe('Card bileşeni', () => {
  // buradaki testlerde ortak kullanılacak değişkenler
  let dispatchMock;
  const mockItem = {
    name: 'Bal Badem',
    image: '/ice-1.png',
    price: 25,
    id: 'ca2d',
  };

  // her testten önce
  beforeEach(() => {
    // dispatch'i mockla
    dispatchMock = jest.fn();

    // useDispatch tetiklendiği zaman sahte dispatch methodunu döndür
    useDispatchMock.mockReturnValue(dispatchMock);
  });

  // her testten sonra mockları sıfırla
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('item detaylarını doğru şekilde renderlar', () => {
    render(<Card item={mockItem} />);

    screen.getByRole('heading', { name: 'Bal Badem' });
    screen.getByText('₺25 / top');
    expect(screen.getByRole('img')).toHaveAttribute('src', '/ice-1.png');
  });

  it('tipin seçili olmasına göre "Sepete Ekle" butonu görünürlüğü değişir', () => {
    render(<Card item={mockItem} />);

    // sepete ekle butonunu al
    const btn = screen.queryByRole('button', { name: 'Sepete Ekle' });

    // ekranda sepete ekle butonu görünmez (invisible classı vardır)
    expect(btn).toHaveClass('invisible');

    // külahta seçeneğini seç
    const typeBtn = screen.getByRole('button', { name: 'Külahta' });
    fireEvent.click(typeBtn);

    // ekranda spete ekle butonu görünür
    expect(btn).not.toHaveClass('invisible');
  });

  it('butona tıklanınca ürünü sepete ekler', () => {
    render(<Card item={mockItem} />);

    // bardakta seçeneğini seç
    const typeBtn = screen.getByRole('button', { name: 'Bardakta' });
    fireEvent.click(typeBtn);

    // sepete ekle butonuna tıkla
    const addBtn = screen.getByRole('button', { name: 'Sepete Ekle' });
    fireEvent.click(addBtn);

    // dispatch methodu doğru parametreler ile tetiklenir (sepete eklenir)
    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({ item: mockItem, selectedType: 'cup' })
    );
  });
});
