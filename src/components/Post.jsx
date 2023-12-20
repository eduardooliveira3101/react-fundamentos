import styles from './Post.module.css'
import { Avatar } from './Avatar.jsx'
import { Comment } from './Comment.jsx'

export const Post = () => {
  return (

    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar src="https://scontent.fjdo1-2.fna.fbcdn.net/v/t39.30808-6/336322229_153449054294371_3101495589620610339_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFQ_BXLVZVs861TID-Yp17T_q8ChjY7psL-rwKGNjumwgiFjnpZmJrRaROn747ysDCc1tIjC2nT3Z9gl-pnUgGU&_nc_ohc=4C2vFWtwcYsAX-_qb6v&_nc_ht=scontent.fjdo1-2.fna&oh=00_AfCoDW3Ya27JPfEaY3jm3P0EXEQboNG5pKDyVdNl55tHPg&oe=65887B23" 
          />

           <div className={styles.authorInfo}>
             <strong>Eduardo Oliveira</strong>
             <span>Web Developer</span>
           </div>
        </div>

        <time 
        title='Publicado em 20 de dezembro ás 16:10' 
        dateTime="2023-12-20">Publicado há 1 hora 
        </time>

      </header>

         <div className={styles.content}>
            <p>Fala galeraa 👋 </p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 
            <p>👉 <a href="#">jane.design/doctorcare</a></p>
            <p>
              <a href="#">#novoprojeto </a>
              <a href="#">#nlw </a>
              <a href="#">#rocketseat</a>
            </p>
        </div>

        <form className={styles.componentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe um comentário'/>

          <footer>
          <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
    </article>
  )
}
