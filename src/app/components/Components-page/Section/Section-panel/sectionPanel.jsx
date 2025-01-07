"use client"
import styles from "./sectionPanel.module.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import favorite_project_1_img from "../images/favorite_project_1.webp"
import favorite_project_2_img from "../images/favorite_project_2.jpg"
import favorite_project_3_img from "../images/favorite_project_3.jpg"
import favorite_project_4_img from "../images/favorite_project_4.jpg"

function SectionPanel() {
    const [isDraging, setIsDraging] = useState(false)
    const [currentPageX, setCurrentPageX] = useState(0)
    const [changePageX, setChangePageX] = useState(0)
    const [positionX, setPositionX] = useState(0)
    const [sliderWidth,setSliderWidth] = useState(0)
    const [tabWidth, setTabWidth] = useState(0)
    const sliderRef = useRef(null)
    const tabRef = useRef(null)

    useEffect(() => {
        setSliderWidth(sliderRef.current.clientWidth)
        setTabWidth(tabRef.current.clientWidth + 12)
    }, [sliderRef,tabRef])

    const data = 
    [
        {
            id: 1,
            img: favorite_project_1_img,
            title: "Сайт, созданный нашими студентами: иновации и креативность в каждом элементе",
            category: ["Научное достижение","Программирование"]
        },
        {
            id: 2,
            img: favorite_project_2_img,
            title: "Дроны в действии: Инновации, меняющие мир с высоты птичьего полета",
            category: ["Научное достижение","Машиностроение"]
        },
        {
            id: 3,
            img: favorite_project_3_img,
            title: "Взлетная полоса: Как наш студент превратил мечту о дроне в реальность",
            category: ["Машиностроение"]
        },
        {
            id: 4,
            img: favorite_project_4_img,
            title: "Гоночные болиды и плавучие краны: Творчество студентов в мире технологий",
            category: ["Машиностроение", "Программирование"]
        },
    ]

    const mouseDown = (e) => {
        setIsDraging(true)
        setCurrentPageX(e.pageX)
        setChangePageX(positionX)
    }

    const mouseMove = (e) => {
        if(isDraging) {
            const x = e.pageX - currentPageX;
            const newPosition = changePageX + x
            const maxPosition = 0;
            const minPosition = -((data.length * tabWidth) - sliderWidth);
            if (newPosition <= maxPosition && newPosition >= minPosition) {
                setPositionX(newPosition)
            } else if (newPosition >= maxPosition) {
                setPositionX(maxPosition)
            } else if (newPosition <= minPosition) {
                setPositionX(minPosition)
            }
        }
    }

    const mouseUp = (e) => {
        setIsDraging(false)
    }

    return (
    <>
        <div onMouseMove={(e) => mouseMove(e)} onMouseUp={(e) => mouseUp(e)} className={styles.marking}>
            <div className={styles.contaner_panel}>
                <div className={styles.title}>
                    <span>Избранные проекты</span>
                </div>
                <div ref={sliderRef} onMouseDown={(e) => mouseDown(e)}  className={styles.slider}>
                    <div style={{transform:`translateX(${positionX}px)`}}>
                        {data.map(({id,title,category,img},index) => {
                            return (
                                <>
                                <div ref={tabRef} key={index} style={{transform: `translateX(${index * 103}%)`}} className={styles.slider_tab}>
                                    <div className={styles.container_tab}>
                                        <div className={styles.container_img}>
                                            <Image src={img} alt="image"/>
                                        </div>
                                        <div className={styles.container_info}>
                                            <div className={styles.container_text}>
                                                <span>{title}</span>
                                            </div>
                                            <div className={styles.category_tabs}>
                                                {category.map(value => {
                                                    return(
                                                        <>
                                                            <div className={styles.category}>{value}</div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default SectionPanel;
