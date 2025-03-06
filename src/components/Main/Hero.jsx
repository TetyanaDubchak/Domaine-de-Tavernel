import s from "../../assets/styles/components/Main/Hero.module.scss";

import video from "../../assets/images/main/hero/hero-video.mp4";

export const Hero = () => {

    return (
        <section className={s.wrapper} id='top'>
            <video className={s['video']} width='100%' height='100vh' muted playsInline autoPlay loop style={{objectFit:'cover'}}>
                <source src={video } type="video/mp4" />
            </video>
        </section>
    )
}