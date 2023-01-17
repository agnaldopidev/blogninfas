import style from './Header.module.css';
import ignitlogon from '../../assets/imgs/logon.jpg';

export function Header(){
  return (
    <header className={style.header}>
      <img src={ignitlogon} alt="Logon Ignit" />     
      <h1>Site das Nifetas</h1>
    </header>
  );
}