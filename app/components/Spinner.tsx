"use client"
import { color } from "framer-motion";
import styled, { css } from "styled-components"

const Spinner = styled.span<{color?: string, size?: number}>`
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid ${p => p.color? p.color : "#FFF"};
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    ${p => p.size? css`
        width: ${p.size}px;
        height: ${p.size}px;
    ` : css`
        width: 48px;
        height: 48px;
    `}

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`;

export default Spinner;