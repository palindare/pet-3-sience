import styles from "./footer.module.css";
import Image from "next/image";
import logo_img from "./images/logo.png";

function Footer() {
  return (
    <>
      <div className={styles.marking}>
        <div className={styles.container_footer}>
          <div className={styles.slogon}>
            <span>
              Научный сайт «Дроны и технологии» посвящен беспилотным летательным
              аппаратам и связанным с ними технологиям. Мы предлагаем
              разнообразные материалы, включая статьи, проекты и практические
              руководства, которые охватывают темы строительства, программирования
              и исследований дронов. Наша цель — создать активное сообщество, где
              исследователи, энтузиасты и новички могут делиться своими знаниями,
              опытом и идеями.
            </span>
          </div>
          <div className={styles.end_footer}>
            <div className={styles.info_logo}>
              <Image src={logo_img} alt="img" />
              <div className={styles.text_logo}>React</div>
            </div>
            <div className={styles.text}>
              © 2016 – 2024 гг. Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
