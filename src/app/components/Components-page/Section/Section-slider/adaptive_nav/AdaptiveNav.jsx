"use client";
import styles from "./AdaptiveNav.module.css";
import Image from "next/image";
import logo_img from "../../images/logo.png";
import burger_menu_img from "../../images/burger_menu.png";
import { useSelector, useDispatch } from "react-redux";
function AdaptiveNav() {
  const stateShowMenu = useSelector((state) => state.showMenu.showMenu);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.marking}>
        <div className={styles.container_nav_adaptive}>
          <div className={styles.container_info}>
            <div className={styles.logo}>
              <Image src={logo_img} alt="img" />
            </div>
            <div onClick={() => dispatch({type: "CHANGE_MENU", payload: !stateShowMenu})} className={styles.burger_menu}>
              <Image src={burger_menu_img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdaptiveNav;
