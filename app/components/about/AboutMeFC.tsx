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
            <AcademicAndCert />
        </div>
    )
}

export default AboutMeFC;