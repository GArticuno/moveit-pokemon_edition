import Head from 'next/head';

import {GetServerSideProps} from 'next';
import { Cookies } from "react-cookie-consent";

import { ExperiencePetBar } from '../components/ExperiencePetBar';
import { CountdownProvider } from '../contexts/CountdownContext';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import {ChallengesProvider} from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.scss';

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelPet: number;
  currentPetExperience: number;

}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      user={Cookies.get('user')}
      levelPet = {props.levelPet}
      currentPetExperience={props.currentPetExperience}
      Cookies = {Boolean(Cookies.get('Cookies'))}
    >
      <div className={styles.container}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Se mantenha saudável na frente do computador."/>
          <meta name="theme-color" content="#ffb7ca"/>
          <meta property="og:title" content="Move.it(Pokémon edition)"/>
          <meta property="og:description" content="Se mantenha saudável na frente do computador."/>
          <meta property="og:image" content="https://i.pinimg.com/originals/f9/05/d2/f905d2c66b32604817eb3f0f9b4e82c0.jpg"/>
          
          <title>Move.it(Pokémon edition)</title>
        </Head>
        <ExperienceBar/>
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <ExperiencePetBar/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, currentExperience, challengesCompleted, levelPet, currentPetExperience} = ctx.req.cookies

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      levelPet: Number(levelPet),
      currentPetExperience: Number(currentPetExperience)
    }
  }
}