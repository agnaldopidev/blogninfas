import { Comment } from '../comment/Comment';
import { Avatar } from '../avatar/Avatar';
import styles from './Post.module.css';

export function Post(){
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar src="../../assets/imgs/avatar.jpg" />
          <div className={styles.authorInfo}>
            <strong>Leticia</strong>
            <span>Acompanante Nifeta</span>
          </div>
        </div>
        <time title="12 janeiro ás 07:52" dateTime="2023-01-12 7:58:00">publica a 1h</time>
      </header>
      <div className={styles.content}>
        <p>Leticia é uma gorata novinha e sensual ela gosta de agradar seus parceiro com muito amor e tesão</p>
        <p>Novinha de 18 anos de idade com atura de 170cm, cintura fina e bunda grande</p>
        <p>Mora em Belo Horizonte e está disponível para todo Brasil</p>
        <p><a>Mais infomaões sobre essa nifeta</a></p>
        <p><a>Aceita presentinhos</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong>Comentários</strong>
        <textarea
        placeholder="Faça seua comntario"
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
        </form>
        <div className={styles.commentList}>
          <Comment /> 
          <Comment /> 
          <Comment /> 
        </div>
    </article>
  )
}
