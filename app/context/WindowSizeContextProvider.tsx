"use client"
import React, { ReactNode, createContext, useContext } from 'react';

const windowSizeContext = createContext<null | {h: number, w: number}>(null);

export const WindowContextProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [windowSize, setWindowSize] = React.useState<null | {h: number, w: number}>(null);
    React.useEffect(() => {
        setWindowSize({h: window.innerHeight, w: window.innerWidth})
        const screenSizeObserverFunction = () => {
            setWindowSize({h: window.innerHeight, w: window.innerWidth})
        }

        window.addEventListener('resize', screenSizeObserverFunction);

        return () => {
            window.removeEventListener('resize', screenSizeObserverFunction)
        }
    }, [])
    return (
        <windowSizeContext.Provider value={windowSize}>
            {children}
        </windowSizeContext.Provider>
    )
};

export default windowSizeContext;