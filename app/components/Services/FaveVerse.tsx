'use client'
import styled from "styled-components";
import React from "react";
import { IStyledFC } from "@/app/types/IStyledFC";
import TextReveal from "../TextReveal";

const FaveVerseFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <div className="center-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/></svg>
                <div className="verse-container">
                    <TextReveal direction="right">
                        <p className="verse-text">Commit to the Lord whatever you do, and he will establish your plans.</p>
                    </TextReveal>
                    <TextReveal direction="right">
                        <h5 className="verse">-Proverbs 16:3 (NIV)</h5>
                    </TextReveal>
                </div>
            </div>
        </div>
    )
};

const FaveVerse = styled(FaveVerseFC)`
    display: flex;
    flex: 0 1 100%;
    background-color: #252332;
    color: white;
    align-items: center;
    justify-content: center;

    > .center-content {
        display: flex;
        width: fit-content;
        flex: 0 1 1100px;
        margin: auto;
        padding: 50px 30px;
        align-items: center;
        justify-content: center;

        > svg {
            margin-right: 20px;
            width: 200px;
            height: 200px;
            fill: rgba(255, 255, 255, 0.1);
        }

        > .verse-container {
            display: flex;
            flex-direction: column;
            height: fit-content;

            .verse-text {
                font-size: 2vw;
                font-family: Autography;
                padding: 10px;
            }  

            .verse {
                font-size: 1.5vw;
                font-family: Pecita;
                /* margin-top: 20px; */
                color: #ffffff8f;
                padding: 10px;

            }

            @media (max-width: 1000px) {
                .verse-text, .verse {
                    font-size: 12px;
                }
            }
        }
    }
`;

export default FaveVerse;