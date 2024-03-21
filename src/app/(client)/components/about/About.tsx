import Banner from "../Banner";
import Established from "./Established";
import Mission from "./Mission";
import Team from "./Team";
import Timeline from "./Timeline";

export default function About() {
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
