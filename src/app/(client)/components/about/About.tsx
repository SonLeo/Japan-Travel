import styles from "./About.module.css"
import Banner from "../Banner";

export default function About() {
  return (
    <>
      <Banner content = {"About us"} />

      <section className={styles["established"]}>
        <div className={styles["established-heading"]}>
          <h3>Established in 2003</h3>
        </div>

        <div className={styles["established-desc"]}>
          <h4 className={styles["established-sub-heading"]}>
            Two differed husbands met screened his. Bed was form wife out ask
            draw. Wholly coming at we no enable. Offending sir delivered
            questions.
          </h4>
          <p className={styles["established-content"]}>
            Boy favourable day can introduced sentiments entreaties. Noisier
            carried of in warrant because. So mr plate seems cause chief widen
            first. Two differed husbands met screened his. Bed was form wife out
            ask draw. Wholly coming at we no enable. Offending sir delivered
            questions now new met. Acceptance she interested.
          </p>
          <h4 className={styles["established-sub-heading"]}>Renee Howard</h4>
        </div>
      </section>

      <section>
        <div>
          <p>
            "At the Heart of Our Approach Lies Collaboration, and Support
            Enabling Us to Achieve Optimal Results for Our Clients Together."
          </p>
          <div></div>
          <div>
            <div>
              <h3>Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <h3>Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <h3>Values</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <div>
              <h2>Company Timeline</h2>
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">Order Placed</div>
                    <time className="font-caveat font-medium text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra aliquam
                    vestibulum morbi blandit cursus risus.
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      Order Shipped
                    </div>
                    <time className="font-caveat font-medium text-indigo-500">
                      09/06/2023
                    </time>
                  </div>
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra aliquam
                    vestibulum morbi blandit cursus risus.
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">In Transit</div>
                    <time className="font-caveat font-medium text-indigo-500">
                      10/06/2023
                    </time>
                  </div>
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra aliquam
                    vestibulum morbi blandit cursus risus.
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      Out of Delivery
                    </div>
                    <time className="font-caveat font-medium text-indigo-500">
                      12/06/2023
                    </time>
                  </div>
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra aliquam
                    vestibulum morbi blandit cursus risus.
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">Delivered</div>
                    <time className="font-caveat font-medium text-amber-500">
                      Exp. 12/08/2023
                    </time>
                  </div>
                  <div className="text-slate-500">
                    Pretium lectus quam id leo. Urna et pharetra aliquam
                    vestibulum morbi blandit cursus risus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
