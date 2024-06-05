import React from "react";
import { IStyledFC } from "@/app/types/IStyledFC";
import ContactForm from "./ContactForm";
import TextReveal from "../TextReveal";

const ContactFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <div className="left-container">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C118.9 8 8 118.9 8 256c0 137.1 110.9 248 248 248 48.2 0 95.3-14.1 135.4-40.2 12-7.8 14.6-24.3 5.6-35.4l-10.2-12.4c-7.7-9.4-21.2-11.7-31.4-5.1C325.9 429.8 291.3 440 256 440c-101.5 0-184-82.5-184-184S154.5 72 256 72c100.1 0 184 57.6 184 160 0 38.8-21.1 79.7-58.2 83.7-17.3-.5-16.9-12.9-13.5-30l23.4-121.1C394.7 149.8 383.3 136 368.2 136h-45a13.5 13.5 0 0 0 -13.4 12l0 .1c-14.7-17.9-40.4-21.8-60-21.8-74.6 0-137.8 62.2-137.8 151.5 0 65.3 36.8 105.9 96 105.9 27 0 57.4-15.6 75-38.3 9.5 34.1 40.6 34.1 70.7 34.1C462.6 379.4 504 307.8 504 232 504 95.7 394 8 256 8zm-21.7 304.4c-22.2 0-36.1-15.6-36.1-40.8 0-45 30.8-72.7 58.6-72.7 22.3 0 35.6 15.2 35.6 40.8 0 45.1-33.9 72.7-58.2 72.7z"/></svg>
                    <TextReveal direction="right"><strong>ajdeeguzman@gmail.com</strong></TextReveal>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/></svg> 
                    <TextReveal direction="right"><strong>09128486021</strong></TextReveal>
                </div>
            </div>
            <div className="right-container">
                <img src="assets/images/paint.png" alt="paint" />
                <ContactForm />
            </div>
        </div>
    )
};

export default ContactFC;