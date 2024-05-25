"use client"
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion";
import { IStyledFC } from "../types/IStyledFC";

const SocialsFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <motion.span 
            onClick={() => {
                const e = document.createElement("a")
                e.setAttribute("target", '_BLANK')
                e.setAttribute('href', 'https://www.facebook.com/patrick.starfish.50767/')
                e.click()
            }}
            className="social"
            initial={{opacity: 0, marginTop: '-20px'}}
            animate={{opacity: 1, marginTop: "0%"}}
            transition={{duration: 2, type: 'spring'}}>
                <svg className="cur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"/></svg>
            </motion.span>
            <motion.span 
            onClick={() => {
                const e = document.createElement("a")
                e.setAttribute("target", '_BLANK')
                e.setAttribute('href', 'https://www.instagram.com/aj.mansanas/')
                e.click()
            }}
            className="social"
            initial={{opacity: 0, marginTop: '-20px'}}
            animate={{opacity: 1, marginTop: "0%"}}
            transition={{duration: 2, delay: 0.2, type: 'spring'}}>
                <svg className="cur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 202.7A53.3 53.3 0 1 0 277.4 256 53.4 53.4 0 0 0 224 202.7zm124.7-41a54 54 0 0 0 -30.4-30.4c-21-8.3-71-6.4-94.3-6.4s-73.3-1.9-94.3 6.4a54 54 0 0 0 -30.4 30.4c-8.3 21-6.4 71.1-6.4 94.3S91 329.3 99.3 350.3a54 54 0 0 0 30.4 30.4c21 8.3 71 6.4 94.3 6.4s73.2 1.9 94.3-6.4a54 54 0 0 0 30.4-30.4c8.4-21 6.4-71.1 6.4-94.3S357.1 182.7 348.8 161.7zM224 338a82 82 0 1 1 82-82A81.9 81.9 0 0 1 224 338zm85.4-148.3a19.1 19.1 0 1 1 19.1-19.1A19.1 19.1 0 0 1 309.4 189.7zM400 32H48A48 48 0 0 0 0 80V432a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V80A48 48 0 0 0 400 32zM382.9 322c-1.3 25.6-7.1 48.3-25.9 67s-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.9-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.9-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.2 67 25.9s24.6 41.4 25.9 67.1C384.4 216.4 384.4 295.6 382.9 322z"/></svg>
            </motion.span>
            <motion.span 
            onClick={() => {
                const e = document.createElement("a")
                e.setAttribute("target", '_BLANK')
                e.setAttribute('href', 'https://www.linkedin.com/in/apple-jane-de-guzman-10970a28a')
                e.click()
            }}
            className="social"
            initial={{opacity: 0, marginTop: '-20px'}}
            animate={{opacity: 1, marginTop: "0%"}}
            transition={{duration: 2, delay: 0.4, type: 'spring'}}>
                <svg className="cur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </motion.span>
        </div>
    )
}

const Socials = styled(SocialsFC)`
    display: flex;
    gap: 6px;
    width: fit-content;
    height: fit-content;

    > .social {
        width: fit-content;
        height: 30px;
        overflow: visible;
        
        > svg {
            width: 33px;
            height: 30px;
            fill: #87c4e4;
        }

        > svg:hover {
            fill: #51b0e3;
            transition: 300ms fill linear;
        }
    }
`

export default Socials;