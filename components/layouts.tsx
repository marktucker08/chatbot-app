import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return <div className={styles.main}>{children}</div>;
}