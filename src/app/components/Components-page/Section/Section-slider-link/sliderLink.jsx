"use client";
import styles from "./sliderLink.module.css";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import phone_img from "../images/phone.png"
import location_img from "../images/location.png"
import watch_img from "../images/watch.png"
import adress_img from "../images/adress.png"


const SliderLink = () => {
    
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    
    return (
        <>
        <div className={styles.background}>
            <div className={styles.marking}>
                <div className={styles.title}>
                    <span>Местоположение и контакты</span>
                </div>
                <div className={styles.container_link}>
                    <div className={styles.location}>
                    <MapContainer attributionControl={false} zoomControl={false} center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    Это ваше местоположение.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.container_contact}>
                            <div className={styles.contact_item}>
                                <div className={styles.contact_logo}>
                                    <Image src={phone_img} alt="img"/>
                                </div>
                                <div className={styles.container_text}>
                                    <div className={styles.contact_title}>Позвоните нам</div>
                                    <div className={styles.contact_text}>
                                        <span>+7 962 287 65 70</span>
                                        <span>+7 495 287 65 81</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_item}>
                                <div className={styles.contact_logo}>
                                    <Image src={location_img} alt="img"/>
                                </div>
                                <div className={styles.container_text}>
                                    <div className={styles.contact_title}>Как нас найти</div>
                                    <div className={styles.contact_text}>
                                        <span>г. Москва, ГСП-7, 117198,ул.</span>
                                        <span>Саморы Машела, д. 1</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_item}>
                                <div className={styles.contact_logo}>
                                    <Image src={watch_img} alt="img"/>
                                </div>
                                <div className={styles.container_text}>
                                    <div className={styles.contact_title}>Часы работы</div>
                                    <div className={styles.contact_text}>
                                        <span>Пн-Пт: 9:00 - 18:00</span>
                                        <span>Сб-Вс: выходные</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_item}>
                                <div className={styles.contact_logo}>
                                    <Image src={adress_img} alt="img"/>
                                </div>
                                <div className={styles.container_text}>
                                    <div className={styles.contact_title}>Наша почта</div>
                                    <div className={styles.contact_text}>
                                        <span>example1234@mail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SliderLink;