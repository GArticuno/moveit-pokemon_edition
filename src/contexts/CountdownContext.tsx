import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
  time: number;
  minutes: number
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startcount: ()=> void;
  resetcount: ()=> void;
}

interface CountdownProviderProps {
  children: ReactNode;
}
  
export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps){
  const [time, setTime] = useState(25*60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const {startNewChallenge} = useContext(ChallengesContext);

  const minutes = Math.floor(time/60);

  const seconds = time % 60;
  
  function startcount(){
    setIsActive(true);
  }

  function resetcount(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(25*60);

  }

  useEffect(()=>{
    if(isActive && time>0){
      countdownTimeout = setTimeout(()=>{
        setTime(time-1);
      }, 1000)
      } else if(isActive && time === 0){
        setHasFinished(true);
        setIsActive(false);
        startNewChallenge();
      }
  }, [isActive, time])
  
  return(
    <CountdownContext.Provider 
      value={{
        time,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startcount,
        resetcount
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
