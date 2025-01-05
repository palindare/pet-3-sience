import styles from "../SelectionWindow.module.css";
import Image from "next/image";
import alerts_img from "../../../images/icons_window/alerts.png"
import help_center_img from "../../../images/icons_window/help_center.png"
import location_img from "../../../images/icons_window/location.png"
import support_img from "../../../images/icons_window/support.png";
import allowance_img from "../../../images/icons_window/allowance.png"
import history_img from "../../../images/icons_window/history.png"
import contacts_img from "../../../images/icons_window/contacts.png"
import reviews_img from "../../../images/icons_window/reviews.png"

function SelectionCategory() {
    return (
    <>
    <div className={styles.container_category}>
    <div className={styles.category}>
          <div className={`${styles.title} ${styles.title_category}`}>
            <span>Для пользователя</span>
          </div>
          <div className={`${styles.marking_text} ${styles.marking_text_category}`}>  
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={alerts_img} alt="image" height={23} width={23} />
                  <span>Уведомление</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>Наши уведомления о новых публикациях.</span>
                </div>
              </div>
            </div>
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={support_img} alt="image" height={23} width={23} />
                  <span>Поддержка</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>Поможет вам найти ответы на вопросы</span>
                </div>
              </div>
            </div>
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={location_img} alt="image" height={23} width={23} />
                  <span>Местоположение</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>Наша геолокация для удобства пользователей</span>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className={styles.category}>
          <div className={`${styles.title} ${styles.title_category}`}>
            <span>О центре</span>
          </div>
          <div className={styles.marking_text}>  
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={allowance_img} alt="image" height={23} width={23} />
                  <span>Пособие по центру</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>Удобное пособие для пользователей центра</span>
                </div>
              </div>
            </div>
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={help_center_img} alt="image" height={23} width={23} />
                  <span>Cправочный центр</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>Наш надежный источник информации</span>
                </div>
              </div>
            </div>
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={history_img} alt="image" height={23} width={23} />
                  <span>История центра</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>История и развитие нашего центра</span>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className={`${styles.category} ${styles.category_3}`}>
          <div className={`${styles.title} ${styles.title_category}`}>
            <span>Другое</span>
          </div>
          <div className={styles.marking_text}>  
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={contacts_img} alt="image" height={23} width={23} />
                  <span>Контакты</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>Наши контакты для обратной связи</span>
                </div>
              </div>
            </div>
            <div className={`${styles.border} ${styles.border_category}`}>
              <div className={styles.container_tab}>
                <div className={`${styles.tab} ${styles.tab_category}`}>
                  <Image src={reviews_img} alt="image" height={20} width={23} />
                  <span>Отзывы</span>
                </div>
                <div className={`${styles.description} ${styles.description_category}`}>
                  <span>Отзывы пользователей о нашем центре</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
    </div>
    </>
    )
}

export default SelectionCategory;
