import React from "react";
import styles from "./Aside.module.css";

function Aside() {
    return (
        <div className={styles.aside}>
        <h2>Noticia do Mundo do Rock </h2>
        <p>Leia as ultimas noticias, lançamentos e eventos do mundo do Rock</p>
        </div>
    );
}

export default Aside;