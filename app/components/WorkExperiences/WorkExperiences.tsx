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
                        <TextReveal direction="right">
                            <p className="description">
                            I manage the <a href="https://www.facebook.com/profile.php?id=100067208912235">Roxas Coc Pastoral Message</a> Facebook page, creating and curating content to spread God&apos;s 
                            word and engage our community. My role involves posting updates, promoting programs and events, and 
                            fostering an inspiring online environment. Through strategic content and active engagement, I help 
                            connect our congregation and extend our outreach.
                            </p>
                        </TextReveal>
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
                        <TextReveal direction="right">
                            <p className="description">
                            Before transitioning to manage the Roxas Church of Christ&apos;s Facebook page, I spent several years as 
                            their Radio DJ. In this role, I curated and hosted programs that uplifted and inspired our listeners. 
                            Through music, messages, and community engagement, I helped foster a sense of connection and spirituality 
                            among our audience.
                            </p>
                        </TextReveal>
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
                        <TextReveal direction="right">
                            <p className="description">
                            During my studies, I honed my skills as an Event Emcee/Host, guiding audiences through various gatherings 
                            and occasions. With a blend of charisma and professionalism, I ensured events flowed seamlessly while keeping 
                            attendees engaged and entertained. My experience as an Event Emcee instilled 
                            in me the ability to captivate audiences and create vibrant atmospheres, skills I continue to utilize in my 
                            professional endeavors.
                            </p>
                        </TextReveal>
                    </span>
                </div>
                <div className="right-image-content" style={{backgroundImage: 'url(assets/images/emcee.jpg)'}}></div>
            </motion.div>
        </div>
    )
}

export default WorkExperiencesFC;