import s from "./Hero.module.scss";

import video from "../../../assets/images/main/hero/hero-video.mp4";

export const Hero = () => {

    return (
        <section className={s.wrapper}>
            <video className={s['video']} width='100%' height='100vh' muted playsInline autoPlay loop style={{objectFit:'cover'}}>
                <source src={video } type="video/mp4" />
            </video>
        </section>
    )
}