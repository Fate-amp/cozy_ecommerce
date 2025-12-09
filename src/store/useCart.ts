import { create } from "zustand";
import books from "../app/books.json";
interface ICart {
  cart: { id: number; count: number }[];
  total: number;
  addBook: (bookId: number) => void;
  calculate_total:()=>void;
  reduceBook: (bookId: number) => void;
  removeBook: (bookId: number) => void;
}

export const useCart = create<ICart>((set) => ({
  // The cart global state
  cart: [],
//   The total
   total:0,
  // The function to add to cart's books globally
  addBook: (bookId) =>
    set(({ cart }) => {
      const existing = cart.find((el) => el.id === bookId);
      if (existing) {
        return {
          cart: cart.map((item) =>
            item.id === bookId ? { ...item, count: item.count + 1 } : item
          ),
        };
      } else {
        return {
          cart: [...cart, { id: bookId, count: 1 }],
        };
      }
    }),
    // To calculate the total
  calculate_total: () =>
  set((state) => {
    const total = state.cart.reduce((acc, cur) => {
      const book = books.find((b) => b.id === cur.id);
      if (!book) return acc;
      console.log(total);
      return acc + cur.count * Number(book.price);
    }, 0);
    return { total }
  }),
  // The function to reduce books globally
  reduceBook: (bookId) =>
    set(({ cart }) => {
      const existing = cart.find((item) => item.id === bookId);
      if (existing) {
        return {
          cart: cart.map((item) =>
            item.id === bookId ? { ...item, count: item.count - 1 } : item
          ),
        };
      } else {
        return {
          cart: [...cart],
        };
      }
    }),
  removeBook: (bookId) =>
    set(({ cart }) => ({ cart: cart.filter((item) => item.id !== bookId) })),
}));
