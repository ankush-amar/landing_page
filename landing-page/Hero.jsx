import styles from "./Hero.module.css";

function Hero() {

    return(
        <section className ={styles.hero}>
            <div className = {styles.body}>
                <h1>Welcome to my page</h1>
                <p>Build something new with us</p>
            </div>
        </section>
    );
}
export default Hero;