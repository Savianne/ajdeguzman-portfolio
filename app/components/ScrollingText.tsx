'use client'
import React from "react"
import styled from "styled-components"
import { motion, useInView, useAnimate, useMotionValue, animate, scroll } from "framer-motion"
import { IStyledFC } from "../types/IStyledFC"

const ScrollingTextFC: React.FC<IStyledFC> = ({className, children}) => {
    // const ref = React.useRef<null | HTMLDivElement>(null);
    const [scope, animate] = useAnimate()
    const scrollingTextRef = React.useRef<null | HTMLDivElement>(null);
    const [done, setDone] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    // const [direction, setDirection] = React.useState(-1);
    
    const isInView = useInView(scope);

    let xPercent = 0;
    let direction = 1;

    const animateText = () => {
        if(xPercent <= -50) xPercent = 0
        if(xPercent > 0) xPercent = -50;
        if(scrollingTextRef.current) scrollingTextRef.current.style.transform = `translateX(${xPercent}%)`;

        // animate('.scrolling-text', {transform: `translateX(${xPercent}%)`}, {duration: 5, ease: "linear"});
        xPercent += 0.1 * direction;
        requestAnimationFrame(animateText);
    }

    React.useEffect(() => {
        // if(direction == 1) animate('.scrolling-text', {transform: "translateX(-50%)"}, {duration: 0}); 
        // animate('.scrolling-text', {transform: `translateX(${50 * direction}%)`}, {duration: 5, ease: "linear", onComplete() {
        //     animate('.scrolling-text', {transform: direction ==1? "translateX(-50%)" : "translateX(0)"}, {duration: 0});
        //     setDone(!done)
        // }})
        // .then(() => {
        //     animate('.scrolling-text', {transform: "translateX(0)"}, {duration: 0});
        //     setDone(!done)
        // })
        // animate(0, 100, {
        //     duration: 5,
        //     onUpdate: (u) => setProgress(u + 0.1 * -1),
        //     onComplete() {
        //         setProgress(0);
        //         setDone(!done);
        //     },
        // })
        requestAnimationFrame(animateText);
    }, [])

    React.useEffect(() => {
        let lastScrollY = 0;
        scroll((progress) => {
            if (progress > lastScrollY) {
                direction = -1;
            } else if (progress < lastScrollY) {
                direction = 1;
            }

            lastScrollY = progress
        });
    }, [])

    return(
        <div className={className} ref={scope}>
            <div className="hidden">{children}</div>
            <div className="scrolling-text" ref={scrollingTextRef}>
                <div className="right-text">{children}</div>
                <div className="left-text">{children}</div>
            </div>
        </div>
    )
};

const ScrollingText = styled(ScrollingTextFC)`
    display: flex;
    position: relative;
    width: fit-content;
    height: fit-content;
    overflow: hidden;

    && > .hidden {
        display: inline;
        width: fit-content;
        opacity: 0;
    }

    && > .scrolling-text {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        width: 200%;
        height: 100%;
    }
`;

export default ScrollingText;