"use client";
import styled from "styled-components";
import WorkExperiencesFC from "./WorkExperiences";

const WorkExperiences = styled(WorkExperiencesFC)`
    display: flex;
    flex: 0 1 100%;
    background-color: #F1F1F1;
    padding: 50px 30px;
    flex-wrap: wrap;
    gap: 5vw;
    /* flex-direction: column; */
    
    > .heading-text-reveal-container {
        display: flex;
        width: fit-content;
        height: fit-content;
        margin: 0 auto;
        font-size: 3vw;
        font-weight: 900;
        font-family: BalooBhaina2;
        color: #0e1418;
        gap: 0.5ch;
    }

    > .card {
        display: flex;
        flex: 0 1 1150px;
        /* height: fit-content; */
        height: 550px;
        /* height: 90dvh; */
        background-color: white;
        margin: 0 auto;
        box-shadow: 0 4px 4px 0 #a8a7a7;
        border-radius: 10px;

        > .info-area {
            display: flex;
            flex: 1;
            gap: 30px;
            justify-content: center;
            flex-direction: column;

            > .numbering-reveal-container, 
            > .title-reaveal-container,
            > .description-reveal-container {
                display: flex;
                width: 70%;
                margin: 0 auto;
                height: fit-content;
                color: #99D4FF;
                font-size: 5vw;
                font-family: Ronsley;


                .title, .description {
                    color: #0e1418;
                    font-size: 2vw;
                    font-family: Ronsley;
                    padding: 10% 0;
                }

                .description {
                    font-size: 15px;
                    font-family: BalooBhaina2;
                    padding: 0;
                    text-align: justify;
                    line-height: 1.5;
                }
            }
            
        }

        > .left-image-content, > .right-image-content, .bottom-image-content {
            display: flex;
            width: 50%;
            height: 100%;
            background-color: #a8a7a7;
            border-radius: 10px 0 0 10px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        > .bottom-image-content {
            display: none;
        }

        > .right-image-content {
            border-radius: 0 10px 10px 0;
        }

        @media (max-width: 800px) {
            flex-wrap: wrap;
            height: fit-content;

            > .info-area {
                padding-top: 20px;
                padding-bottom: 20px;

                > .numbering-reveal-container {
                    font-size: 40px;
                }

                > .title-reaveal-container .title {
                    font-size: 20px;
                }
            }

            > .left-image-content {
                display: none;
            }

            > .bottom-image-content {
                display: flex;
            }

            > .bottom-image-content, > .right-image-content {
                width: 100%;
                height: 250px;
                /* margin-top: 20px; */
                border-radius: 0 0 10px 10px;
            }
        }
    }

    @media (max-width: 1000px) {
        > .heading-text-reveal-container {
            font-size: 25px;
        }
    }


`;

export default WorkExperiences;