import { findByRole, render, screen } from '@testing-library/react';
import List from '../components/list';
import api from '../api';

// api modülünü mock'la
jest.mock('../api');

describe('List bileşeni testleri', () => {
  it('veri çekilirken ekrana loader vardır', () => {
    // api isteği atılınca gönderilcek cevabı belirle
    api.get.mockResolvedValueOnce({ data: [] });

    // list bileşenini renderla
    render(<List />);

    // ekranda loader vardır
    screen.getByTestId('loader');

    // todo belirli bir süre sonra loader ekrandan gider
  });

  it("api'da error cevabu gelirse ekrana hata mesajı gelir", () => {});

  it("api'da başarılı cevap gelirse ekrana card'lar gelir", () => {});
});
