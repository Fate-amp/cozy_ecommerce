import { BookIcon } from "@phosphor-icons/react/dist/ssr"

function Categories() {
  return (
    <div className="w-full h-[700px] lg:h-[550px] bg-[#fef8f0] p-16 lg:p-24">
      <div className="w-full h-auto lg:h-1/2 pb-8 lg:pb-0 flex flex-col justify-center items-center">
        <p className="text-3xl sm:text-4xl font-black text-amber-800">Browse by Category</p>
        <p className="text-xl mt-6 text-amber-800">Discover your next favorite read</p>
      </div>
      <div className="h-1/2 flex items-center justify-between flex-wrap lg:flex-nowrap mt-10">
        {
          ["Philosophy","Psychology","Thriller","Poetry"].map((item,index)=>{
            return(
              <div key={index} className="w-1/2 lg:w-1/4 h-2/3 lg:h-full hover:shadow-2xl hover:-translate-y-1.5 rounded-3xl transition-all duration-300 flex flex-col justify-center items-center group cursor-pointer p-3">
                <div className="w-24 h-24 bg-amber-700 shadow-2xs rounded-3xl group-hover:scale-105 transition-all duration-300 flex justify-center items-center">
                  <BookIcon size={50} color="white" />
                </div>
                <p className="mt-4 text-amber-800 text-xl font-bold group-hover:text-amber-700 transition-all duration-300">{item}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories