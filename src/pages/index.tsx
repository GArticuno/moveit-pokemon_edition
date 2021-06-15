import Head from 'next/head';

import {GetServerSideProps} from 'next';
import Cookies from 'js-cookie';

import { ExperiencePetBar } from '../components/ExperiencePetBar';
import { CountdownProvider } from '../contexts/CountdownContext';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import {ChallengesProvider} from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css';


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
    >
      <div className={styles.container}>
        <Head>
          <title>Move.it(Pokemon edition)</title>
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