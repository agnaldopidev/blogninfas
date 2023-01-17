import { Header } from './components/headers/Header';
import { Post } from './components/posts/Post';
import { Sidebar } from './components/sidebar/Sidebar';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

