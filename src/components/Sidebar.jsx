import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

console.log(styles)

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
      src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=70&w=296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
    
    <div className={styles.profile}>
    <Avatar  src='https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/336322229_153449054294371_3101495589620610339_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFQ_BXLVZVs861TID-Yp17T_q8ChjY7psL-rwKGNjumwgiFjnpZmJrRaROn747ysDCc1tIjC2nT3Z9gl-pnUgGU&_nc_ohc=4C2vFWtwcYsAX-_qb6v&_nc_ht=scontent.fjdo1-2.fna&oh=00_AfCoDW3Ya27JPfEaY3jm3P0EXEQboNG5pKDyVdNl55tHPg&oe=65887B23'/>
      <strong>Eduardo Oliveira</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={15}/>
        Editar seu perfil
      </a>
    </footer>
    </aside>
  )
}
