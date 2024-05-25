"use client"
import React from "react";
import { motion, useInView } from "framer-motion";
import { IStyledFC } from "@/app/types/IStyledFC";
import styled from "styled-components";
import TextReveal from "../TextReveal";
import Autograf from "../Autograf";
import Avatar from "../Avatar";

const boxVariants = {
    toView: {
        left: '200px',
        width: "calc(100% - 530px)",
        opacity: 1,
        transition: { duration: 4, type: "spring" }
    }, 
    toHide: {
        left: '500px',
        width: "calc(100% - 730px)",
        opacity: 1,
        transition: { duration: 4, type: "spring" }
    }
}

const IntroductionFC: React.FC<IStyledFC> = ({className}) => {
    const boxRef = React.useRef<null | HTMLDivElement>(null)
    const isBOxInView = useInView(boxRef);
    return (
        <div className={className}> 
            <motion.div 
            className="box" 
            ref={boxRef}
            variants={boxVariants}
            animate={isBOxInView? "toView" : "toHide"}
            ></motion.div>
            <div className="text-container large-screen">
                <TextReveal direction="right"><h1>Hello There!</h1></TextReveal>
                <TextReveal direction="left"  flexItem>
                    <p>
                        I\'m Apple Jane De Guzman, a dedicated and enthusiastic woman. With a passion for aiding others remotely, 
                        I\'m excited to share my journey and showcase my skills through this portfolio. Throughout my educational 
                        and professional experiences, I\'m thrilled to continue learning and growing in this dynamic field. 
                        Join me on this journey as I explore new opportunities and make meaningful contributions to your organization. 
                        Let\'s connect, collaborate, and create something incredible together!
                    </p>
                </TextReveal>
            </div>
            <div className="small-screen">
                <Avatar round={false} src={"assets/images/aj2.jpg"} size="300px" alt="pic"/>
                <TextReveal direction="right"><h1>Hello There!</h1></TextReveal>
                    <TextReveal direction="left" flexItem>
                        <p>
                            I'I\'m Apple Jane De Guzman, a dedicated and enthusiastic woman. With a passion for aiding others remotely, 
                            I\'m excited to share my journey and showcase my skills through this portfolio. Throughout my educational 
                            and professional experiences, I\'m thrilled to continue learning and growing in this dynamic field. 
                            Join me on this journey as I explore new opportunities and make meaningful contributions to your organization. 
                            Let\'s connect, collaborate, and create something incredible together!
                        </p>
                    </TextReveal>
            </div>
             <DisplayPicture src="assets/images/aj2.jpg"/>
             <Autograf
             as={motion.h1}
             animate={
                {
                    opacity: isBOxInView? 0.2 : 0,
                    transition: { duration: 2, delay: 2}
                }
             }
             >Aj DeeGuzman</Autograf>
        </div>
    )
}

interface IDisplayPicture extends IStyledFC {
    src: string;
}

const variants = {
    toView: (entity: "border" | "picture") => ({
        top: entity == "picture"? "-15px" : "15px",
        left: entity == "picture"? "0px" : "30px",
        opacity: 1,
        transition: { duration: 3, type: "spring" }
    }), 
    toHide: (entity: "border" | "picture") => ({
        top: "0px",
        left: "0px",
        opacity: 0,
        transition: { duration: 3, type: "spring" }
    })
}

const DisplayPictureFC: React.FC<IDisplayPicture> = ({className}) => {
    const ref = React.useRef<null | HTMLDivElement>(null)
    const isInView = useInView(ref);
    return(
        <div className={className} ref={ref}>
            <motion.div 
            className="border"
            custom={"border"}
            variants={variants}
            animate={isInView? "toView" : "toHide"}
            ></motion.div>
            <motion.div 
            className="picture"
            custom={"picture"}
            variants={variants}
            animate={isInView? "toView" : "toHide"}
            ></motion.div>
        </div>
    )
}

const DisplayPicture = styled(DisplayPictureFC)`
    position: relative;
    width: 250px;
    height: 350px;
    margin-right: 30px;
    /* background-color: yellow; */

    > .picture, .border {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    > .picture {
        top: 0px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${({src}) => src});
        z-index: 6;
    }

    > .border {
        left: 0px;
        top: 0px;
        border: 5px solid rgba(210, 68, 152, 0.38);
        width: calc(100% - 10px);
        height: calc(100% - 10px);
    }
`;

const Introduction = styled(IntroductionFC)`
    position: relative;
    display: flex;
    /* flex-shrink: 1; */
    flex: 0 1 1100px;
    padding: 0 30px;
    margin: 0 auto;
    /* margin-top: 100px; */

    && > .small-screen {
        display: none;
    }
    
    && > ${Autograf} {
        top: 15dvh;
        left: 8%;
        opacity: 0;
    }

    > .box {
        position: absolute;
        left: 500px;
        /* margin-left: 200px; */
        height: 100%;
        width: calc(100% - 530px);
        background-color: var(--primary-color);
        z-index: 5;
    }
    
    > .text-container {
        display: flex;
        flex: 1;
        gap: 0.4in;
        margin-right: 40px;
        height: 100%;
        justify-content: center;
        font-family: BalooBhaina2;
        flex-direction: column;
        z-index: 6;

        h1 {
            font-weight: bold;
            font-size: 25px;
            white-space: nowrap;
        }

        p {
            font-size: 17px;
            text-align: justify;
            line-height: 1.5;
            text-indent: 1in;
            z-index: 11;
        }

    }

    @media (max-width: 800px) {
        && > ${DisplayPicture}, && > .large-screen {
            display: none;
        }

        && > .box {
            display: none;
        }

        && > .small-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            margin: 0 auto;

             
            h1, p {
                flex: 0 1 100%;
                font-family: BalooBhaina2;
                max-width: 600px;
            }

            h1 {
                font-weight: bold;
                font-size: 25px;
                white-space: nowrap;
                text-align: center;
            }

            p {
                font-size: 12px;
                text-align: center;
                line-height: 1.5;
                /* text-indent: 1in; */
                z-index: 11;
            }


        }
    }
`

export default Introduction;