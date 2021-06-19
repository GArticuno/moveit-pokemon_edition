import styles from '../styles/components/UserLogin.module.scss';

export function Loading() {

  return (
    <div className={styles.container}>
      <img src="/logo-full.svg" alt="Move.it" className={styles.logo}/>
    </div>
  )
}
