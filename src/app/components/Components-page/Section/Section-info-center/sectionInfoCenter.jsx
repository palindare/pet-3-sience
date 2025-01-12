"use client";
import { useState } from "react";
import styles from "./sectionInfoCenter.module.css";
import Image from "next/image";
import arrow_img from "../images/arrow.png";

function SectionInfoCenter() {
  const [showSchemeCenter, setShowSchemeCenter] = useState(false);
  const [showCentersFacts, setShowCentersFacts] = useState(false)
  const [showlegislation, setShowlegislation] = useState(false)
  const [showAntiCorruption, setShowAntiCorruption] = useState(false)

  return (
    <>
      <div className={styles.background}>
        <div className={styles.marking}>
          <div className={styles.container_panel}>
            <div style={{maxHeight: showSchemeCenter ? "1000px" : "60px"}} className={styles.panel}>
              <div className={styles.content}>
                <div onClick={() => setShowSchemeCenter(!showSchemeCenter)} className={styles.title}>
                  <div className={styles.title_text}>Схема Центра</div>
                  <div style={{transform: showSchemeCenter ? "rotate(-90deg)" : "rotate(90deg)"}} className={styles.content_img}>
                    <Image src={arrow_img} alt="img" />
                  </div>
                </div>
                <div className={styles.content_text}>
                  <div className={styles.main_text}>Lorem</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                </div>
              </div>
            </div>
            <div style={{maxHeight: showCentersFacts ? "2000px" : "60px"}} className={styles.panel}>
              <div className={styles.content}>
                <div onClick={() => setShowCentersFacts(!showCentersFacts)} className={styles.title}>
                  <div className={styles.title_text}>Цифры и факты</div>
                  <div style={{transform: showCentersFacts ? "rotate(-90deg)" : "rotate(90deg)"}} className={styles.content_img}>
                    <Image src={arrow_img} alt="img" />
                  </div>
                </div>
                <div className={styles.content_text}>
                  <div className={styles.main_text}>Lorem</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                </div>
              </div>
            </div>
            <div style={{maxHeight: showlegislation ? "2000px" : "60px"}} className={styles.panel}>
              <div className={styles.content}>
                <div onClick={() => setShowlegislation(!showlegislation)} className={styles.title}>
                  <div className={styles.title_text}>Законодательство и нормативные документы</div>
                  <div style={{transform: showlegislation ? "rotate(-90deg)" : "rotate(90deg)"}} className={styles.content_img}>
                    <Image src={arrow_img} alt="img" />
                  </div>
                </div>
                <div className={styles.content_text}>
                  <div className={styles.main_text}>Lorem</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                </div>
              </div>
            </div>
            <div style={{maxHeight: showAntiCorruption ? "2000px" : "60px"}} className={styles.panel}>
              <div className={styles.content}>
                <div onClick={() => setShowAntiCorruption(!showAntiCorruption)} className={styles.title}>
                  <div className={styles.title_text}>Противодействие коррупции</div>
                  <div style={{transform: showAntiCorruption ? "rotate(-90deg)" : "rotate(90deg)"}} className={styles.content_img}>
                    <Image src={arrow_img} alt="img" />
                  </div>
                </div>
                <div className={styles.content_text}>
                  <div className={styles.main_text}>Lorem</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid voluptatibus, hic praesentium labore inventore sit!
                  Officia maiores natus esse vel nobis eum et, excepturi in quos
                  ab odio corporis placeat. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid voluptatibus, hic
                  praesentium labore inventore sit! Officia maiores natus esse
                  vel nobis eum et, excepturi in quos ab odio corporis placeat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionInfoCenter;
