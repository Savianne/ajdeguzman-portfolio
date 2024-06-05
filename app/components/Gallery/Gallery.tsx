import React from "react";
import { FacebookEmbed } from "react-social-media-embed";
import { IStyledFC } from "@/app/types/IStyledFC";
import { landscapeVideoLinks, verticalVideoLinks, ThirdRow } from "@/app/Array/videoLinks";
import WariningMessage from "./WarningMessage";

const GalleryFC: React.FC<IStyledFC> = ({className}) => {
    const [refresh, setRefresh] = React.useState(0);
    React.useEffect(() => {

    }, [refresh]);

    React.useEffect(() => {
        const refreshContent = () => {
            setRefresh(new Date().getTime());
        }  

        window.addEventListener("scroll", refreshContent)

        return () => {
            window.removeEventListener("scroll", refreshContent)
        }
    }, [])
    return(
        <div className={className}>
            <div className="content">
                <WariningMessage />
                <div className="col">
                    {
                        verticalVideoLinks.map(link => (
                            <div className="embed-item">
                                <FacebookEmbed url={link.link} width={"100%"} />
                            </div>
                        ))
                    }
                </div>
                <div className="col">
                    {
                        landscapeVideoLinks.map(link => (
                            <div className="embed-item">
                                <FacebookEmbed url={link.link} width={"100%"} />
                            </div>
                        ))
                    }
                </div>
                <div className="col">
                    {
                        ThirdRow.map(link => (
                            <div className="embed-item">
                                <FacebookEmbed url={link.link} width={"100%"} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default GalleryFC;