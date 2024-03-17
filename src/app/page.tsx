import Navbar from "~/components/navbar/Navbar";
import Banner from "~/layouts/banner/Banner";
import Services from "~/layouts/services/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Services />
    </main>
  );
}