"use client"
import React, { ReactNode, createContext, useContext } from 'react';

const InterestContext = createContext<null | {value: string, setValue: (v:string) => void}>(null);

export const InterestContextProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [interest, setInterest] = React.useState('');
    return (
        <InterestContext.Provider value={{value: interest, setValue: (v:string) => setInterest(v)}}>
            {children}
        </InterestContext.Provider>
    )
};

export default InterestContext;