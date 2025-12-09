import { CoffeeIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-auto xl:h-screen w-full bg-linear-to-tl from-amber-600 to-amber-400 pl-10 pr-10 xl:pr-24 xl:pl-10 py-18 lg:py-14 xl:py-0">
      <div className="h-full w-full flex flex-col xl:flex-row items-center">
        {/* Hero section's part 1_description */}
        <div className="w-full md:w-[75%] xl:w-1/2">
          {/* Opening hours */}
          <div className="w-[80%] sm:w-[60%] xl:w-1/2 h-10 sm:h-12 bg-white rounded-3xl shadow-2xl flex justify-center items-center">
            {/* Icon */}
            <div className="mx-2 text-amber-600">
              <CoffeeIcon size={23} />
            </div>
            {/* Opening Description and hours */}
            <p className="text-[12px] sm:text-sm text-amber-800 font-bold p-2">
              Open Daily 9am-8pm • Free WiFi
            </p>
          </div>
          {/* The hero section's title */}
          <div className="mt-6">
            <p className="text-5xl md:text-6xl text-shadow-2xs text-white font-bold">
              Your Cozy Corner
            </p>
            <p className="text-5xl md:text-6xl text-shadow-2xs text-amber-200 font-bold mt-2">
              for Great Stories
            </p>
          </div>
          {/* The main description */}
          <div className="mt-5">
            <p className="text-white text-xl font-thin leading-8">
              Browse our hand-picked selection, grab a coffee, and lose yourself
              in a good book. We&apos;re more than a bookstore—we&apos;re your
              reading community!
            </p>
          </div>
          {/* Buttons of Arrivals and joining the book club */}
          <div className="flex mt-6">
            <button className="bg-white px-3 sm:px-8 py-2 sm:py-3 mr-3 shadow-2xl cursor-pointer text-amber-600 font-bold rounded-2xl text-lg hover:scale-105 hover:opacity-80 transition-all duration-300 text-[10px] sm:text-[14px] sm:text-base">
              Shop New Arrivals
            </button>
            <button className="bg-amber-900 px-3 sm:px-8 py-2 sm:py-3 text-white cursor-pointer shadow-2xl border-2 border-[#ffffff81] text-lg rounded-2xl font-bold hover:scale-105 hover:opacity-90 transition-all duration-300 text-[10px] sm:text-[14px] sm:text-base">
              Join Book Club
            </button>
          </div>
        </div>
        {/* Hero section's books */}
        <div className="w-auto md:w-[500px] h-full p-2 md:p-8 flex flex-wrap justify-center items-center">
          {[
            {
              title: "cozy",
              src: "/images/book-cozy.jpg",
            },
            {
              title: "cozy",
              src: "/images/book-cozy.jpg",
            },
            {
              title: "cozy",
              src: "/images/book-cozy.jpg",
            },
            {
              title: "cozy",
              src: "/images/book-cozy.jpg",
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className={`w-[90px] md:w-[150px] h-[120px] md:h-[200px] relative m-4 rounded-xl overflow-hidden ${
                  index % 2 !== 0 ? "rotate-6" : "-rotate-6"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="hover:rotate-6 hover:scale-105 transition-all duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
