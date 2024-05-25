import React from "react";
import { FacebookEmbed } from "react-social-media-embed";
import { IStyledFC } from "@/app/types/IStyledFC";
import { landscapeVideoLinks, verticalVideoLinks } from "@/app/Array/videoLinks";

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
                <div className="col">
                    <div className="embed-item">
                        <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={"100%"} />
                    </div>
                    <div className="embed-item">
                        <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={"100%"} />
                    </div>
                    <div className="embed-item">
                        <FacebookEmbed url="https://www.facebook.com/patrick.starfish.50767/posts/3290139337797130" width={"100%"} />
                    </div>
                </div>
                <div className="col">
                    <div className="embed-item">
                        <FacebookEmbed url="https://www.facebook.com/patrick.starfish.50767/posts/3290139337797130" width={"100%"} />
                    </div>
                    <div className="embed-item">
                        <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={"100%"} />
                    </div>
                </div>
            </div>
            {/* <div className="horizontal-group">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpatrick.starfish.50767%2Fposts%2Fpfbid07i3Mvt8JdhhziS23eKMbTjbvUpfZ9h8HWnuUQs9HR8KyvXA29nMgibtsXme5qEuel&show_text=true&width=500&is_preview=true" width="500" height="410" style={{border:"none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpatrick.starfish.50767%2Fposts%2Fpfbid07i3Mvt8JdhhziS23eKMbTjbvUpfZ9h8HWnuUQs9HR8KyvXA29nMgibtsXme5qEuel&show_text=true&width=500&is_preview=true" width="500" height="410" style={{border:"none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpatrick.starfish.50767%2Fposts%2Fpfbid07i3Mvt8JdhhziS23eKMbTjbvUpfZ9h8HWnuUQs9HR8KyvXA29nMgibtsXme5qEuel&show_text=true&width=500&is_preview=true" width="500" height="410" style={{border:"none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe><br />
            </div>
            <div className="vertical-group">
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpatrick.starfish.50767%2Fposts%2Fpfbid02AGg9tj4WZ4dPgZDD1TXCZH3poKTDuiiUVD2dWKuDn57jV3kFyUuDacadrTp5gZMxl&show_text=true&width=500&is_preview=true" width="500" height="1016" style={{border:"none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpatrick.starfish.50767%2Fposts%2Fpfbid02AGg9tj4WZ4dPgZDD1TXCZH3poKTDuiiUVD2dWKuDn57jV3kFyUuDacadrTp5gZMxl&show_text=true&width=500&is_preview=true" width="500" height="1016" style={{border:"none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpatrick.starfish.50767%2Fposts%2Fpfbid02AGg9tj4WZ4dPgZDD1TXCZH3poKTDuiiUVD2dWKuDn57jV3kFyUuDacadrTp5gZMxl&show_text=true&width=500&is_preview=true" width="500" height="1016" style={{border:"none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div> */}
        </div>
    )
};

export default GalleryFC;