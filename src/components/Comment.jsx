import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export const Comment = () => {
  return (

    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/336322229_153449054294371_3101495589620610339_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFQ_BXLVZVs861TID-Yp17T_q8ChjY7psL-rwKGNjumwgiFjnpZmJrRaROn747ysDCc1tIjC2nT3Z9gl-pnUgGU&_nc_ohc=4C2vFWtwcYsAX-_qb6v&_nc_ht=scontent.fjdo1-2.fna&oh=00_AfCoDW3Ya27JPfEaY3jm3P0EXEQboNG5pKDyVdNl55tHPg&oe=65887B23"/>
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Eduardo Oliveira</strong>
                <time title='Publicado em 20 de dezembro ás 16:10' dateTime="2023-12-20">Cerca de 1hr hora atrás</time>
              </div>

              <button title='Deletar comentário'>
                <Trash size={20}/>
              </button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>

          <footer>
            <button>
              <ThumbsUp/> Aplaudir <span>20</span>
            </button> 
          </footer>

        </div>
    </div>

  )
}
