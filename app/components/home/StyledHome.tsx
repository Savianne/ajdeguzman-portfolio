"use client"
import styled from "styled-components";
import HomeFC from "./HomeFC";
import Avatar from "../Avatar";

const Home = styled(HomeFC)`
    display: flex;
    flex: 0 1 100%;
    min-height: 100dvh;
    background-color: #fff;
    /* background-color: rgb(57, 43, 55); */
    
    && > .lg-screen {
        display: flex;
        flex: 0 1 100%;
        height: 100dvh;
        min-height: 400px;

        > .left-col, > .right-col {
            display: flex;
            flex: 1;
            height: 100%;
            background-color: #efeeee47;
            /* background-color: rgba(220, 189, 189, 0.44); */
        }

        > .left-col {
            position: relative;

            > .office-backdrop {
                position: absolute;
                top: 0;
                right: 75px;
                width: calc(100% - 75px);
                height: 100%;
                background-image: url(assets/images/office.jpg);
                background-repeat: no-repeat;
                background-size: cover;
        
                > .blured-cover {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(220, 189, 189, 0.09);
                    backdrop-filter: blur(2px);
                }
            }

            > .dp {
                position: absolute;
                bottom: 0;
                right: 20px;
                height: 80%;
            }
        }

        > .right-col {
            justify-content: center;
            align-items: center;

            > div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                flex: 0 1 100%;
                z-index: 10;

                h1 {
                    font-size: 10.5vw;
                    white-space: nowrap;
                    /* line-height: 1.2; */
                    border-bottom: 1px solid #fff;
                    /* color: #F7CFE7; */
                    color: #a88869;
                    padding: 0 10px;
                    /* font-weight: 900; */
                    font-family: Brugetta;
                    /* text-shadow: -4px 2px 2px rgba(214, 11, 68, 0.199); */
                }

                > .socials-container {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                }

                > .resume-btn {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                }
            }
        }

    }

    && > .sm-screen {
        display: flex;
        flex: 0 1 100%;
        /* flex-wrap: wrap; */
        flex-direction: column;
        min-height: 100dvh;

        > .top-container, > .bottom-container {
            display: flex;
            flex: 1;
            height: 40dvh;
            background-color: #d7d7d7;
            /* background-color: rgba(220, 189, 189, 0.44); */
        }

        > .top-container {
            position: relative;
            min-height: 300px;

            > .office-backdrop {
                position: absolute;
                top: 0;
                right: 75px;
                width: calc(100% - 75px);
                height: 100%;
                background-image: url(assets/images/office.jpg);
                background-repeat: no-repeat;
                background-size: cover;
        
                > .blured-cover {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(220, 189, 189, 0.09);
                    backdrop-filter: blur(2px);
                }
            }

            > .dp {
                position: absolute;
                bottom: 0;
                right: 20px;
                height: 80%;
            }
        }

        > .bottom-container {
            display: flex;
            height: fit-content;
            /* flex: 0 1 100%; */
            /* background-color: rgba(155, 20, 20, 0.44); */
            flex-direction: column;
            align-items: flex-end;
    
            > div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                flex: 0 1 100%;
                z-index: 10;

                h1 {
                    font-size: 25.5vw;
                    white-space: nowrap;
                    /* line-height: 1.2; */
                    border-bottom: 1px solid #fff;
                    /* color: #F7CFE7; */
                    color: #a88869;
                    padding: 0 10px;
                    /* font-weight: 900; */
                    font-family: Brugetta;
                    /* text-shadow: -4px 2px 2px rgba(214, 11, 68, 0.199); */
                }

                > .socials-container {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                }

                > .resume-btn {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                }
            }
        }
    }



    /* @media (max-width: 500px){
        && {
            flex-wrap: wrap;
            min-height: fit-content;

            > .right-col {
                display: none;
            }

            > .left-col {
                flex: 0 1 100%;
                min-height: 50dvh;

                > .dp {
                    right: 0;
                }

                
            }

            > .bottom-container {
                display: flex;
                flex: 0 1 100%;
                background-color: rgba(220, 189, 189, 0.44);
                flex-direction: column;
                align-items: flex-end;

                h1 {
                    font-size: 20vw;
                    white-space: nowrap;
                    line-height: 1.2;
                    border-bottom: 1px solid #fff;
                    color: #F7CFE7;
                    padding: 0 10px;
                    font-weight: 900;
                    text-shadow: -4px 2px 2px rgba(214, 11, 68, 0.199);
                }
            }
        }
    } */
`;

export default Home;