"use client"
import styles from "./burger.module.css";
import Image from "next/image";
import Link from "next/link";
import close_img from "../../images/close.svg";
import { useSelector,useDispatch } from "react-redux";


function Burger() {
    const stateShowMenu = useSelector(state => state.showMenu.showMenu)
    const dispach = useDispatch()

  return (
    <>
      <div style={{visibility: stateShowMenu ? "visible" : "hidden", opacity: stateShowMenu ? "0.5" : "0"}} className={styles.overlay}></div>
      <div style={{transform: stateShowMenu ? "translateX(0)" : "translateX(100%)"}} className={styles.burger_menu}>
        <div className={styles.container_info}>
          <div onClick={() => dispach({type: "CHANGE_MENU", payload: !stateShowMenu})} className={styles.close_menu}>
            <button>
              <Image src={close_img} alt="img" />
            </button>
          </div>
          <div className={styles.container_category}>
            <div className={styles.container_items}>
              <Link href={"#"}><span>О нас</span></Link>
              <Link href={"#"}><span>Проекты</span></Link>
              <Link href={"#"}><span>Блог</span></Link>
              <Link href={"#"}><span>Услуги</span></Link>
              <Link href={"#"}><span>Контакты</span></Link>
              <Link href={"#"}><span>Образование</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burger;
