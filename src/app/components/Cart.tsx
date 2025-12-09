"use client";
import { useCart } from "@/store/useCart";
import { Drawer } from "@mui/material";
import {
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";
import books from "../books.json";

export default function Cart() {
  const [open, setOpen] = useState(false);

  const { cart, addBook, reduceBook, removeBook, calculate_total, total } =
    useCart();

  // The following removes a book if the count is 1 and reduces from the count if it's more
  const handleReduction = (id: number, count: number) => {
    if (count === 1) {
      removeBook(id);
    } else {
      reduceBook(id);
    }
  };
  return (
    <div>
      <ShoppingBagIcon onClick={() => setOpen(true)} size={24} />
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        {/* The Start Drawer content when it's open */}
        <div className="h-screen w-screen lg:w-[400px]">
          {/* Title */}
          <div className="w-full px-4 pb-3 pt-9 border-b border-b-amber-200 flex justify-between">
            <div className="flex">
              <p className="text-lg text-amber-800 font-semibold">Your Cart:</p>
              {/* The number of items goes here */}
              <p className="text-lg text-amber-800 font-semibold">
                {cart.length}
              </p>
            </div>
            <div onClick={() => setOpen(false)}>
              <XIcon size={20} />
            </div>
          </div>
          {/* The cart's items */}
          <div className="p-4 h-[400px] overflow-scroll">
            {cart.map((item, index) => {
              const book = books.find((b) => b.id === item.id);
              if (!book) return null;
              const { id, title, author, price } = book;

              return (
                // Item card
                <div
                  key={index}
                  className="w-full h-28 bg-[#fef8f0] rounded-lg p-3 mb-4 flex"
                >
                  {/* The left container, the book's picture */}
                  <div className="w-1/5 relative overflow-hidden rounded-lg">
                    <Image src="/images/book-cozy.jpg" alt={title} fill />
                  </div>
                  {/* The right container, item's details and count */}
                  <div className="w-3/4 flex flex-col p-2">
                    <div className="h-1/2 w-full flex justify-between">
                      <div>
                        <p className="font-semibold text-[14px] text-amber-900">
                          {title}
                        </p>
                        <p className="font-extrathin text-[12px] text-amber-800">
                          {author}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          removeBook(id);
                          calculate_total();
                        }}
                        className="text-amber-800 cursor-pointer"
                      >
                        <XIcon size={15} />
                      </button>
                    </div>
                    <div className="h-1/2 w-full flex justify-between items-cneter mt-3">
                      {/* item counter */}
                      <div className="w-20 h-7 bg-white rounded-xs flex justify-between items-center text-[14px]">
                        <button
                          onClick={() => {
                            handleReduction(id, item.count);
                            calculate_total();
                          }}
                          className="cursor-pointer p-1 text-lg text-amber-900"
                        >
                          <MinusIcon size={10} />
                        </button>
                        <p className="text-amber-800 text-[12px] font-semibold">
                          {item.count}
                        </p>
                        <button
                          onClick={() => {
                            addBook(id);
                            calculate_total();
                          }}
                          className="cursor-pointer p-1 text-lg text-amber-900"
                        >
                          <PlusIcon size={10} />
                        </button>
                      </div>
                      {/* The line's total */}
                      <p className="text-amber-600 font-semibold text-[15px]">
                        €{item.count * Number(price)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* The fixed subtotal and checkout section*/}
          <div className="h-52 bg-white w-[400px] fixed flex flex-col p-5 bottom-0 border-t border-t-amber-200">
            <div className="h-1/2 text-amber-700 text-[14px] font-extrathin">
              <div className="h-1/2 p-2 flex justify-between">
                <p>Subtotal:</p>
                <p>€{total}</p>
              </div>
              <div className="h-1/2 p-2 flex justify-between">
                <p>Shipping:</p>
                <p>€3.99</p>
              </div>
            </div>
            <div className="h-1/2 flex flex-col justify-between border-t border-t-amber-200">
              <div className="h-1/2 flex justify-between py-3">
                <p className="text-amber-800 font-bold">Total:</p>
                <p className="text-amber-600 font-bold">€{total + 3.99}</p>
              </div>
              <div className="h-[45%]">
                <button className="w-full h-full bg-amber-600 text-white rounded-md text-[13px] font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* The end of the drawer content */}
      </Drawer>
    </div>
  );
}
