import React, {createContext, useState, ReactNode, useEffect} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import { ModalPet } from '../components/ModalPet';
import knows from '../../knows.json';
import api from '../apiUser';
import { User } from '../components/User';

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface CicleIndex{
  description: string;
}

interface GitHub{
  login: string,
  avatar: string,
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  
  pet: string;
  levelPet: number;
  currentPetExperience: number;
  experiencePetToNextLevel:number;

  user: string;
  gitHubUser: GitHub;
  
  isEvolve: boolean;
  cicleIndex: CicleIndex;

  levelUp: () => void;
  newCicle: () => void;
  
  evolve: (levelPet: number) => void;
  PetlevelUp: () => void;
  closeModalPet: () => void;

  newUser: (name: string) => void;
  getUser: () => void;
  OpenModalUser: () => void;
  CloseModalUser: () => void;

  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeUpLevelModal: () => void; 
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  user: string;
  levelPet: number;
  currentPetExperience: number;
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
  const [user, setUser] = useState(rest.user ?? 'null');
  
  const [pet, setPet] = useState('hatenna');
  const [levelPet, setLevelPet]= useState(rest.levelPet ?? 1);
  const [currentPetExperience, setCurrentPetExperience] = useState(rest.currentPetExperience ?? 0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalPetOpen, setIsModalPetOpen] = useState(false);
  const [isEvolve, setIsEvolve]= useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const [gitHubUser, setGitHubUser] = useState(null);
  const [cicleIndex, setCicleIndex]= useState(null);
  const [activeChallenge, setActiveChallenge] = useState(null);

  
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const experiencePetToNextLevel = Math.pow((levelPet + 1) * 5, 2);

  function levelUp(){
    setLevel(level +1);
    setIsModalOpen(true);
  }

  function closeUpLevelModal(){
    setIsModalOpen(false);
  }

  function newCicle(){
    const randomKnowIndex = Math.floor(Math.random() * knows.length);
    setCicleIndex(knows[randomKnowIndex]);
  }
// ---------------------------Pet----------------------------------------

  function evolve(lvl: number){
    if(lvl === 5 || lvl === 10){
      setIsEvolve(true);
    }else{
      setIsEvolve(false);
    }   
  }

  function PetlevelUp(){
    setLevelPet(levelPet +1);
    setIsModalPetOpen(true);
  }

  function closeModalPet(){
    setIsModalPetOpen(false);
  }


// ---------------------------User---------------------------------------
  function getUser(){
    api.get(`${user}`)
    .then(res => {
      if(user===''){
        return setGitHubUser(null);
      }else{
        setGitHubUser({login: res.data.login, avatar: res.data.avatar_url})
      }
    }).catch(err =>{
      console.log(err)
    })
  }

  function newUser(name: string){
    setUser(name);
  }

  function OpenModalUser(){
    setIsUserOpen(true);
  }

  function CloseModalUser(){
    setIsUserOpen(false);
  }
// ---------------------------Challenges---------------------------------------
  
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

    let petFinalExperience = currentPetExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    if(petFinalExperience >= experiencePetToNextLevel){
      petFinalExperience = petFinalExperience - experiencePetToNextLevel;
      PetlevelUp();
    }

    setCurrentPetExperience(petFinalExperience);
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }
// ---------------------------useEffect---------------------------------------
  useEffect(()=> {
    //Notification.requestPermission();
    newCicle();
    getUser();
  },[])

  useEffect(()=> {

    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
    Cookies.set('user', user);
    Cookies.set('levelPet', String(levelPet));
    Cookies.set('currentPetExperience', String(currentPetExperience));
    if(levelPet===5){
      setPet('hattrem');
    }
    if(levelPet===10){
      setPet('hatterene');
    }
  },[level, currentExperience, challengesCompleted, user, levelPet, currentPetExperience])
// ---------------------------Return---------------------------------------
  return(
    <ChallengesContext.Provider 
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,

        pet,
        levelPet,
        currentPetExperience,
        experiencePetToNextLevel,
        isEvolve,
        
        user,
        gitHubUser,
        
        cicleIndex,

        levelUp,
        evolve,
        PetlevelUp,
        closeModalPet,

        newCicle,
        closeUpLevelModal,

        newUser,
        getUser,
        OpenModalUser,
        CloseModalUser,

        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal/>}
      {isModalPetOpen && !isModalOpen && <ModalPet/>}
      {isUserOpen && <User/>}
    </ChallengesContext.Provider>
  )
}