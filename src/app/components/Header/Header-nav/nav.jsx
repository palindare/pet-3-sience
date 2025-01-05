"use client";
import styles from "./nav.module.css";
import SelectionWindow from "./Selection-window/SelectionWindow.jsx";
import Image from "next/image";
import logo_img from "../images/logo.png";
import { useState } from "react";
import { useEffect } from "react";

function Nav() {
  const [isAnimated, setIsAnimated] = useState();
  const [currentdiv, setCurrentDiv] = useState();
  const [showWindow,setShowWindow] = useState()

  useEffect(() => {
    setCurrentDiv(undefined);
  }, [currentdiv === null]);

  const mouseEnter = () => {
    setCurrentDiv(true);
    setShowWindow(true)
    clearTimeout(isAnimated);
  };

  const mouseLeave = () => {
    const animate = setTimeout(() => {
      setCurrentDiv(false);
    }, 300);
    setIsAnimated(animate);
  };

  return (
    <>
      <div className={styles.fixed}>
        <div className={styles.container_nav}>
          <div className={styles.background}></div>
          <div className={styles.marking}>
            <div className={styles.nav_info}>
              <div className={styles.container_logo}>
                <Image src={logo_img} alt="logo img" height={45} width={80} />
              </div>
              <div className={styles.info_tabs}>
                <SelectionWindow
                  currentdiv={currentdiv}
                  isAnimated={isAnimated}
                  showWindow={showWindow}
                  setIsAnimated={setIsAnimated}
                  setCurrentDiv={setCurrentDiv}
                  setShowWindow={setShowWindow}
                />
                <ul className={styles.menu_tabs}>
                  <div
                    onMouseMove={() => mouseEnter()}
                    onMouseEnter={() => mouseEnter()}
                    onMouseLeave={() => mouseLeave()}
                    className={styles.border_tabs}
                  >
                    <li className={styles.tab_1}>О нас</li>
                    <span
                      className={
                        currentdiv === true ? styles.slideIn : styles.slideOut
                      }
                    ></span>
                  </div>
                  <div className={styles.border_tabs}>
                    <li className={`${styles.tab_1} ${styles.tab}`}>Проекты</li>
                  </div>
                  <div className={styles.border_tabs}>
                    <li className={`${styles.tab_1} ${styles.tab}`}>Услуги</li>
                  </div>
                  <div className={styles.border_tabs}>
                    <li className={`${styles.tab_1} ${styles.tab}`}>Блог</li>
                  </div>
                  <div className={styles.border_tabs}>
                    <li className={`${styles.tab_1} ${styles.tab}`}>Контакты</li>
                  </div>
                  <div className={styles.border_tabs}>
                    <li className={`${styles.tab_1} ${styles.tab}`}>Образование</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className={styles.user_items}>
              <div className={styles.border_img}>
                <div className={styles.login}>
                  <span>Войти</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
