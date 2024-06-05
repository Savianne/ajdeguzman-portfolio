import React from "react";
import { IStyledFC } from "@/app/types/IStyledFC";
import Introduction from "./Introduction";
import TextReveal from "../TextReveal";
import { motion, useInView } from "framer-motion";
import AcademicAndCert from "./AcademicAndCert";

const AboutMeFC: React.FC<IStyledFC> = ({className}) => {
    const ref = React.useRef<null | HTMLDivElement>(null)
    const isInView = useInView(ref);
    return (
        <div className={className} ref={ref}>
            <Introduction />
            {/* <motion.h1 
            className="txt"
            animate={{
                marginTop: isInView? "120px" : '-15px',
                opacity: isInView? 1 : 0,
                transition: { duration: 2, type: "spring" }
            }}
            >There's More</motion.h1>
            <motion.span 
            className="arrow-down"
            initial={{marginTop: '-50px'}}
            animate={{
                marginTop: isInView? "0px" : '-50px',
                opacity: isInView? 1 : 0,
                transition: { duration: 2, type: "spring" }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M168 345.9V44c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v301.9H41.9c-21.4 0-32.1 25.9-17 41l86.1 86.1c9.4 9.4 24.6 9.4 33.9 0l86.1-86.1c15.1-15.1 4.4-41-17-41H168z"/></svg>
            </motion.span> */}
            <AcademicAndCert />
        </div>
    )
}

export default AboutMeFC;