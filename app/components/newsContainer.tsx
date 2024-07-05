import AnswerTextArea from "./newsContainer/answerTextArea";
import QuestionButton from "./newsContainer/questionButton";
import styles from "./newsContainer.module.css";
export default function NewsContainer() {
  return (
    <div className={styles.newsContainer}>
      <QuestionButton />
      <AnswerTextArea />
    </div>
  );
}