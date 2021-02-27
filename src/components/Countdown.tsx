import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetcount,
    startcount
  } = useContext(CountdownContext);

  const [minuteL, minuteR] = String(minutes).padStart(2,'0').split('');
  const [secondL, secondR] = String(seconds).padStart(2,'0').split('');

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
          <div className={styles.endBorder}/>
        </>
      ) : (
        <>
          {isActive ? (
            <button onClick={resetcount} 
              type='button' 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>) : (
            <button onClick={startcount} 
              type='button' 
              className={styles.countdownButton}
            >
              Iniciar um ciclo
            </button>)}
        </>
      )}
    </div>
  )  
}