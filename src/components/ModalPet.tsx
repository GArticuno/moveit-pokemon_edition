import { useContext, useEffect } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ModalPet.module.css'

export function ModalPet(){
  const {levelPet, closeModalPet, isEvolve, evolve}= useContext(ChallengesContext)

  useEffect(()=> {
    evolve(levelPet)
  })
  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        
        {isEvolve && 
          (
            <>
            <img 
              src="/gifs/evoTag.gif"
              alt="Evolution"
            />
            <p>
              Seu parceiro pokemon está evoluindo!
            </p>
            </>   
          )}
        <button 
          type='button'
          onClick={closeModalPet}
        >
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </div>
    </div>
    )
}