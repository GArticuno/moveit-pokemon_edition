import React, {createContext, useState, ReactNode, useEffect} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import knows from '../../knows.json';

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface CicleIndex{
  description: string;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  pet: string;
  isEvolve: boolean;
  cicleIndex: CicleIndex;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeUpLevelModal: () => void; 
  evolve: (level: number) => void;
  newCicle: () => void;
  
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider(
{
  children,
  ...rest
} : ChallengesProviderProps) {

  const [level, setLevel]= useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [pet, setPet] = useState('hatenna');
  const [isEvolve, setIsEvolve]= useState(false);
  
  const [cicleIndex, setCicleIndex]= useState(knows[2] ?? null);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp(){
    setLevel(level +1);
    setIsModalOpen(true);
  }

  function evolve(lvl: number){
    if(lvl === 5 || lvl === 10){
      setIsEvolve(true);
    }else{
      setIsEvolve(false);
    }   
  }
  function closeUpLevelModal(){
    setIsModalOpen(false);
  }

  function newCicle(){
    const randomKnowIndex = Math.floor(Math.random() * knows.length);
    setCicleIndex(knows[randomKnowIndex]);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/sounds/notification.mp3').play();
    
    if(Notification.permission === 'granted'){
      new Notification('Novo desafio 🥳',{
        body: `Valendo ${challenge.amount}xp!`,
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
    }

    const {amount} = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  useEffect(()=> {
    Notification.requestPermission();
  },[])

  useEffect(()=> {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
    if(level===5){
      setPet('hattrem');
    }
    if(level===10){
      setPet('hatterene');
    }
  },[level, currentExperience, challengesCompleted, pet])

  return(
    <ChallengesContext.Provider 
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        pet,
        isEvolve,
        cicleIndex,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeUpLevelModal,
        evolve,
        newCicle
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
  )
}