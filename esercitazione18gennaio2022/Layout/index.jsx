import Link from "next/link";
import styles from "./index.module.scss";
import { useRouter } from "next/router";


export default function DefaultLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li className={`${router.pathname === "/" }`}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={`${router.pathname === "/gallery"}`}>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>  
      <h1>Benvenuto Utente</h1>
    </div>
      <div className={styles.content}>{children}</div>

      <div className={styles.footer}>
        <Link href="/">
            <a>Ritorna alla Home</a>
        </Link>
      </div>
    </>
  );
};