import { useContext, useEffect } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
  const {level, closeUpLevelModal, isEvolve, evolve}= useContext(ChallengesContext)

  useEffect(()=> {
    evolve(level)
  })
  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você conquistou um novo level</p>
        {isEvolve && 
          (
            <>
            <img src="/gifs/evoTag.gif" alt="Evolution"/>
            <p>
              Seu parceiro pokemon está evoluindo!
            </p>
            </>   
          )}
          {(level<10 && !isEvolve) && (
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