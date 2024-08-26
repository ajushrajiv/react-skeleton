import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

function NavBar() {
  return <div className={styles.mainContainer}>
    <div className={styles.rightContainer}>
        <Link to="/login">
            <button>Login</button>
        </Link>
    </div>
  </div>;
}

export default NavBar;