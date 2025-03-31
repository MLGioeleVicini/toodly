import styles from './page.module.scss';

export default function Home() {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Ciao, Lizzi!</h1>
            <p className={styles.text}>Questo è un esempio con SCSS.</p>
        </div>
    );
}
