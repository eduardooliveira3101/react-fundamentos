import styles from './Header.module.css'
import logo from '../assets/logo.svg'

console.log(logo)

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo do ignite" />
      <h1>
      <strong>Ignite feed</strong>
        </h1>
    </header>
  )
}

