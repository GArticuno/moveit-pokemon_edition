import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Modal.module.css'

export function LevelUpModal(){
  const {level, closeUpLevelModal, isEvolve, levelPet}= useContext(ChallengesContext)


  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você conquistou um novo level</p>

          {(levelPet<10 && !isEvolve) && (
          <p>Conclua mais ciclos para evoluir seu parceiro pokemon</p>
        )}
        <button 
          type='button'
          onClick={closeUpLevelModal}
        >
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </div>
    </div>
    )
}