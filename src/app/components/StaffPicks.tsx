import { HeartIcon } from "@phosphor-icons/react/dist/ssr";
import BookCard from "./BookCard";
import books from "../books.json";

export default function StaffPicks() {

  
  // Function to get 4 random books
  function getRandomBooks() {
    const books_copy = [...books];
    const picked_books = [];

    for (let i = 0; i < 4; i++) {
      const random_index = Math.floor(Math.random() * books_copy.length);

      picked_books.push(books_copy[random_index]);

      books_copy.splice(random_index, 1);
    }

    return picked_books;
  }

  return (
    <div className="p-8 md:p-14 lg:p-6 bg-[#fef8f0] flex flex-col">
      {/* Title: Staff picks */}
      <div className="w-full py-10 flex text-amber-600">
        <HeartIcon size={40} weight="fill" />
        <p className="text-3xl sm:text-4xl text-amber-800 font-black ml-4">
          Staff Picks This Month
        </p>
      </div>
      {/* The staff picks books */}
      <div className="flex justify-between flex-wrap lg:flex-nowrap w-full">
        {getRandomBooks().map((item) => {
          return (
            <BookCard
              key={item.id}
              id={item.id}
              title={item.title}
              imgSrc={item.cover}
              author={item.author}
              price={item.price}
              location="staff_picks"
            />
          );
        })}
      </div>
    </div>
  );
}
