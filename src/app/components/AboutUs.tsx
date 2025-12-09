import { BookIcon, CoffeeIcon, HeartIcon, UsersIcon } from "@phosphor-icons/react/dist/ssr";

export default function AboutUs() {
  return (
    <div id="about" className="w-full h-auto lg:h-[600px] px-6 sm:px-36 py-20 flex flex-col items-center bg-[#fef8f0]">
      <div className="w-full xl:w-2/3 flex flex-col justify-center items-center">
        <div className="text-amber-600">
          <CoffeeIcon size={70} />
        </div>
        <p className="text-amber-800 font-black text-4xl mt-6">Our Story</p>
        <p className="text-center text-amber-800 text-lg mt-6 font-thin">
          The Corner Bookshop opened its doors in 2015 with a simple mission: to
          create a warm, welcoming space where our community could discover
          great books and connect with fellow readers.
        </p>
        <div className="w-full flex flex-col lg:flex-row mt-6">
            {[
              {
                title: "Curated Selection",
                description: "Every book is hand-picked by our passionate staff",
                icon: <BookIcon size={50} />,
              },
              {
                title: "Community First",
                description: "Supporting local authors and hosting regular events",
                icon:<HeartIcon size={50} />,
              },
              {
                title: "Personal Touch",
                description: "Personalized recommendations from people who care",
                icon: <UsersIcon size={50} />,
              },
            ].map((item,index)=>{
                return(
                    <div key={index} className="w-full lg:w-1/3 mt-6 lg:mt-0 p-3 flex flex-col items-center">
                        <div className="text-amber-600">{item.icon}</div>
                        <p className="text-amber-800 font-bold mt-3 text-lg">{item.title}</p>
                        <p className="text-center text-amber-800 mt-3">{item.description}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
}
