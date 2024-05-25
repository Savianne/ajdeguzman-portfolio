"use client"
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IStyledFC } from "../types/IStyledFC";

interface INumbering extends IStyledFC {
    text: number | string;
    delay: number;
    once?: boolean;
}

const TeaxtReveal2FC: React.FC<INumbering> = ({className, text, delay, once}) => {
    const ref = React.useRef<null | HTMLHeadingElement>(null);
    // const isInView = useInView(ref);
    return(
        <div className={className} ref={ref}>
            <h1 className="hidden">{text}</h1>
            <motion.h1 
            className="text"
            initial={{
                bottom: "-30%",
                opacity: 0,
            }}
            whileInView={{
                bottom: "0%",
                opacity: 1,
                transition: { duration: 2, type: "spring", delay }
            }}
            viewport={{ once }}
            >{text}</motion.h1>
        </div>
    )
};

const TextReveal2 = styled(TeaxtReveal2FC)`
    position: relative;
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 10px 0;
    /* overflow: hidden; */

    && > .text, && > .hidden {
        display: flex;
        width: fit-content;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        /* padding: 0 20%; */
        /* overflow: visible; */
        font-weight: inherit;
        /* opacity: 0.5; */
    }

    && > .hidden {
        opacity: 0;
    }

    && > .text {
        position: absolute;
        left: 0;
    }
`;

export default TextReveal2;
