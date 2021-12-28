import React from "react";
import styles from "./ProductInfos.module.css";

const ProductInfos = ({
  title,
  type,
  client,
  date,
  url,
  descriptionTitle,
  description,
}) => {
  return (
    <aside className={styles.productInfos}>
      <article>
        <a href={url} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
        <ul>
          <li>
            <strong>Categoria:</strong> <span>{type}</span>
          </li>
          <li>
            <strong>Cliente:</strong> <span>{client}</span>
          </li>
          <li>
            <strong>Data:</strong> <span>{date}</span>
          </li>
          <li>
            <a href={url} target="_blank" rel="noreferrer">
              Baixe o app
            </a>
          </li>
        </ul>
      </article>
      <section>
        <h3>{descriptionTitle}</h3>
        <p>{description}</p>
      </section>
    </aside>
  );
};

export default ProductInfos;
