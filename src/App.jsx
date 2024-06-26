import { useState } from 'react'
import styles from './App.module.scss'

function App() {
  const [text, setText] = useState("");
  const [textOnScreen, setTextOnScreen] = useState("");
  const [textError, setTextError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setTextError('Необходимо ввести текст!!! =)')
    } else {
      setTextError("")
    }
    setTextOnScreen(text.toUpperCase())
    setText("")
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.textBlock} onSubmit={handleSubmit}>
          <div className={styles.textName}>Введите текст:</div>

          <textarea className={styles.textArea} name="text" value={text}
            rows="10" cols="45" onChange={(e) => setText(e.target.value)}
          ></textarea>
          <p className={styles.errorMessage}>{textError}</p>
          <button className={styles.btn}>Добавить</button>
        </form>

        <div className={styles.postContainer}>
          <p>{textOnScreen}</p>
        </div>
      </div>
    </>
  )
}

export default App
