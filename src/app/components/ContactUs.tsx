import { EnvelopeIcon, MapPinIcon, PhoneCallIcon, TelegramLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function ContactUs() {

// Contact info to be used later down the section
const contactInfo=[
  {
    "type": "Email",
    "value": "hello@cornerbookshop.com",
    "icon": <EnvelopeIcon size={25} />
  },
  {
    "type": "Phone",
    "value": "(555) 123-4567",
    "icon": <PhoneCallIcon size={25} />
  },
  {
    "type": "Address",
    "value": "456 Reading Street",
    "icon": <MapPinIcon size={25} />
  }
]


  return (
    <div id="contact" className="w-full flex flex-col items-center py-20 bg-[#f8efdea7]">
      <div className="w-[93%] md:w-[80%] lg:w-[60%] xl:w-[47%]">
        <div className="w-full flex flex-col items-center">
          <p className="text-3xl font-black text-amber-800">Get in Touch</p>
          <p className="text-amber-800 mt-6">
            Have questions? We&apos;d love to hear from you!
          </p>
        </div>
        {/* The contact form */}
        <div className="w-full p-6 bg-white rounded-4xl mt-6 border-2 border-amber-200">
          <div className="w-full">
            <label
              className="text-amber-800 font-bold text-[14px]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-10 border border-amber-400 rounded-md mt-1 p-2"
              placeholder="Your name"
            />
          </div>
          <div className="w-full mt-6">
            <label
              className="text-amber-800 font-bold text-[14px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full h-10 border border-amber-400 rounded-md mt-1 p-2"
              placeholder="your@email.com"
            />
          </div>
          <div className="w-full mt-6">
            <label
              className="text-amber-800 font-bold text-[14px]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full h-32 border border-amber-400 rounded-md mt-1 p-2"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>
          {/* The submit button */}
          <div className="w-full h-10 mt-4">
            <button className="w-full bg-amber-600 hover:bg-amber-700 transition-all duration-300 rounded-2xl text-white font-black p-3 flex justify-center items-center cursor-pointer">
              <TelegramLogoIcon size={20} />
              <p className="ml-2">Send Message</p>
            </button>
          </div>
          {/* Contact Info */}
          <div className="w-full border-t border-t-amber-100 flex flex-col sm:flex-row items-center sm:items-start justify-center mt-8 p-6">
            {contactInfo.map((item,index)=>{
              return(
                <div key={index} className="w-full sm:w-1/3 flex flex-col items-center mt-3 sm:mt-0">
                  <p className="text-amber-600">{item.icon}</p>
                  <p className="text-amber-800 font-semibold text-[14px] mt-3">{item.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
