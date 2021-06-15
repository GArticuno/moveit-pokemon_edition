import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/UserLogin.module.scss';

export function UserLogin() {
  const {newUser} = useContext(ChallengesContext);

  const [userName, setUserName]= useState('');
  
  function Submit(event: any){
    newUser(userName);
    document.location.reload(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/logo-full.svg" alt="Move.it" className={styles.logoFull}/>
        <h1>(Pokémon edition)</h1>
        <form onSubmit={Submit}>
            <h2>
            Sign in
            </h2>
            <input 
              type='text'
              placeholder='Your Github user'
              onChange={event =>setUserName(event.target.value)}
              maxLength={39}
            />
              <button 
                type='submit' 
                disabled={userName === ''}
              >
                Login
              </button>
        </form>
      </div>
      
    </div>
  )
}
