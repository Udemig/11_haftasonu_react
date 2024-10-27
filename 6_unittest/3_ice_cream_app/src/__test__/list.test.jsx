import { render, screen, waitFor } from '@testing-library/react';
import List from '../components/list';
import api from '../api';
import { mockArray } from '../constants';
import Card from '../components/card';
import Cart from '../components/cart';

// api modülünü mock'la
jest.mock('../api');

// car bielşeni kendi içinde providfe / browser router gibi bağımlılıkları kullandığından ve bu bağımlılkarın list bileşenin testine etki etmesini istemediğimizden card bileşenini mock'la
jest.mock('../components/card');
jest.mock('../components/cart');

describe('List bileşeni testleri', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('veri çekilirken ekrana loader vardır', async () => {
    // api isteği atılınca gönderilcek cevabı belirle
    api.get.mockResolvedValueOnce({ data: [] });

    // list bileşenini renderla
    render(<List />);

    // ekranda loader vardır
    screen.getByTestId('loader');

    // todo belirli bir süre sonra loader ekrandan gider
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });

  it("api'dan error cevabı gelirse ekrana hata mesajı gelir", async () => {
    // api isteği atılınca hatalı error vermeli
    const errMsg = 'bağlantı zaman aşımına uğradı';
    api.get.mockRejectedValueOnce(new Error(errMsg));

    // bileşeni renderla
    render(<List />);

    // api'dan cevap gelince ekrana hata mesajı gelir
    await waitFor(() => screen.getByText(errMsg));
  });

  it("api'da başarılı cevap gelirse ekrana card'lar gelir", async () => {
    // card bielşeni çağrıldığında şunu döndür
    Card.mockImplementation(({ item }) => <div>{item.name}</div>);

    // api isteği ataılınca olumlu cevap döndür
    api.get.mockResolvedValueOnce({ data: mockArray });

    // bileşeni renderla
    render(<List />);

    // veri gelince her bir nesne için ekrana card gelir
    await waitFor(() => {
      mockArray.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
});
