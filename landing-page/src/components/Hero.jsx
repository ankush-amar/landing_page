import styles from "./Hero.module.css";

function Hero() {

    return(
        <section className = {styles.hero}>
            <div className = {styles.body}>
                <h1>Welcome to my page</h1>
                <p>Let's build something new with me</p>
            </div>
        </section>

    );
}
export default Hero;