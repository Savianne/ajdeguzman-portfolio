"use client"
import { IStyledFC } from "@/app/types/IStyledFC"
import React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import styled from "styled-components"
import Button from "../Button"
import Autograf from "../Autograf"
import TextReveal2 from "../TextReveal2"    
import InterestContext from "@/app/context/InterestContextProvider"
import windowSizeContext from "@/app/context/WindowSizeContextProvider"
import { IService, servicesArray } from "@/app/Array/ServicesArray"


const bgColors = [
    '#636541', '#624535', '#522640', '#314d3e', '#2a3a57ac', '#34364a', '#502b2b'
]

const ServicesFC:React.FC<IStyledFC> = ({className}) => {
    const _windowSizeContext = React.useContext(windowSizeContext)
    const [transforms, setTransForms] = React.useState(servicesArray.map(item => ({translateX: 0, translateY: 0, translateZ: 0})));
    const [viewsState, setViewsState] = React.useState(servicesArray.map(item => false))
    const [bgColor, setBgColor] = React.useState("#a4d1e9ad");

    React.useEffect(() => {
        console.log(viewsState);
        const visiblePagesLength = viewsState.filter(i => i).length;

        console.log(visiblePagesLength)
        const mappedTransformValues = transforms.map((t, i) => {
            if((i + 1) <= visiblePagesLength) {
                const translateNumXY = -((visiblePagesLength - (i + 1)) * 30);
                const translateNumZ = -((visiblePagesLength - (i + 1)) * 10);
                return ({
                    translateX: translateNumXY,
                    translateY: translateNumXY,
                    translateZ: translateNumZ,
                })
            } else {
                return ({
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                })
            }
        })

        setTransForms(mappedTransformValues)

    }, [viewsState])

    return(
        <motion.div id="services" className={className}
        animate={{
            backgroundColor: bgColor,
            transition: {duration: 5, type: 'spring'}
        }}>
            <div className="title-reveal-container">
                <TextReveal2 text={'Things'} delay={0}/>
                <TextReveal2 text={'I'} delay={0.2}/>
                <TextReveal2 text={'Can'} delay={0.4}/>
                <TextReveal2 text={'Do'} delay={0.6}/>
            </div>
            {
                _windowSizeContext && servicesArray.map((item, index) => (_windowSizeContext.h > 600 && _windowSizeContext.w > 800)? (
                    <Item 
                    transform={{
                        translateX: `${transforms[index].translateX}px`,
                        translateY: `${transforms[index].translateY}px`,
                        translateZ: `${transforms[index].translateZ}px`
                    }}
                    itemIndex={index} 
                    itemInfo={item} 
                    viewUpdate={(inView) => {
                        setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
                        viewsState[index] = inView
                        setViewsState([...viewsState]);
                    }} 
                    key={index}/>
                ) : 
                (
                    <ItemSmallScreen
                    viewUpdate={(inView) => {
                        setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
                    }} 
                    itemIndex={index} 
                    itemInfo={item} 
                    key={index}/>
                ))
            }
        </motion.div>
    )
}

interface IItem extends IStyledFC {
    viewUpdate: (inView: boolean) => void;
    itemInfo: IService;
    itemIndex: number;
    transform: {
        translateX: string,
        translateY: string,
        translateZ: string
    }
}

const ItemsFC:React.FC<IItem> = ({className, viewUpdate, itemInfo, itemIndex, transform}) => {
    const router = useRouter() 
    const interestContext = React.useContext(InterestContext);
    const itemRef = React.useRef<null | HTMLDivElement>(null);
    const inView = useInView(itemRef);
    
    React.useEffect(() => {
        viewUpdate(inView);
    }, [inView]);

    return(
        <motion.div
        animate={{
            opacity: inView? 1 : 0,
            transform: `perspective(200px) translateX(${transform.translateX}) translateY(${transform.translateY}) translateZ(${transform.translateZ})`,
            transition: {duration: 2, type: 'spring'}
        }}
        className={className} 
        ref={itemRef}
        > 
            <strong>{itemIndex + 1}</strong>
            <h1 className="titl">{itemInfo.title}</h1>
            <p>{itemInfo.text}</p>
            <Button color="#966434" onClick={() => {
                interestContext?.setValue(itemInfo.title);
                router.push('#contact');
            }}>Interested</Button>
        </motion.div>
    )
}

