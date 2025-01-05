import styles from "./section.module.css";
import Slider from "./Section-slider/slider"; 
import SliderLink from "./Section-slider-link/sliderLink";
import SectionPanel from "./Section-panel/sectionPanel";
import SectionInfo from "./Section-info/sectionInfo";
import SectionInfoCenter from "./Section-info-center/sectionInfoCenter";

function Section() {
    return (
    <>
        <Slider/>
        <SectionInfo/>
        <SectionPanel/> 
        <SliderLink/>
        <SectionInfoCenter/>
    </>
    )
}

export default Section;
