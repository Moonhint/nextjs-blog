import styles from './layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <div className="brok">My Global Brok</div>
            { children }
        </div>
    );
};