const Item = styled(ItemsFC)`
    display: flex;
    flex-direction: column;
    opacity: 0;
    position: sticky;
    top: 50px;
    width: 100%;
    max-width: 800px;
    min-width: 300px;
    height: 90dvh;
    justify-content: center;
    /* max-height: 800px; */
    /* max-height: fit-content; */
    /* background-color: #a4d1e9ad; */
    background-image: url(assets/images/paint-bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    backdrop-filter: blur(5px);
    /* border: 1px solid #f930a5; */
    border: 1px solid var(--main-text-color);
    border-radius: 5px;
    /* box-shadow: 0 -2px 3px #f930a57a; */

    && > h1, p, strong {
        font-family: Bungee;
        /* color: #f930a5; */
        color: #966434;
        font-size: 4vw;
        font-weight: 900;
        /* margin: 100px 0 50px 50px; */
    }
    
    && > strong {
        margin: 70px 0 70px 70px;
        margin-top: 0;
        color: #966434;
        font-size: 30px;
        text-decoration: underline;
        font-weight: 900;
    }

    && > h1 {
        margin: 0 0 30px 70px;
    }

    && > p {
        font-family: BalooBhaina2;
        margin: 0 70px 30px 70px;
        line-height: 1.5;
        /* color: #78174f; */
        color: #59422d;
        font-size: 18px;
        font-weight: 600;
    }

    && > ${Button} {
        width: fit-content;
        margin-left: 70px;
    }
`;

interface IItemSm extends IStyledFC {
    itemInfo: IService;
    itemIndex: number;
    viewUpdate: (inView: boolean) => void;
}
const ItemsSmallScreenFC:React.FC<IItemSm> = ({className, itemInfo, itemIndex, viewUpdate}) => {
    const router = useRouter() 
    const interestContext = React.useContext(InterestContext);
    const itemRef = React.useRef<null | HTMLDivElement>(null);
    const inView = useInView(itemRef);
    
    React.useEffect(() => {
        viewUpdate(inView);
    }, [inView]);

    return(
        <motion.div
        className={className} 
        ref={itemRef}
        initial={{
            opacity: 0,
            transform: "translateY(50px)"
        }}
        whileInView={{
            opacity: 1,
            transform: "translateY(0)",
            transition: {duration: 1, type: 'tween'},
            offset: "start end"
        }}
        viewport={{once: true}}
        > 
            <strong>{itemIndex + 1}</strong>
            <h1 className="titl">{itemInfo.title}</h1>
            <p>{itemInfo.text}</p>
            <Button color="#966434" onClick={() => {
                interestContext?.setValue(itemInfo.title);
                router.push('#contact');
            }}>Interested</Button>
        </motion.div>
    )
}

const ItemSmallScreen = styled(ItemsSmallScreenFC)`
    display: flex;
    flex: 0 1 100%;
    margin: 0 30px;
    flex-direction: column;
    gap: 20px;
    /* border: 1px solid #f930a5; */
    border: 1px solid #59422d;
    border-radius: 5px;
    padding: 80px 20px;
    background-color: #ffffff;
    backdrop-filter: blur(5px);
    background-image: url(assets/images/paint-bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    && > h1, p, strong {
        font-family: Bungee;
        /* color: #f930a5; */
        color: #966434;
        font-weight: 900;
        font-size: 30px;
    }

    && > strong {
        /* margin: 10px 0 10px 10px; */
        color: #966434;
        font-size: 20px;
        text-decoration: underline;
        font-weight: 900;
    }

    && > p {
        font-family: BalooBhaina2;
        /* margin: 0 10px 10px 10px; */
        line-height: 1.5;
        /* color: #78174f; */
        color: #59422d;
        font-size: 13px;
        font-weight: 600;
    }

    && > ${Button} {
        width: fit-content;
        margin-left: 10px;
    }
`;

const Services = styled(ServicesFC)`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 15vh;
    margin-top: 100px;
    flex: 0 1 100%;
    padding: 100px 15%;
    height: fit-content;
    background-color: #303f49;
    overflow: visible;


    && > .title-reveal-container {
        display: flex;
        width: fit-content;
        gap: 0.1ch;
        font-size: 10vw;
        color: #ebf7fe;
        margin: 0 auto;
        font-family: Brugetta,Sacramento;
        /* font-weight: 900; */
    }

    @media (max-width: 800px) {
        background-color: #ffffff56;
        padding: 30px 0;
        gap: 30px;

        && > .title-reveal-container {
            font-size: 50px;
        }
    }
    
`

export default Services