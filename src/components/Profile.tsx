import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
  const {level, pet} = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
        <img src="https://github.com/GArticuno.png" alt="Garticuno"/>
        <div>
          <strong>Garticuno</strong>
          <p>
            <img src="icons/level.svg" alt='Level'/>
            {`Level ${level}`}
          </p>
        </div>
        <div>
          <img 
            src={`https://play.pokemonshowdown.com/sprites/ani/${pet}.gif`} 
            className={styles.petIcon} 
            alt='pokemon'
            onClick={()=>{new Audio(`sounds/${pet}-cry.mp3`).play()}}
          />
        </div>
    </div>
  );
}