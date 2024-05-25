import styled, { css } from "styled-components";
import React from "react";
import { IStyledFC } from "../types/IStyledFC";

interface IFCAvatar extends IStyledFC {
    src?: string | null,
    alt: string,
    size: string,
} 

const FCAvatar: React.FC<IFCAvatar> = ({className}) => {    
    return (
        <i className={className}></i>
    )
}


const Avatar = styled(FCAvatar)<{round?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: ${({size}) => size};
    width:  ${({size}) => size};
    flex: 0 0 ${({size}) => size};
    border: 2px solid ${({theme}) => theme.borderColor};
    border-radius: ${(props) => props.round? "50%" : "5px"};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 1.2em;
    background-image: url(${({src}) => src})
`;

Avatar.defaultProps = {
    round: true
}

export default Avatar;