"use client"
import React from "react"
import styled from "styled-components"
import { IStyledFC } from "@/app/types/IStyledFC"

const WarningMessageFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.5 440C588 472 564.8 512 527.9 512H48.1c-36.9 0-60-40.1-41.6-72L246.4 24c18.5-32 64.7-32 83.2 0l239.9 416zM288 354c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46zm-43.7-165.3l7.4 136c.3 6.4 5.6 11.3 12 11.3h48.5c6.4 0 11.6-5 12-11.3l7.4-136c.4-6.9-5.1-12.7-12-12.7h-63.4c-6.9 0-12.4 5.8-12 12.7z"/></svg>
            </div>
            <div>
                <strong>Warning</strong>
                <p>Due to Facebook policy, some videos may be unavailable directly on this page. You can still view these videos by clicking on them or the &quot;View on Facebook.&quot;. Additionally, you can visit the <a target="_BLANK" href="https://www.facebook.com/profile.php?id=100067208912235">Roxas Coc Pastoral Message Page</a> and <a target="_BLANK" href="https://www.facebook.com/roxas.coc">Roxas Coc</a> for more content
                </p>
            </div>
        </div>
    )
}

const WariningMessage = styled(WarningMessageFC)`
    display: flex;
    flex: 0 1 100%;
    /* height: 100px; */
    padding: 0 20px;
    border-top: 3px solid #feef00;
    background-color: #fdf7ce;

    && > .icon {
        flex: 0;
        padding: 10px;
        width: fit-content;
        height: fit-content;
        /* background-color: blue; */

        > svg {
            width: 20px;
            height: 20px;
            fill: #cb9f00;
        }
    }

    && > div {
        display: flex;
        flex-direction: column;
        flex: 0 1 100%;
        font-family: BalooBhaina2;

        > strong {
            display: flex;
            align-items: center;
            height: 20px;
            font-size: 20px;
            /* padding: 10px 0; */
            margin-top: 15px;
            font-weight: bold;
            color: #cb9f00;
        }

        > p {
            color: #544305;
            padding: 10px 0;
            line-height: 1.3;
        }
    }
    
`;

export default WariningMessage;