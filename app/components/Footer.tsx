'use client'
import React from "react"
import styled from "styled-components"
import { IStyledFC } from "../types/IStyledFC"
import Socials from "./Socials"

const FooterFC:React.FC<IStyledFC> = ({className}) => {
    return(
        <div className={className}>
            <div className="center-content">
                <div className="top-area">
                    <p className="signature">Aj DeeGuzman</p>
                    <Socials />
                </div>
                <div className="bottom-area">
                    <strong>Designed and developed by:</strong>
                    <p className="signature">Mark Baylon</p>
                </div>
            </div>
        </div>
    )
}

const Footer = styled(FooterFC)`
    display: flex;
    flex: 0 1 100%;
    /* height: 100px; */
    background-color: rgba(57, 43, 55, 1);

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
            font-family: Autograf;
            align-items: center;
            color: #fff;
            gap: 15px;

            > .signature {
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
            justify-content: flex-end;
            
            > strong {
                font-family: BalooBhaina2;
            }
            
        }

    }
`;

export default Footer;