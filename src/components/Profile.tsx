import { useContext, useEffect, useState} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.scss';

export function Profile(){
  const {level, pet, gitHubUser, user, OpenModalUser} = useContext(ChallengesContext);
  const [userFormated, setUseFormated] = useState('');


  useEffect(()=> {
    if(gitHubUser ===null){
      return;
    }else{
      if(gitHubUser.login.length > 20){
        var x = String(gitHubUser.login)
        x = x.substring(0, 17) + '...'
        setUseFormated(x);
      }else{
        setUseFormated(String(gitHubUser.login));
      }
    } 
  })
  
  return(
    <div className={styles.profileContainer}>
      { gitHubUser === null || user === 'null' ? (
        <img src='/icons/noUser.svg' alt='noUser' className={styles.avatar}/>
      ):(
        <img src={gitHubUser.avatar} alt="UserSubmmit" className={styles.avatar}/>  
      )}
      <div className={styles.user}>
        {gitHubUser === null || user === 'null' ? (
          <strong>UserName</strong>
        ):(
          <strong title={`${gitHubUser.login}`}>
            {userFormated}
          </strong>
        )}
        <p>
          <img src="icons/level.svg" alt='Level'/>
          {`Level ${level}`}
        </p>
        <button onClick={OpenModalUser}> Edit profile </button>
      </div>
      <div className={styles.pet}>
        <img 
          src={`https://play.pokemonshowdown.com/sprites/ani/${pet}.gif`}
          alt='pokemon'
          title={pet}
          onClick={()=>{new Audio(`sounds/${pet}-cry.mp3`).play()}}
        />
      </div>
    </div>
  );
}