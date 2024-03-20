import Banner from "../Banner";
import Established from "./Established";
import Mission from "./Mission";
import Timeline from "./Timeline";

export default function About() {
  return (
    <>
      <Banner content = {"About us"} />
      <Established />
      <Mission />
      <Timeline />

      <section>
        <h2>Professional Team</h2>
        <div>
          <div>
            <div>
              <img
                src="https://demosites.royal-elementor-addons.com/nature-v2/wp-content/uploads/sites/89/2023/08/Team-3-1.jpg"
                alt="Emily Shelton"
              />
              <h3>Emily Shelton</h3>
              <div>Sony CEO</div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://demosites.royal-elementor-addons.com/nature-v2/wp-content/uploads/sites/89/2023/08/Team-1-1.jpg"
                alt="Robbie Alexander"
              />
              <h3>Robbie Alexander</h3>
              <div>Sony CEO</div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://demosites.royal-elementor-addons.com/nature-v2/wp-content/uploads/sites/89/2023/08/Team-2-1.jpg"
                alt="Liliana Hahn"
              />
              <h3>Liliana Hahn</h3>
              <div>Sony CEO</div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://demosites.royal-elementor-addons.com/nature-v2/wp-content/uploads/sites/89/2023/08/Team-4.jpg"
                alt="Aaliyah Odling"
              />
              <h3>Aaliyah Odling</h3>
              <div>Sony CEO</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
