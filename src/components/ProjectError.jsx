import React from "react";
import styles from "./ProjectError.module.css";

function ProjectError(props) {
  const error = props.error;
  return (
    <div className={styles.backdrop}>
      <div className={styles.frame}>
        <h2 className={styles.warning}> {error.warning}</h2>
        <p className={styles.errorText}>{error.errorText}</p>
        <section className={styles.button}>
          <button className={styles["button-btn"]} onClick={props.onClear}>
            OK
          </button>
        </section>
      </div>
    </div>
  );
}

export default ProjectError;
