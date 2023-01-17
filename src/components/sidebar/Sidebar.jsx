import { PencilLine } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
return (
  <aside className={styles.sidebar}>
    <img className={styles.paisagem} src="../../public/igms/praia.jpg" />
    <div className={styles.profile}>
    <Avatar src="../../assets/imgs/avatar.jpg" />
    <strong>Leticia</strong>
    <span>Acompanhante Nifeta</span>
    </div>
    <footer>
      <a href='#'>
        <PencilLine size={20} />
        Editar Perfil
      </a>
    </footer>
  </aside>
)
}