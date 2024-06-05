"use client";
import styled, { css } from "styled-components";
import React from "react";
import TextReveal from "./TextReveal";
import { IStyledFC } from "../types/IStyledFC";
import { motion, useInView } from "framer-motion";

const variants = {
    toView: {
        width: "calc(100% - 60px)",
        opacity: 1,
        transition: { delay: 0.5, duration: 3, type: "spring" }
    }, 
    toHide: {
        width: "0%",
        opacity: 0,
        transition: { duration: 3, type: "spring" }
    }
}

interface ICategoryTitle extends IStyledFC {
    id: string;
}

const CategoryTitleFC: React.FC<ICategoryTitle> = ({className, id, children}) => {
    const ref = React.useRef<null | HTMLDivElement>(null)
    const isInView = useInView(ref);
    return (
        <div className={className} id={id}>
            <motion.div 
            className="line" 
            ref={ref}
            animate={isInView? "toView" : "toHide"}
            variants={variants}></motion.div>
            <div className="text-container">
                <TextReveal direction="right">
                    <Title>{children}</Title>
                </TextReveal>
            </div>
        </div>
    )
}

const Title = styled.h1`
    font-size: 7vw;
    font-family: Brugetta, Autography, Bungee;
    color: var(--main-text-color);
    white-space: nowrap;

    @media (max-width: 800px) {
        font-size: 50px;
    }
`
const CategoryTitle = styled(CategoryTitleFC)<{customStyle?: string}>`
    position: relative;
    display: flex;
    max-width: 1100px;
    padding: 0 30px;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
    margin: 100px auto;

    > .line {
        display: flex;
        position: absolute;
        height: 0;
        width: 0%;
        border-top: 1px solid #a88869;
    }

    > .text-container {
        display: flex;
        height: fit-content;
        width: fit-content;
        padding: 0 20px;
        background-color: #fff;
        z-index: 2;

        ${({customStyle}) => customStyle? css`${customStyle}` : ''};

        @media (max-width: 800px) {
            margin: 0 auto;
        }
    }

`;

export default CategoryTitle;