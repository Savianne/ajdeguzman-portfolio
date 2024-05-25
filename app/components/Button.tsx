'use client'
import React from "react";
import styled, { css } from "styled-components";
import { IStyledFC } from "../types/IStyledFC";
import Spinner from "./Spinner";

interface IButton extends IStyledFC {
    color?: string;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const ButtonFC: React.FC<IButton> = ({className, children, onClick, type, isLoading}) => {

    return(
        <button className={className} onClick={onClick} type={type}>
            {
                isLoading && <div className="loading">
                    <Spinner size={25}/>
                </div>
            }
            <span className="text">{children}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="71.928 -700.184 625.32 280.367" fill="#5f6368">
                <path d="M 558.505 -423.298 L 546.505 -436.798 L 658.505 -548.798 L 86.505 -548.798 L 86.505 -566.298 L 658.505 -566.298 L 545.005 -678.298 L 557.005 -691.798 L 692.505 -557.798 L 558.505 -423.298 Z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 2.2737367544323206e-13)"/>
            </svg>
        </button>
    )
}

const Button = styled(ButtonFC)`
    &&,
    &&:hover,
    &&:active {
        position: relative;
        display: flex;
        width: fit-content;
        outline: 0;
        border: 0;
        background-color: transparent;
        padding: 18px 45px;
        border: 1px solid ${(p) => p.color};
        color: ${(p) => p.color};
        align-items: center;
        transition: all 400ms ease-in-out;
    }

    && > .text {
        /* font-size: 18px; */
    }

    && > svg {
        /* width: 200px; */
        height: 20px;
        margin-left: 20px;
        fill: ${(p) => p.color};
    }


    &&:hover {
        background-color: ${(p) => p.color};
        color: #fff;
        border-color: #fff;

        > svg {
            fill: #fff;
            transition: all 400ms ease-in-out;
        }
    }

    &&:active {
        opacity: 0.5;
    }

    && > .loading {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: ${(p) => p.color};
        opacity: 0.8;
        z-index: 10;
    }
    
    ${(p) => p.isLoading? css`
        pointer-events: none;
    ` : ''}
`;



export default Button;