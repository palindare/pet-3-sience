import styles from "./header.module.css";
import Nav from "./Header-nav/nav";
  
function Header() {
    return (
      <>
        <div className={styles.Header}>
          <Nav />
        </div>
      </>
    );
  }
  
  export default Header;
  
