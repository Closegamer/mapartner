import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import {cookies} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const {
        data: { session },
    } = await supabase.auth.getSession()

  return (
    <>
      <ScrollUp />
      <Hero session={session}/>
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
