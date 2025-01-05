import styles from "./slider.module.css";
import AdaptiveNav from "./adaptive_nav/AdaptiveNav";
import Burger from "./Burger-menu/burger";
import Image from "next/image";
import news_img from "../images/news.jpg";
import projects_img from "../images/projects.webp";
import play_video_img from "../images/play_video.png";
import center_guide_img from "../images/center_guide.jpg";
import specialists_img from "../images/specialists.jpg"

async function Slider() {
  return (
    <>
    <Burger />
      <div className={styles.marking}>
        <div className={styles.initial_window}>
        <AdaptiveNav />
          <div className={styles.marking_containers}>
            <div className={styles.container_tabs}>
              <div className={`${styles.tab_news} ${styles.tab}`}>
                <div className={styles.overlay}></div>
                <div className={styles.container_overlay}>
                  <div className={styles.title}>
                    <div className={styles.category}>Новости</div>
                  </div>
                  <div className={`${styles.info_text} ${styles.info_text_1}`}>
                    <div className={`${styles.text} ${styles.text_main}`}>
                      Российский научный фонд поддержал грантовую заявку
                      сотрудницы нашего Центра
                    </div>
                  </div>
                  <div className={`${styles.info_date} ${styles.info_text_marking} `}>
                    <div className={`${styles.date} ${styles.data_1}`}>11.12.2024</div>
                  </div>
                </div>
                <div className={styles.container_img}>
                  <Image src={news_img} alt="image" />
                </div>
              </div>
              <div className={`${styles.tab_projects} ${styles.tab}`}>
                <div className={styles.overlay}></div>
                <div className={styles.container_overlay}>
                  <div className={styles.title}>
                    <div
                      className={`${styles.category} ${styles.category_2}`}
                    >
                      Блог
                    </div>
                  </div>
                  <div className={`${styles.info_text} ${styles.project_text}`}>
                    <div style={{ fontSize: "20px" }} className={`${styles.text} ${styles.text_main}`}>
                      Российский бизнес активно замещает иностранные решения
                    </div>
                  </div>
                  <div className={`${styles.info_date} ${styles.project_data} ${styles.info_text_marking}`}>
                    <div className={`${styles.date} ${styles.data_2}`}>
                      08.12.2024
                    </div>
                  </div>
                  <div className={styles.play_video}>
                    <Image src={play_video_img} alt="image" />
                  </div>
                </div>
                <div className={styles.container_img}>
                  <Image src={projects_img} alt="image" />
                </div>
              </div>
              <div className={`${styles.center_guide} ${styles.tab}`}>
                <div className={styles.overlay}></div>
                <div className={styles.container_overlay}>
                  <div className={`${styles.title} ${styles.title_tab}`}>
                    <div
                      className={`${styles.category} ${styles.category_3}`}
                    >
                      Пособие по центру
                    </div>
                  </div>
                  <div className={`${styles.info_text} ${styles.info_tab}`}>
                    <div
                      style={{ fontSize: "15px" }}
                      className={`${styles.text} ${styles.info_text}`}
                    >
                      Отзывы и достижения нашего центра
                    </div>
                  </div>
                </div>
                <div className={styles.container_img}>
                  <Image src={center_guide_img} alt="image" />
                </div>
              </div>
              <div className={`${styles.specialists} ${styles.tab}`}>
              <div className={styles.overlay}></div>
                <div className={styles.container_overlay}>
                  <div className={`${styles.title} ${styles.title_tab}`}>
                    <div
                      className={`${styles.category} ${styles.category_4}`}
                    >
                      Специалисты
                    </div>
                  </div>
                  <div className={`${styles.info_text} ${styles.info_tab}`}>
                    <div
                      style={{ fontSize: "15px" , width: "250px"}}
                      className={`${styles.text} ${styles.info_text}`}
                    >
                      Наша команда: кто мы и чем занимаемся в центре.
                    </div>
                  </div>
                </div>
                <div className={styles.container_img}>
                  <Image src={specialists_img} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
