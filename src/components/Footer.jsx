import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={styles['footer-container']}>
            <div className="about-us">
                <h5>About Us</h5>
            Vrindavan Packages: Your premier travel agency specializing in curated journeys and unforgettable adventures. We pride ourselves on crafting personalized experiences that introduce the beauty and culture of destinations in India. Let us be your guide to exploration and discovery.
            </div>
            <div className={styles['useful-links']}>
                <h5>Useful Links</h5>
                <ul>
                    <li>About Us</li>
                    <li>Destinations</li>
                    <li>Custom Tour</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles['tour-packages']}>
                <h5>Tour Packages</h5>
                <ul>
                <li>Mathura Vrindavan Tours</li>
                <li>Taj Mahal Tour Packages</li>
                <li>Golden Triangle Tour Packages</li>
                <li>Rajasthan Tour Packages</li>
                <li>Same Day Tour Packages</li>
                </ul>
            </div>
            <div className={styles['contact-us']}>
            <h5>Contact Us</h5>
            We are 24/7 available.

            Call us at :
            +91 7451996431, +91 7300620809, 6397587456

            Mail us at :
            info@vrindavantoursandpackages.com

            Meet us at :
            Shree Sadguru Seva Sadan,
            Gokul, Mathura 281303

            </div>
        </div>
    )
}