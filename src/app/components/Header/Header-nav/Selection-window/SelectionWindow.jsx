import styles from "./SelectionWindow.module.css";
import { useEffect, useState } from "react";
import SelectionCategory from "./Selection-category/SelectionCategory";
import Image from "next/image";
import scientist_img from "../../images/icons_window/scientist.png"
import news_img from "../../images/icons_window/news.png"
import project_img from "../../images/icons_window/project.png"

function SelectionWindow({ currentdiv,setCurrentDiv,setIsAnimated,setShowWindow,showWindow,isAnimated }) {
  
  const mouseEnter = () => {
    if (showWindow) {
      setCurrentDiv(true)
      clearTimeout(isAnimated)
    }
  }

  const mouseLeave = () => {
    setShowWindow(false)
    const animate = setTimeout(() => {
        setCurrentDiv(false)
    }, 200)
    setIsAnimated(animate)
  }

  
  return (
    <>
      <div onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} className={`${styles.container_selection} ${currentdiv === true ? styles.show_window : styles.hide_window}`}>
        <div className={styles.main_category}>
            <div className={styles.title}> 
              <span>Информация</span>
            </div>
          <div className={styles.marking_text}>
            <div className={styles.border}>
              <div className={styles.container_tab}>
                <div className={styles.tab}>
                  <Image src={scientist_img} alt="image" height={21} width={23} />
                  <span>Специалисты</span>
                </div>
                <div className={styles.description}>
                  <span>Состав экспертов и специалистов.</span>
                </div>
              </div>
            </div>
             <div className={styles.border}>
              <div className={styles.container_tab}>
                <div className={styles.tab}>
                  <Image src={news_img} alt="image" height={20} width={23} />
                  <span>Новости</span>
                </div>
                <div className={styles.description}>
                  <span>Последние события и обновления</span>
                </div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.container_tab}>
                <div className={styles.tab}>
                  <Image src={project_img} alt="image" height={21} width={23} />
                  <span>Проекты</span>
                </div>
                <div className={styles.description}>
                  <span>Наши результаты и достижения проектов.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SelectionCategory />
      </div>
    </>
  );
}

export default SelectionWindow;
