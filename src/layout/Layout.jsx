import dynamic from 'next/dynamic';
import styles from "../styles/index.module.scss";

// Dynamic imports con loading states opcionales
const Profile = dynamic(() => import('../component/Profile'), {
  loading: () => <p>Loading profile...</p>
});

const Footer = dynamic(() => import('../component/Footer'), {
  loading: () => <p>Loading footer...</p>
});

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header>
        <Profile />
      </header>
      
      <main className={styles.mainContent}>
        {children}
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;