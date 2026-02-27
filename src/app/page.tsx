import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import StatsCounter from "@/components/StatsCounter";
import About from "@/components/About";
import ChairmanMessage from "@/components/ChairmanMessage";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import HomeSamplingCTA from "@/components/HomeSamplingCTA";
import Equipment from "@/components/Equipment";
import WhyChoose from "@/components/WhyChoose";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Accreditations from "@/components/Accreditations";
import BlogUpdates from "@/components/BlogUpdates";
import Newsletter from "@/components/Newsletter";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <StatsCounter />
      <About />
      <ChairmanMessage />
      <VisionMission />
      <Services />
      <HomeSamplingCTA />
      <Equipment />
      <WhyChoose />
      <Team />
      <Testimonials />
      <Accreditations />
      <BlogUpdates />
      <Newsletter />
      <ContactUs />
    </>
  );
}
