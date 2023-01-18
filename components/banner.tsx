import styles from './banner.module.css';

const Banner = (props: any) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Coffee</span>
            <span className={styles.title2}>Connoiseur</span>
        </h1>
        <p className={styles.subTitle}>Discover you local coffee shops!</p>
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={props.handleOnClick}>{props.btnText}</button>
        </div>
    </div>;
}

export default Banner;