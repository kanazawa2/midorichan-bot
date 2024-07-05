import Image from "next/image";
import styles from "./page.module.css";
import NewsContainer from "./components/newsContainer";

export default function Home() {
  return (
    <div>
      <NewsContainer />
    </div>
  );
}
