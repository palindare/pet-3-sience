import styles from "./about.module.css";
import Image from "next/image";
import professor_img from "../images/professor.png";

function About() {
  return (
    <>
      <div className={styles.about_center}>
        <div className={styles.main_about}>
          <Image className={styles.professor} src={professor_img} alt="image" />
          <div className={styles.about_info}>
            <div className={styles.container_text}>
              <div className={styles.main_text}>
                Румянцев Александр Григорьевич
              </div>
              <div className={styles.text}>
                «НМИЦ ДГОИ им. Дмитрия Рогачева – крупнейшее в мире учреждение
                науки и высокотехнологичной медицинской помощи детям со
                злокачественными новообразованиями, наследственными и
                приобретенными заболеваниями крови и иммунодефицитами. Науку в
                Центре представляют четыре инновационных научных института:
                гематологии, иммунологии и клеточных технологий; онкологии,
                радиологии и ядерной медицины; лечебно-реабилитационный научный
                центр; высшая школа молекулярной и экспериментальной медицины. В
                клинике 470 коек, в том числе в круглосуточном стационаре – 220,
                в дневном стационаре – 50 и реабилитационных 200 коек.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
