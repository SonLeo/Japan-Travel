import Banner from "../components/Banner";
import Established from "../components/about/Established";
import Mission from "../components/about/Mission";
import Team from "../components/about/Team";
import Timeline from "../components/about/Timeline";

export default function AboutPage() {
  return (
    <>
      <Banner content = {"About us"} />
      <Established />
      <Mission />
      <Timeline />
      <Team />
    </>
  );
}
