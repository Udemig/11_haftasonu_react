import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, { payload }) => {
      // şuan eklenen elemandan sepette aynı tipte olanı var mı?
      const existingItem = state.cart.find(
        (item) =>
          item.id === payload.item.id &&
          item.selectedType === payload.selectedType
      );

      if (existingItem) {
        //eğer sepette varsa miktar arttır
        existingItem.quantity += 1;
      } else {
        // eğer sepette yoksa sepete elemanı ekle
        state.cart.push({
          ...payload.item,
          selectedType: payload.selectedType,
          quantity: 1,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
