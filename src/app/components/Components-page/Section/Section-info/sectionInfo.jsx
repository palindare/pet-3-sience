import styles from "./sectionInfo.module.css";
import scientific_activity_img from "../images/scientific-activity.png"
import mechanical_engineering_img from "../images/mechanical_engineering.jpg"
import programming_img from "../images/programming.jpg"
import Image from "next/image";

function SectionInfo() {
  return (
    <>
    <div className={styles.marking}>
      <div className={styles.container_info}>
        <div className={styles.title}>
            <span className={styles.title_text}>Проекты</span>
            <div className={styles.marking_more}>
              <div className={styles.container_more}>
                <span>Читать больше</span>
              </div>
            </div>
        </div>
        <div className={styles.container_tabs}>
          <div className={styles.tab}>
            <div className={styles.overflow}></div>
            <div className={styles.container_tab}>
              <div className={styles.title_tab}>
                <span>Научные достижения</span>
              </div>
              <div className={styles.date_tab}>
                <span>12.11.2024</span>
              </div>
              <div className={styles.link_tab}>
                <span>Перейти</span>
              </div>
              <div className={styles.container_img}>
                <Image src={scientific_activity_img} alt="image"/>
              </div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.overflow}></div>
            <div className={styles.container_tab}>
              <div className={styles.title_tab}>
                <span>Машиностроение</span>
              </div>
              <div className={styles.date_tab}>
                <span>17.11.2024</span>
              </div>
              <div className={styles.link_tab}>
                <span>Перейти</span>
              </div>
              <div className={styles.container_img}>
                <Image src={mechanical_engineering_img} alt="image"/>
              </div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.overflow}></div>
            <div className={styles.container_tab}>
              <div className={styles.title_tab}>
                <span>Программирование</span>
              </div>
              <div className={styles.date_tab}>
                <span>18.11.2024</span>
              </div>
              <div className={styles.link_tab}>
                <span>Перейти</span>
              </div>
              <div className={styles.container_img}>
                <Image src={programming_img} alt="image"/>
              </div>
            </div>
          </div>
        </div>
              <div className={styles.marking_more_mobile}>
                <div className={styles.container_more}>
                  <span>Читать больше</span>
                </div>
              </div>
      </div>
    </div>
    </>
  );
}

export default SectionInfo;
