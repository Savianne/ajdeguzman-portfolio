"use client"
import React from "react"
import styled, { css } from "styled-components"
import { motion, useInView } from "framer-motion";
import { IStyledFC } from "../types/IStyledFC";


interface ITextReveal extends IStyledFC {
    direction: "left" | "right";
    alwaysShow?: boolean;
    flexItem?: boolean;
}

const variants = {
    toView: (custom: { direction: "left" | "right", entity: "highlight" | "text" }) => custom.direction == "right"? 
        { 
            left: custom.entity == "text"? "0%" : "100%",
            transition: { delay: custom.entity == "text"? 0.2 : 0, duration: custom.entity == "text"? 3 : 1, type: custom.entity == "text"? "spring" : 'normal' }
        } : 
        { 
            right : custom.entity == "text"? "0%" : "100%",
            transition: { delay: custom.entity == "text"? 0.2 : 0, duration: custom.entity == "text"? 3 : 1, type: custom.entity == "text"? "spring" : 'normal'  }
        },
    toHide: (custom: { direction: "left" | "right", entity: "highlight" | "text" }) => custom.direction == "right"? 
        { 
            left: '-100%',
            transition: { duration: custom.entity == "text"? 1 : 1, ease: "easeInOut" }
        } : 
        { 
            right : "-100%",
            transition: { duration: custom.entity == "text"? 1 : 1, ease: "easeInOut" }
        },
}

const TextRevealFC: React.FC<ITextReveal> = ({className, alwaysShow = true, direction, children}) => {
    const ref = React.useRef<null | HTMLDivElement>(null)
    const isInView = useInView(ref);

    return(
        <div className={className} ref={ref}>
            <span className="hiddenText">{children}</span>
            <div className="content">
                {
                    alwaysShow? <>
                        <motion.span initial="toHide" whileInView={'toView'} viewport={{ once: true }} variants={variants} custom={{direction, entity: "highlight"}} className="highlight"></motion.span>
                        <motion.span initial="toHide" whileInView={'toView'} viewport={{ once: true }} variants={variants} custom={{direction, entity: "text"}} className="text">{children}</motion.span>
                    </> : <>
                        <motion.span initial="toHide" whileInView={'toView'} variants={variants} custom={{direction, entity: "highlight"}} className="highlight"></motion.span>
                        <motion.span initial="toHide" whileInView={'toView'} variants={variants} custom={{direction, entity: "text"}} className="text">{children}</motion.span>
                    </>
                }
                {/* {
                    alwaysShow? <>
                        <motion.span
                        initial={
                            direction == "left"? 
                            ({
                                right: "-100%"
                            }) : ({
                                left: "-100%"
                            })
                        } 
                        animate={
                            direction == "left"? 
                            ({
                                right: "100%",
                                transition: { delay: 0, duration: 1, type: 'normal'  }
                            }) : 
                            ({
                                left: "100%",
                                transition: { delay: 0.2, duration: 3, type: "spring" }
                            })
                        } 
                        className="highlight"></motion.span>
                        <motion.span 
                        animate={isInView && "toView"} variants={variants} custom={{direction, entity: "text"}} className="text">{children}</motion.span>
                    </> :
                    <>
                        <motion.span animate={isInView? "toView" : "toHide"} variants={variants} custom={{direction, entity: "highlight"}} className="highlight"></motion.span>
                        <motion.span animate={isInView? "toView" : "toHide"} variants={variants} custom={{direction, entity: "text"}} className="text">{children}</motion.span>
                    </>
                } */}
            </div>
        </div>
    )
};

const TextReveal = styled(TextRevealFC)`
    position: relative;
    display: inline;
    width: fit-content;
    height: fit-content;
    overflow: hidden;

    && > .hiddenText {
        ${({flexItem}) => flexItem? css`
            display: flex;
            flex: 1;
        ` :
        css`
            display: inline;
            width: fit-content;
        `
        }

        height: fit-content;
        opacity: 0;
    }

    
    && > .content {
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        width: 100%;
        height: 100%;

        > .text {
            display: flex;
            width: 100%;
            height: 100%;
        }

        > .text, > .highlight {
            position: absolute;

           ${({direction}) => {
                return direction == "left"? 
                css`
                    right: -100%;
                ` : 
                css`
                    left: -100%;
                `
           }}
        }

        > .highlight {
            display: flex;
            width: 100%;
            height: 100%;
            background-color: #a88869;
        }
    }
`;

export default TextReveal;