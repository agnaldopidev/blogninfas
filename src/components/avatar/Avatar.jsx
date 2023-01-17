import styles from './Avatar.module.css';

export function Avatar({borderFalse=false, src } = props){
return (
  <img 
    className={borderFalse ? styles.avatar: styles.avatarBoder} 
    src 
  />
)
}