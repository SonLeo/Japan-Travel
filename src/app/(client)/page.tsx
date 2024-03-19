import HomeBanner from "~/app/(client)/components/home/home-banner/HomeBanner";
import HomeServices from "~/app/(client)/components/home/home-services/HomeServices";
import HomeAbout from "~/app/(client)/components/home/home-about/HomeAbout";
import HomeContact from "~/app/(client)/components/home/home-contact/HomeContact";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeServices />
      <HomeAbout />
      <HomeContact />
    </main>
  );
}