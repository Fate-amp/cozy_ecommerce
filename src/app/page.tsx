import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/HeroSection";
import StaffPicks from "./components/StaffPicks";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <HeroSection/>
      <Categories />
      <StaffPicks />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
