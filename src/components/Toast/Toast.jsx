import styles from "./Toast.module.scss";

export default function Toast({ message, type = "success", onClose }) {
  if (!message) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </div>
  );
}
