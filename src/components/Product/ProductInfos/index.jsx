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
        <h2>{title}</h2>
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
            <strong>URL:</strong>
            <span>
              {" "}
              <a href={"https://" + url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </span>
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
