import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieBanner from "@/components/CookieBanner";
import LiveChatWidget from "@/components/Livechat widget";
import ContactPopup from "@/components/contactPopUp";
import SocialSidebar from "@/components/SocialSidebar";
import HeroSlider from "@/components/HeroSlider";
import HeroSecond from "@/components/HeroSecond";
import HeroThird from "@/components/HeroThird";
import HeroFourth from "@/components/HeroFourth";
import HeroFifth from "@/components/HeroFifth";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <HeroSecond />
      <HeroThird />
      <HeroFourth />
      <HeroFifth />
      <Footer />
      
       
       
      <SocialSidebar /> 
      <ContactPopup />
      <LiveChatWidget />
      <CookieBanner />
    </div>
  );
}
