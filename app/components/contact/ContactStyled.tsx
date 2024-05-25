"use client"
import styled from "styled-components"
import ContactFC from "./ContactFC"

const Contact = styled(ContactFC)`
    position: relative;
    display: flex;
    max-width: 1110px;
    /* height: 400px; */
    padding: 0 30px;
    padding-bottom: 30px;
    margin: 0 auto;
    flex-wrap: wrap;
    /* background-color: pink; */

    > .left-container, > .right-container {
        display: flex;
        flex: 1;
        min-width: 300px;
        align-content: flex-start;
        /* height: 100px; */
        flex-wrap: wrap;
    }

    > .right-container {
        position: relative;
        justify-content: center;

        > img {
            position: absolute;
            max-width: 100%;
            /* top: -50%; */
            top: -30%;
            min-width: 350px;
            /* top: 100px; */
            opacity: 0.5;
        }
    }

    > .left-container {
        position: sticky;
        top: 70px;
        height: fit-content;
    }

    > .left-container > div {
        display: flex;
        flex: 0 1 100%;
        align-items: center;
        padding: 10px 0;

        > svg {
            width: 25px;
            height: 25px;
            margin-right: 7px;
            /* fill: #61c3fb; */
        }

        strong {
            font-size: 17px;
            font-family: BalooBhaina2;
            /* color: #61c3fb; */
        }

        strong:hover {
            text-decoration: underline;
        }
        
    }

    @media (max-width: 800px) {
        > .left-container {
            position: static;
            margin-bottom: 100px;
        }

    }

`

export default Contact;