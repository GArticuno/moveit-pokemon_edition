import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/User.module.css'

export function User(){
  const {newUser, CloseModalUser}= useContext(ChallengesContext)

  const [userName, setUserName]= useState('');
  
  function Submmit(){
    newUser(userName);
    document.location.reload(true);
  }

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.formulary}>
          <strong>Edit:</strong>
          <div>
            GitHub user:
            <input 
              type='text' 
              onChange={event =>setUserName(event.target.value)}
              maxLength={39}
            />
          </div>
          <div>
            <button 
              type='button' 
              onClick={Submmit}
              disabled={userName === ''}
            >
              Submmit
            </button>
          </div>
        </div>
        <button 
          type='button'
          onClick={CloseModalUser}
          className={styles.closeModal}
        >
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </div>
    </div>
    )
}