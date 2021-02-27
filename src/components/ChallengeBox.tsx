import { useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';


export function ChallengeBox(){
  const {
    activeChallenge,
    cicleIndex, 
    resetChallenge, 
    completeChallenge, 
    newCicle
  } = useContext(ChallengesContext);

  const { resetcount} = useContext(CountdownContext);
  

  function handleChallengeSucceeded(){
    completeChallenge();
    resetcount();
    newCicle();
  }

  function handleChallengeFalied(){
    resetChallenge();
    resetcount();
    newCicle();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFaliedBtn}
              onClick={handleChallengeFalied}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededBtn}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
        ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <img src="icons/level-up.svg" alt="Level up"/>
          <strong>Você Sabia? </strong>
          <p>
            {cicleIndex.description}
          </p>
        </div>
        )
      }
    </div>
  )
}