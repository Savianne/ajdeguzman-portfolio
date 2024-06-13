'use client'
import React from "react"
import styled from "styled-components"
import { IStyledFC } from "../types/IStyledFC"
import Socials from "./Socials"
import { useRouter } from 'next/navigation'

const FooterFC:React.FC<IStyledFC> = ({className}) => {
    const router = useRouter() 
    return(
        <div className={className}>
            <div className="center-content">
                <div className="top-area">
                    <p className="signature">Aj DeeGuzman</p>
                    {/* <Socials /> */}
                </div>
                <div className="bottom-area">
                    {/* <strong>Designed and developed by:</strong>
                    <p className="signature">Mark Baylon</p> */}
                    <ul className="links">
                        <li onClick={() => router.push('#home')}>Home</li>
                        <li onClick={() => router.push('#about')}>About Me</li>
                        <li onClick={() => router.push('#services')}>My Services</li>
                        <li onClick={() => router.push('#tools')}>Tools</li>
                        <li onClick={() => router.push('#works')}>Work Experiences</li>
                        <li onClick={() => router.push('#featured')}>Featured Works</li>
                        <li onClick={() => router.push('#contact')}>Contact</li>
                    </ul>
                    <Socials />
                </div>
            </div>
        </div>
    )
}

const Footer = styled(FooterFC)`
    display: flex;
    flex: 0 1 100%;
    /* height: 100px; */
    background-color: #2c231b;

    > .center-content {
        position: relative;
        display: flex;
        flex: 0 1 1100px;
        padding: 0 30px;
        margin: 0 auto;
        flex-wrap: wrap;

        > .bottom-area, > .top-area {
            display: flex;
            width: 100%;
            padding: 30px 0;
            align-items: center;
            color: #fff;
            gap: 15px;
            
            > .signature {
                font-family: Autograf;
                font-size: 2em;

                @media (max-width: 800px) {
                    font-size: 19px;
                }
            }
        }
        
        > .top-area {
            border-bottom: 1px solid #fff;
        }

        > .bottom-area {
            align-items: baseline;
            padding: 0;
            padding-bottom: 20px;

            > .links > li {
                margin-bottom: 2px;
                color: #9b9b9b;
                font-family: BalooBhaina2;
            }

            > .links > li:hover {
                text-decoration: underline;
                color: #fff;
            }

            > ${Socials} {
                margin-left: auto;
                padding-top: 10px;
            }
            
        }

    }
`;

export default Footer;