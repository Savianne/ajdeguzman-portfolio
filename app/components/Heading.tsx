'use client'
import React from "react";
import { useRouter } from 'next/navigation'
import styled from "styled-components";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { IStyledFC } from "../types/IStyledFC";
import MenuToggle from "./MenuToggle";
import Button from "./Button";

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();
  
    React.useEffect(() => {
        animate([
            [
            "path.top",
            { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
            { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
            "path.bottom",
            { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
            { at: "<" }
            ]
        ]);
    }, [isOpen]);
  
    return scope;

}

const HeaderFC: React.FC<IStyledFC> = ({className}) => {
    const router = useRouter() 
    const [isOpen, setIsOpen] = React.useState(false);
    const scope = useMenuAnimation(isOpen);

    const [scrollDir, setScrollDir] = React.useState<"down" | "up">('up');
    const [lastScrollY, setLastScrollY] = React.useState(0);
  
    React.useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setScrollDir('down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDir('up');
        }
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

    React.useEffect(() => {
        if(scrollDir == "down" && isOpen) {
            setIsOpen(false)
        }
    }, [scrollDir])
  
    return(
        <motion.header
        initial={{
            top: "0px",
        }}
        animate={{
            top: scrollDir == "up"? "0px" : "-95px",
            transition: {duration: 0.5, type: 'tween'}
        }}
        className={className} ref={scope}>
            <div className="center-content">
                <img className="logo cur" src="/logo.png" alt="Aj" onClick={() => router.push('#home')} />
                {/* <h1 className="logo cur" onClick={() => router.push('#home')}>Aj</h1> */}
                <div className="menu-container">
                    <MenuToggle toggle={() => setIsOpen(!isOpen)} />
                    <AnimatePresence>
                        {
                            isOpen && (
                                <motion.div
                                initial={{
                                    opacity: 0,
                                    top: 'calc(100% + 30px)',
                                }} 
                                animate={{
                                    opacity: 1,
                                    top: '100%',
                                    transition: {duration: 2, type: 'spring'}
                                }}
                                exit={{
                                    opacity: 0,
                                    top: 'calc(100% + 30px)',
                                }}
                                className="menu">
                                    <ul>
                                        <li className="cur" onClick={() => router.push('#home')}>Home</li>
                                        <li className="cur" onClick={() => router.push('#about')}>About Me</li>
                                        <li className="cur" onClick={() => router.push('#services')}>My Services</li>
                                        <li className="cur" onClick={() => router.push('#tools')}>Tools</li>
                                        <li className="cur" onClick={() => router.push('#works')}>Work Experiences</li>
                                        <li className="cur" onClick={() => router.push('#featured')}>Featured Works</li>
                                        <li className="cur" onClick={() => router.push('#contact')}>Contact</li>
                                        <div>
                                            <Button color="#42092c9b"
                                            onClick={() => {
                                                const e = document.createElement("a")
                                                e.setAttribute("target", '_BLANK')
                                                e.setAttribute('href', '/resume/DE-GUZMAN-AJ-RESUME.pdf')
                                                e.click()
                                            }}>My Resume</Button>
                                        </div>
                                    </ul>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>
        </motion.header>
    )
};


const Header = styled(HeaderFC)`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    height: 80px;
    /* background-color: #0327423d; */
    /* backdrop-filter: blur(2px); */
    z-index: 500;
    align-items: center;

    && > .center-content {
        display: flex;
        flex: 1;
        max-width: 1400px;
        align-items: center;
        padding: 0 30px;
        margin: 0 auto;

        /* > .logo {
            font-size: 40px;
            font-family: ZillaSlabHighlightBold;
            color: #ffd0a3;
        } */

        > .logo {
            width: 50px;
        }

        > .menu-container {
            position: relative;
            display: flex;
            align-items: center;
            width: fit-content;
            height: fit-content;
            margin-left: auto;
            /* background-color: orange; */

            > .menu {
                position: absolute;
                display: flex;
                width: 250px;
                /* background-color: #6e0c48; */
                /* background-color: #ff5dc0; */
                background-color: #eea865;
                color: white;
                padding: 30px 10px;
                /* box-shadow: 0 4px 4px 0 #a8a7a7; */
                border-radius: 5px;
                /* height: 400px; */
                /* background-color: #280f21; */
                backdrop-filter: blur(5px);
                top: calc(100% + 30px);
                right: 0;

                > ul {
                    width: 100%;
                    /* padding: 5px; */

                    > li {
                        font-size: 20px;
                        font-family: Cousine;
                        padding: 10px;
                        border-radius: 5px;
                    }

                    > div {
                        display: flex;
                        flex: 0 1 100%;
                        height: fit-content;
                        padding: 10px;
                        margin-top: 20px;
                        border-top: 1px solid #fff;

                        > ${Button} {
                            margin: 20px auto 0 auto;
                            /* padding: 10px 15px; */
                            flex: 0 1 100%;
                            /* background-color: #ff965d; */
                            /* color: #fff; */
                        }
                    }

                    > li:hover {
                        transition: 400ms background-color linear;
                        background-color: #b36215;
                    }
                }
            }
        }
    }
`;

export default Header;