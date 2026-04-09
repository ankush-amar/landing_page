import styles from "./Navbar.module.css";

function Navbar() {
    return(
        <nav className = {styles.nav}>
            <div className = {styles.logo}>My Brand
                <ul className = {styles.links}>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Offers</li>
                    <li>Sell</li>
                </ul>
            </div>

            
            <div className = {styles.head}>
                <h1>Welcom to</h1>
                <p>Brand.com</p>
            </div>

            <div></div>
        

            <button className = {styles.btn}>Get Started</button>

        </nav>
    );
}

export default Navbar;