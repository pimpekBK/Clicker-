import styles from "./Score.module.css";

export default function Score({ count }) {
    return (
        <>
            <div className={styles.container}>{count}</div>
        </>
    );
}