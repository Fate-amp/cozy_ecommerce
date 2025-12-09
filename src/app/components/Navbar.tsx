import {
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import Cart from "./Cart";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="h-36">
      {/* The upper part conatining the title and global icons */}
      <div className="w-full flex h-2/3 relative">
        {/* The central container containing title and moto */}
        <div className="w-full flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl text-amber-900 font-bold">
              <Link href="/">The Corner Bookshop</Link>
            </h1>
            <p className="text-xs text-amber-600 mt-2">
              Your neighborhood reading nook since 2015
            </p>
          </div>
        </div>
        {/* Right container containing the icons */}
        <div className="h-full absolute right-0 flex justify-end items-center text-amber-800">
          <div className="mx-3 cursor-pointer">
            <MagnifyingGlassIcon size={24} />
          </div>
          <div className="mx-3 cursor-pointer">
            <Cart />
          </div>
        </div>
      </div>
      {/* The lower part containing the menu */}
      <div className="flex justify-center items-center">
        {
          [{
            title:"Shop",
            link:"/Books"
          },{
            title:"About",
            link:"#about"
          },{
            title:"Contact",
            link:"#contact"
          }].map((item,index)=>{
            return(
              <div key={index} className="mx-4">
                <p className="text-sm text-amber-900 font-semibold hover:text-amber-600 transition-all duration-300"><Link href={item.link}>{item.title}</Link></p>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}
