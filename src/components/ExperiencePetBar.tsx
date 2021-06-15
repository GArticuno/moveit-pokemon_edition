import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperiencePetBar.module.scss'

export function ExperiencePetBar(){
  const {currentPetExperience, experiencePetToNextLevel, levelPet} = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentPetExperience * 100) / experiencePetToNextLevel;
  return(
    <div className={styles.container}>
    {`Pet lvl: ${levelPet}`}
    <div 
      className={styles.experienceBar}
      title={`${currentPetExperience}xp for ${experiencePetToNextLevel}xp`}
    >
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}/>
      </div>
    </div>
    </div>
  );
}