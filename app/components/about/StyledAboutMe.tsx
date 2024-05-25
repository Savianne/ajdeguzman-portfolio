"use client"
import styled from "styled-components";
import AboutMeFC from "./AboutMeFC";

const AboutMe = styled(AboutMeFC)`
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 100%;

    > .txt {
        opacity: 0;
        display: flex;
        flex: 0 1 100%;
        font-size: 50px;
        font-family: Autography;
        justify-content: center;
    }

    > .arrow-down {
        width: fit-content;
        height: fit-content;
        margin: 0 auto;

        > svg {
            width: 10px;
            fill: var(--secondary-text);
        }
    }
`;

export default AboutMe;