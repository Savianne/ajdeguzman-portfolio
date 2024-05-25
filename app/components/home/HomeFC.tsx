import React from "react";
import { motion } from "framer-motion";
import { IStyledFC } from "@/app/types/IStyledFC";
import TextReveal from "../TextReveal";
import styled from "styled-components";
import Socials from "../Socials";
import windowSizeContext from "@/app/context/WindowSizeContextProvider";
import Button from "../Button";
import Avatar from "../Avatar";

const HomeFC: React.FC<IStyledFC> = ({className}) => {
    const _windowSize = React.useContext(windowSizeContext);
    // const [windowH, setWindowH] = React.useState(window.innerHeight)
    return(
        <div id="home" className={className}>
            {
                _windowSize && _windowSize.w >= _windowSize.h && 
                <div className="lg-screen">
                    <div className="left-col">
                        <div className="office-backdrop">
                            <div className="blured-cover"></div>
                        </div>
                        <motion.img 
                        initial={{
                            transform: "translateX(-50px)"
                        }}
                        whileInView={{
                            transform: "translateX(0)",
                            transition: { duration: 2, type: "tween"}
                        }}
                        className="dp cur" 
                        src="assets/images/aj.png" alt="" />
                    </div>
                    <div className="right-col">
                        <div>
                            <div className="item">
                                <TextReveal direction="left" alwaysShow={true}>
                                    <h1 className="cur">APPLE</h1>
                                </TextReveal>
                            </div>
                            <div className="item">
                                <TextReveal direction="left" alwaysShow={true}>
                                    <h1 className="cur">JANE</h1>
                                </TextReveal>
                            </div>
                            <div className="item">
                                <TextReveal direction="left" alwaysShow={true}>
                                    <h1 className="cur">DE GUZMAN</h1>
                                </TextReveal>
                            </div>
                            <div className="socials-container">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                _windowSize && _windowSize.w < _windowSize.h &&
                <div className="sm-screen">
                    <div className="top-container">
                        <div className="office-backdrop">
                            <div className="blured-cover"></div>
                        </div>
                        <motion.img 
                        initial={{
                            transform: "translateX(-50px)"
                        }}
                        whileInView={{
                            transform: "translateX(0)",
                            transition: { duration: 2, type: "tween"}
                        }}
                        className="dp cur" 
                        src="assets/images/aj.png" alt="" />
                    </div>
                    <div className="bottom-container">
                        <div>
                            <div className="item">
                                <TextReveal direction="left" alwaysShow={true}>
                                    <h1 className="cur">APPLE</h1>
                                </TextReveal>
                            </div>
                            <div className="item">
                                <TextReveal direction="left" alwaysShow={true}>
                                    <h1 className="cur">JANE</h1>
                                </TextReveal>
                            </div>
                            <div className="item">
                                <TextReveal direction="left" alwaysShow={true}>
                                    <h1 className="cur">DE</h1>
                                </TextReveal>
                            </div>
                            <div className="item">
                                <TextReveal direction="left" alwaysShow={true}>
                                    <h1 className="cur">GUZMAN</h1>
                                </TextReveal>
                            </div>
                            <div className="socials-container">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


const AutoGraf = styled.h1`
    font-size: 4vw;
    font-family: Autograf;
    color: #F7CFE7;
    mix-blend-mode: hue;
    white-space: nowrap;
`;

export default HomeFC;