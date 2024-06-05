"use client"
import styled from "styled-components"
import ToolsFC from "./ToolsFC"

const StyleTools = styled(ToolsFC)`
    position: relative;
    display: flex;
    flex: 0 1 100%;
    min-height: 100dvh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* background-color: orange; */

    && > .main-text-container, && > .tools-grid-container {
        display: flex;
        flex: 1;
        padding: 20px 0;
    }

    && > .main-text-container {
        flex-direction: column;
        margin-left: 30px;

        @media (max-width: 960px) {
            flex: 0 1 100%;
            align-items: center;
            margin-left: 0;
        }

    }
    
    && > .main-text-container .main-text {
        font-size: 8vw;
        font-family: Brugetta, Autography, Bungee;
        text-decoration: underline;
        color: var(--main-text-color);

        @media (max-width: 960px) {
            font-size: 15vw;
        }
    }

    && > .tools-grid-container > .tools-grid {
        display: grid;
        width: 100%;
        padding: 20px;
        justify-content: center;
        /* border: 1px solid ${({theme}) => theme.borderColor}; */
        /* min-width: 300px; */
        grid-template-columns: repeat(auto-fill, 200px);
        grid-gap: 20px;

        > .tool {
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: pink;
            aspect-ratio: 1 / 1;
            border-radius: 5px;
            background: linear-gradient(225deg, #e6e6e6, #ffffff);
            box-shadow:  -20px 20px 60px #d9d9d9,
             20px -20px 60px #ffffff;

            > .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 90px;
                height: 90px;
            }

            > .name {
                font-size: 18px;
                font-family: Helios;
                margin-top: 20px;
            }
        }

        /* > .tool:hover {
            transition: transform 300ms ease-in-out;
            transform: scale(1.1);
        } */

        @media (max-width: 960px) {
            grid-template-columns: repeat(auto-fill, 150px);

            > .tool > .name {
                font-size: 15px;
            }
        }
    }
`;

export default StyleTools;