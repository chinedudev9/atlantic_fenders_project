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
import StartCounter from "@/components/StartCounter";
import TeamComponent from "@/components/TeamComponent";
import BlogSlider from "@/components/BlogSlider";
import Partner from "@/components/Partner";
import BlogPost from "@/components/BlogPost";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider/>
      <StartCounter />
      <HeroThird />
      <HeroSecond />
      <HeroFourth />
      <HeroFifth />
      <TeamComponent />
      <Partner />
      <BlogPost />
      <Footer />
      
       
       
      <SocialSidebar /> 
      <ContactPopup />
      <LiveChatWidget />
      <CookieBanner />
    </div>
  );
}
