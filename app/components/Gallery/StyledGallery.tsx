"use client";
import styled from "styled-components";
import GalleryFC from "./Gallery";

const Gallery = styled(GalleryFC)`
    display: flex;
    flex: 0 1 100%;
    height: fit-content;
    padding: 0 0 100px 0;
    gap: 20px;
    align-items: center;
    justify-content: center;
    /* background-color: #091015; */
    /* flex-wrap: wrap; */
    /* flex-direction: column; */

    > .content {
        display: flex;
        width: 70%;
        gap: 20px;
        height: fit-content;
        justify-content: center;
        /* background-color: orange; */
        flex-wrap: wrap;
        
        > .col {
            height: fit-content;
            display: flex;
            /* flex: 0 40%; */
            gap: 20px;
            flex-direction: column;
            align-content: flex-start;
    
            > .embed-item {
                width: 30%;
                min-width: 300px;
                height: fit-content;
            }
        }

        @media (max-width: 1000px) {
            width: 90%;
            padding: 0 5%;
        }
    }



    
    
`

export default Gallery;