import styles from "./Score.module.css";

export default function Score({ count }) {
    return (
        <>
            <div className={styles.container}>{count}</div>
            <button onClick={() => {console.log("hejka")}}></button>
        </>
    );
}

// xd