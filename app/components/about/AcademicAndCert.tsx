"use client"
import React from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { IStyledFC } from "@/app/types/IStyledFC";
import TextReveal from "../TextReveal";
import TextReveal2 from "../TextReveal2";
import ScrollingText from "../ScrollingText";

interface INumbering extends IStyledFC {
    num: number;
    delay: number;
}

const NumberingFC: React.FC<INumbering> = ({className, num, delay}) => {
    const ref = React.useRef<null | HTMLHeadingElement>(null);
    const isInView = useInView(ref);
    return(
        <div className={className} ref={ref}>
            <h1 className="hidden">{num}</h1>
            <motion.h1 
            className="num"
            initial={{
                top: "-60%"
            }}
            animate={{
                top: isInView? "0%" : "-60%",
                transition: { duration: 2, type: "spring", delay }
            }}
            >
            {num}
        </motion.h1>
        </div>
    )
};

const Numbering = styled(NumberingFC)`
    position: relative;
    display: flex;
    width: fit-content;
    height: fit-content;
    overflow: hidden;

    && > .num, && > .hidden {
        display: flex;
        width: fit-content;
        font-family: Bungee;
        font-size: 23vw;
        color: inherit;
        opacity: 0.5;

        @media (max-width: 1000px) {
            font-size: 30vw;
        }

        @media (max-width: 500px) {
            font-size: 23vw;
        }
    }

    && > .hidden {
        opacity: 0;
    }

    && > .num {
        position: absolute;
        left: 0;
    }
`;

const AcademicAndCertFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            {/* <div className="title">
                <div className="text-reveal">
                    <TextReveal2 text="My" delay={0}/>
                    <TextReveal2 text="Educational" delay={0.2}/>
                    <TextReveal2 text="Attainment" delay={0.4}/>
                </div>
            </div> */}
            <div className="scrolling-text-container">
                <ScrollingText>
                    <TextScroll>My Educational Attainments -</TextScroll>
                </ScrollingText>
            </div>
            <div className="row">
                <div className="content count-1">
                    <div className="content-row">
                        <div className="left-col">
                            <Numbering num={0} delay={0} />
                            <Numbering num={1} delay={0.2} />
                            <div className="title-group">
                                <TextReveal direction="right">
                                    <h2 className="title-text">Bachelor of Science</h2>
                                </TextReveal>
                                <TextReveal direction="right">
                                    <h2 className="title-text">in Information</h2>
                                </TextReveal>
                                <TextReveal direction="right">
                                    <h2 className="title-text">Technology</h2>
                                </TextReveal>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="academic-info">
                                <img src="assets/images/paint.png" alt="paint" className="paint-backdrop" />
                                <div className="values">
                                    <TextReveal direction="right">
                                        <h2 className="value school">Isabela Satate University</h2>
                                    </TextReveal>
                                    <TextReveal direction="right">
                                        <h2 className="value">2019-2023</h2>
                                    </TextReveal>
                                    <TextReveal direction="right">
                                        <h2 className="value">1.431 (Magna Cumlaude)</h2>
                                    </TextReveal>
                                </div>
                                <div className="center-line"></div>
                                <div className="props">
                                    <TextReveal direction="left">
                                        <h2  className="prop">School</h2>
                                    </TextReveal>
                                    <TextReveal direction="left">
                                        <h2 className="prop">A/Year</h2>
                                    </TextReveal>
                                    <TextReveal direction="left">
                                        <h2 className="prop">GWA</h2>
                                    </TextReveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content count-2">
                    <div className="content-row">
                        <div className="left-col">
                            <div className="title-group">
                                <TextReveal direction="left">
                                    <h2 className="title-text">Associate in Church</h2>
                                </TextReveal>
                                <TextReveal direction="left">
                                    <h2 className="title-text">Music</h2>
                                </TextReveal>
                            </div>
                            <Numbering num={0} delay={0} />
                            <Numbering num={2} delay={0.2} />
                        </div>
                        <div className="right-col">
                            <div className="academic-info">
                                <img src="assets/images/paint.png" alt="paint" className="paint-backdrop" />
                                <div className="props">
                                    <TextReveal direction="left">
                                        <h2  className="prop">School</h2>
                                    </TextReveal>
                                    <TextReveal direction="left">
                                        <h2 className="prop">A/Year</h2>
                                    </TextReveal>
                                    {/* <TextReveal direction="left">
                                        <h2 className="prop">GWA</h2>
                                    </TextReveal> */}
                                </div>
                                <div className="center-line"></div>
                                <div className="values">
                                    <TextReveal direction="right">
                                        <h2 className="value school">Aparri Bible Seminary</h2>
                                    </TextReveal>
                                    <TextReveal direction="right">
                                        <h2 className="value">2011-2014</h2>
                                    </TextReveal>
                                    {/* <TextReveal direction="right">
                                        <h2 className="value">1.30</h2>
                                    </TextReveal> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TextScroll = styled.h1`
    gap: 0.1ch;
    font-size: 8.5vw;
    font-family: Brugetta, Autography, Bungee;
    font-weight: 600;
    white-space: nowrap;
    padding: 0 0.1ch;
`
const AcademicAndCert = styled(AcademicAndCertFC)`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;

    > .scrolling-text-container {
        display: flex;
        flex: 0 1 100%;
        justify-content: center;
        background-color: #303f49;
        color: #fff;
        margin-top: 50px;
        padding: 50px 0;
    }

    > .row {
        display: flex;
        flex: 0 1 100%;
        flex-wrap: wrap;
        align-items: center;

        > .content {
            display: flex;
            flex: 0 1 100%;
            padding: 40px 0;
            align-items: center;
            z-index: 10;
            /* height: 100dvh; */

            > .content-row {
                display: flex;
                flex: 0 1 1100px;
                margin: 0 auto;
                flex-wrap: wrap;
                
                > .left-col, > .right-col {
                    position: relative;
                    display: flex;
                    padding: 0 30px;
                    flex: 0 1 100%;   
                    align-items: center;

                    > ${Numbering} {
                        color: #75d3f3;
                    }

                    > .title-group {
                        display: flex;
                        width: fit-content;
                        height: fit-content;
                        flex-direction: column;

                        .title-text {
                            font-size: 5vw;
                            line-height: 1.2;
                            font-family: Brugetta, Bungee, BalooBhaina2;
                            font-weight: 600;
                            white-space: nowrap;
                            color: var(--main-text-color);

                            @media (max-width: 1000px) {
                                font-size: 6vw;
                            }
                        }
                    }

                    > .academic-info {
                        position: relative;
                        display: flex;
                        width: fit-content;
                        height: 100%;
                        gap: 10px;
                        margin-left: auto;
                        align-items: center;
                        
                        > .paint-backdrop {
                            position: absolute;
                            right: 0;
                            width: 85%;
                            opacity: 0.7;
                        }

                        > .values, > .props {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;
                            margin-top: 10px;
                        }

                        > .values {
                            font-size: 2.5vw;
                            font-family: Autography, Bungee;
                            gap: 5px;

                            .value {
                                padding: 5px 0;
                                white-space: nowrap;
                            }

                            .school {
                                font-family: AlexanderLettering;
                                font-size: 4vw;

                                @media (max-width: 1000px) {
                                    font-size: 60px;
                                }

                                @media (max-width: 800px) {
                                    font-size: 40px;
                                }
                            }
                        }

                        > .props {
                            align-items: flex-start;
                            
                            .prop {
                                font-family: BalooBhaina2;
                                font-weight: 700;
                                text-decoration: underline;
                                white-space: nowrap;
                            }
                        }

                        > .center-line {
                            display: flex;
                            height: 100%;
                            width: 0;
                            border-left: 1px solid #75d3f3;
                            mix-blend-mode: difference;
                        } 
                    }
                }

                > .left-col {
                    border-bottom: 1px solid #75d3f3;
                }
            }
        }

        > .count-2 > .content-row > .left-col {
            justify-content: flex-end;
            border-color: #ff5470;
        }

        > .count-2 > .content-row > .right-col > .academic-info {
            margin-left: 0;
        }

        > .count-2 > .content-row > .left-col > .title-group {
            align-items: flex-end;
        }

        > .count-2 > .content-row > .left-col > ${Numbering} {
            color: #ff5470;
        }

        > .count-2 > .content-row > .right-col > .academic-info {
            margin-left: 0;

            > .paint-backdrop {
                left: 20px;
                rotate: -180deg;
                z-index: 0;
            }

            > .values {
                align-items: flex-start;
            }

            .props {
                align-items: flex-end;
            }

            > .center-line {
                border-color: #ff5470;
            }
        }

    }
`;

export default AcademicAndCert;
