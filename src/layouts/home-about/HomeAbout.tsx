import styles from "./HomeAbout.module.css"

export default function HomeAbout() {
    return (
        <section className="max-w-screen-2xl px-4 h-full mx-auto">
            <div className={styles["about"]}>
                <div className={styles["about-content"]}>
                    <h2 className={styles["about-heading"]}>About us</h2>
                    <h3 className={styles["about-sub-heading"]}>What Sets Our Business Apart for Your Selection</h3>
                    <p className={styles["about-desc"]}>Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested.</p>
                    <button className={styles["about-action"]}>More about us</button>
                </div>
                <div className={styles["about-img"]}>
                    <img src="https://i.imgur.com/2oaIp5J.png" alt="About img" />
                </div>
            </div>
        </section>
    )
}