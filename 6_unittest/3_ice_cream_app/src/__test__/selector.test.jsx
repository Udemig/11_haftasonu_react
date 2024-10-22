import { render, screen } from '@testing-library/react';
import Selector from '../components/card/Selector';
import userEvent from '@testing-library/user-event';

describe('Selector Bileşeni', () => {
  const mockFn = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Butonlara tıklanınca fonksiyon doğru parametre ile tetiklenir', async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // bileşeni renderla
    render(<Selector selectedType={null} setSelectedType={mockFn} />);

    // butonları al
    const cornetBtn = screen.getByRole('button', { name: 'Külahta' });
    const cupBtn = screen.getByRole('button', { name: 'Bardakta' });

    // külahta butonuna tıkla
    await user.click(cornetBtn);

    // fonksiyon "cornet" paramatresi ile tetiklenir
    expect(mockFn).toHaveBeenCalledWith('cornet');

    // bardakta butonuna tıkla
    await user.click(cupBtn);

    // fonksiyon "cup" paramatresi ile tetiklenir
    expect(mockFn).toHaveBeenCalledWith('cup');
  });

  it('Cornet seçilince buttonun arkaplanı değişir', () => {
    render(<Selector selectedType="cornet" setSelectedType={mockFn} />);

    // gerekli elemanları al
    const cornetBtn = screen.getByRole('button', { name: 'Külahta' });
    const cupBtn = screen.getByRole('button', { name: 'Bardakta' });

    //cornet butonunda seçili eleman class'ları vardır
    expect(cornetBtn).toHaveClass('bg-white text-black shadow-lg');

    //cup butonunda seçili eleman class'ları yoktur
    expect(cupBtn).not.toHaveClass('bg-white text-black shadow-lg');
  });

  it('Cup seçilince buttonun arkaplanı değişir', () => {
    render(<Selector selectedType="cup" setSelectedType={mockFn} />);

    // gerekli elemanları al
    const cornetBtn = screen.getByRole('button', { name: 'Külahta' });
    const cupBtn = screen.getByRole('button', { name: 'Bardakta' });

    //cornet butonunda seçili eleman class'ları vardır
    expect(cupBtn).toHaveClass('bg-white text-black shadow-lg');

    //cup butonunda seçili eleman class'ları yoktur
    expect(cornetBtn).not.toHaveClass('bg-white text-black shadow-lg');
  });
});
