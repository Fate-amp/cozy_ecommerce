"use client";
import { useCart } from "@/store/useCart";
import Image from "next/image";
import React from "react";

export interface IBookCard {
  id: number;
  title: string;
  author: string;
  price: string;
  imgSrc: string;
  location: string;
}

function BookCard({ id, title, author, price, imgSrc, location }: IBookCard) {
  const { addBook } = useCart();
  // The following function adds a book to the cart on click
  const handleAddBook = () => {
    addBook(id);
  };
  if (location === "staff_picks") {
    return (
      <div
        key={id}
        className="h-[640px] sm:h-[530px] lg:h-[470px] xl:h-[500px] w-full sm:w-[275px] md:w-[310px] lg:w-[230px] xl:w-[300px] border-2 border-amber-100 hover:border-amber-300 hover:-translate-y-1.5 cursor-pointer transition-all duration-300 bg-white shadow-2xl rounded-3xl p-4 mb-8 flex flex-col justify-between group mr-6"
      >
        {/* The book's image */}
        <div className="h-[70%] lg:h-[55%] xl:h-[70%] w-full relative rounded-3xl overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="group-hover:scale-105 transition-all duration-300"
          />
        </div>
        {/* Book's title and author */}
        <div className="mt-6">
          <p className="text-lg font-bold text-amber-800">{title}</p>
          <p className="text-amber-900 mt-2">{author}</p>
        </div>
        {/* Price and order button */}
        <div className="border-t border-t-amber-100 w-full flex justify-between items-center py-3 mt-2">
          <p className="text-amber-600 font-black text-xl">€{price}</p>
          <button
            onClick={handleAddBook}
            className="h-[35px] bg-amber-600 rounded-xl cursor-pointer text-white font-bold px-3 py-2 flex justify-center items-center text-[14px]"
          >
            Add to Bag
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={id}
        className="h-[640px] sm:h-[530px] lg:h-[470px] xl:h-[450px] w-full sm:w-[275px] md:w-[290px] lg:w-[275px] xl:w-[260px] 2xl:w-[320px] border-2 border-amber-100 hover:border-amber-300 hover:-translate-y-1.5 cursor-pointer transition-all duration-300 bg-white shadow-2xl rounded-3xl p-4 mb-8 flex flex-col justify-between group mr-6"
      >
        {/* The book's image */}
        <div className="h-[70%] lg:h-[55%] xl:h-[70%] w-full relative rounded-3xl overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="group-hover:scale-105 transition-all duration-300"
          />
        </div>
        {/* Book's title and author */}
        <div className="mt-6">
          <p className="text-lg font-bold text-amber-800">{title}</p>
          <p className="text-amber-900 mt-2">{author}</p>
        </div>
        {/* Price and order button */}
        <div className="border-t border-t-amber-100 w-full flex justify-between items-center py-3 mt-2">
          <p className="text-amber-600 font-black text-xl">€{price}</p>
          <button
            onClick={handleAddBook}
            className="h-[35px] bg-amber-600 rounded-xl cursor-pointer text-white font-bold px-3 py-2 flex justify-center items-center text-[14px]"
          >
            Add to Bag
          </button>
        </div>
      </div>
    );
  }
}

export default BookCard;
