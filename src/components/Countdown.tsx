import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.scss';

export function Countdown(){
  const {
    time,
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetcount,
    startcount
  } = useContext(CountdownContext);

  const [minuteL, minuteR] = String(minutes).padStart(2,'0').split('');
  const [secondL, secondR] = String(seconds).padStart(2,'0').split('');

  let percentToNextCicle = (time * 100) / (25*60);

  if(percentToNextCicle < 1 && percentToNextCicle != 0){
    percentToNextCicle = 0.5;
  } else if(percentToNextCicle === 0){
    percentToNextCicle =0;
  }
  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteL}</span>
          <span>{minuteR}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondL}</span>
          <span>{secondR}</span>
        </div>
      </div>
      {hasFinished ? (
        <>
          <button 
            disabled
            className={styles.countdownButton}
          >
            Ciclo Encerrado
          </button>
          <div className={styles.percentBarBlank}>
            <div className={styles.percentBar} style={{width: `${percentToNextCicle}%`}}/>
          </div>
        </>
      ) : (
        <>
          {isActive ? (
            <>
              <button onClick={resetcount} 
                type='button' 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              >
                Abandonar ciclo
              </button>
              <div className={styles.percentBarBlank}>
                <div className={styles.percentBar} style={{width: `${percentToNextCicle}%`}}/>
              </div>
            </>
            ) : (
            <>
              <button onClick={startcount} 
                type='button' 
                className={styles.countdownButton}
              >
                Iniciar um ciclo
              </button>
              <div className={styles.percentBar} style={{width: `100%`, marginTop: '0.2rem'}}/>
            </>
            )}
        </>
      )}
    </div>
  )  
}