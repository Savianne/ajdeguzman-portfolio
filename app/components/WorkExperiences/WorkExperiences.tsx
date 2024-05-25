import React from "react";
import { motion } from "framer-motion";
import { IStyledFC } from "@/app/types/IStyledFC";
import TextReveal2 from "../TextReveal2";
import TextReveal from "../TextReveal";

// interface IWorkExperiences extends IStyledFC {

// }

const WorkExperiencesFC: React.FC<IStyledFC> = ({className}) => {
    return(
        <div id="works" className={className}>
            <div className="heading-text-reveal-container">
                <TextReveal2 text={"What"} delay={0}/> 
                <TextReveal2 text={"I've"} delay={0.2}/> 
                <TextReveal2 text={"been"} delay={0.4}/> 
                <TextReveal2 text={"up"} delay={0.6}/> 
                <TextReveal2 text={"to"} delay={0.8}/> 
                <TextReveal2 text={"lately"} delay={1}/> 
            </div>
            {/* <h1>What I've been up to lately</h1> */}
            <motion.div layout className="card"
            initial={{
                transform: "translateY(50px)"
            }}
            whileInView={{
                transform: "translateY(0px)",
                transition: {duration: 3, type: 'spring'}
            }}
            viewport={{once: true}}>
                <div className="info-area">
                    <span className="numbering-reveal-container">
                        <TextReveal2 text={0} delay={0}/><TextReveal2 text={1} delay={0.2}/>
                    </span>
                    <span className="title-reaveal-container">
                        <TextReveal direction="right"><p className="title">Facebook Page Manager</p></TextReveal>
                    </span>
                    <span className="description-reveal-container">
                        <TextReveal direction="right"><p className="description">I\'m Apple Jane De Guzman, a dedicated and enthusiastic woman. With a passion for aiding others remotely, I\'m excited to share my journey and showcase my skills through this portfolio. </p></TextReveal>
                    </span>
                </div>
                <div className="right-image-content" style={{backgroundImage: 'url(assets/images/services.jpg)'}}></div>
            </motion.div>
            <motion.div layout className="card"
            initial={{
                transform: "translateY(50px)"
            }}
            whileInView={{
                transform: "translateY(0px)",
                transition: {duration: 3, type: 'spring'}
            }}
            viewport={{once: true}}>
                <div className="left-image-content" style={{backgroundImage: 'url(assets/images/radio-dj.jpg)'}}></div>
                <div className="info-area">
                    <span className="numbering-reveal-container">
                        <TextReveal2 text={0} delay={0}/><TextReveal2 text={2} delay={0.2}/>
                    </span>
                    <span className="title-reaveal-container">
                        <TextReveal direction="right"><p className="title">Radio Dj</p></TextReveal>
                    </span>
                    <span className="description-reveal-container">
                        <TextReveal direction="right"><p className="description">I\'m Apple Jane De Guzman, a dedicated and enthusiastic woman. With a passion for aiding others remotely, I\'m excited to share my journey and showcase my skills through this portfolio. </p></TextReveal>
                    </span>
                </div>
                <div className="bottom-image-content" style={{backgroundImage: 'url(assets/images/radio-dj.jpg)'}}></div>
            </motion.div>
            <motion.div layout className="card"
            initial={{
                transform: "translateY(50px)"
            }}
            whileInView={{
                transform: "translateY(0px)",
                transition: {duration: 3, type: 'spring'}
            }}
            viewport={{once: true}}>
                <div className="info-area">
                    <span className="numbering-reveal-container">
                        <TextReveal2 text={0} delay={0}/><TextReveal2 text={3} delay={0.2}/>
                    </span>
                    <span className="title-reaveal-container">
                        <TextReveal direction="right"><p className="title">Event Emcee (Part-time)</p></TextReveal>
                    </span>
                    <span className="description-reveal-container">
                        <TextReveal direction="right"><p className="description">I&apos;m Apple Jane De Guzman, a dedicated and enthusiastic woman. With a passion for aiding others remotely, I&apos;m excited to share my journey and showcase my skills through this portfolio. </p></TextReveal>
                    </span>
                </div>
                <div className="right-image-content" style={{backgroundImage: 'url(assets/images/emcee.jpg)'}}></div>
            </motion.div>
        </div>
    )
}

export default WorkExperiencesFC;