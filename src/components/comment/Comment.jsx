import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar';
import styles from './Comment.module.css';

export function Comment(){
return(
  <div className={styles.comment}>
    <Avatar borderFalse src="../assets/imgs/avatar.jpg"/>
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Naldo</strong>
            <time title="11 e maio as 15:00h" dateTime="2023-01-01 15:25:00">Cerca de 1h</time>
          </div>
          <button title="Deletar comentario">
            <Trash size={24}/>
          </button>
        </header>
        <p>Muito bom!</p>
      </div>
      <footer>
        <button>
          <ThumbsUp />
          Aplaudir<span>20</span>
        </button>
      </footer>
    </div>
  </div>
)
}
