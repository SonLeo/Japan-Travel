import Navbar from "~/components/navbar/Navbar";
import HomeBanner from "~/layouts/home-banner/HomeBanner";
import HomeServices from "~/layouts/home-services/HomeServices";
import HomeAbout from "~/layouts/home-about/HomeAbout";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeBanner />
      <HomeServices />
      <HomeAbout />
    </main>
  );
}