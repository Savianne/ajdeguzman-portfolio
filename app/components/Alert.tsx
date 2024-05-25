import React from "react";
import styled from "styled-components";
import { IStyledFC } from "../types/IStyledFC";

interface IAlert extends IStyledFC {
    severity:  "error" | "success";
    onClose?: () => void;
}

const AlertFC: React.FC<IAlert> = ({className, severity = "info", onClose, children}) => {

    return (
        <div className={className}>
            <span className="icon-area">
                {
                    severity == "error"? 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 137-111 248-248 248S8 393 8 256C8 119.1 119 8 256 8s248 111.1 248 248zm-248 50c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46zm-43.7-165.3l7.4 136c.3 6.4 5.6 11.3 12 11.3h48.5c6.4 0 11.6-5 12-11.3l7.4-136c.4-6.9-5.1-12.7-12-12.7h-63.4c-6.9 0-12.4 5.8-12 12.7z"/></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM227.3 387.3l184-184c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0L216 308.1l-70.1-70.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l104 104c6.2 6.2 16.4 6.2 22.6 0z"/></svg>
                }
            </span>
            <div className="text-area">
                { children }
            </div>
            {
                onClose && <span className="btn-close" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"/></svg>
                </span>
            }
            
            
        </div>
    )
};

const Alert = styled(AlertFC)`
    display: flex;
    flex: 0 1 100%;
    padding: 6px 16px;
    border-radius: 4px;
    color: #fff;
    background-color: ${p => p.severity == "error"? "#d32f2f" : "#2e7d32"};

    & .btn-close {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        padding: 4px 0 0 16px;
        margin-left: auto;
        margin-right: -8px;

        > svg {
            width: 15px;
            height: 15px;
            fill: #fff;
        }
    };

    & .close-btn:hover {
        background-color: transparent;
    }

    & .icon-area {
        margin-right: 12px;
        padding: 7px 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-size: 22px;
        opacity: 0.9;

        > svg {
            width: 20px;
            height: 20px;
            fill: #fff;
        }
    }

    & .text-area {
        font-size: 14px;
        padding: 8px 0;
        min-width: 0;
        overflow: auto;
        font-family: BalooBhaina2;
    }

`;

export const AlertTitle = styled.div`
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    margin-bottom: 0.35em;
    font-weight: 500;
    margin-top: -2px;
`

export default Alert