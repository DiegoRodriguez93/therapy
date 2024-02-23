import { FC } from "react";
import styles from "./Blog.module.scss";

interface BlogCardProps {
  imageUrl: string;
  date: string;
  title?: string;
  title2?: string;
  content?: string;
  buttonText: string;
  height: string;
}

const BlogCard: FC<BlogCardProps> = ({
  imageUrl,
  date,
  title,
  title2,
  content,
  buttonText,
  height
}) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})`, height }}
    >
      <div className={styles.textContainer}>
        <span className={styles.date}>{date}</span>
        <h5 className={styles.title}>{title}</h5>
        <h5 className={styles.title2}>{title2}</h5>
        <p className={styles.content}>{content}</p>
      </div>
      <button className={styles.floatingButton}>{buttonText}</button>
    </div>
  );
};

export default BlogCard;
