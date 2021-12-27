import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductPath.module.css";

const ProductPath = ({ title }) => {
  return (
    <section className={styles.productPath}>
      <div className="container">
        <h2>Detalhes do produto</h2>
        <p>
          <span>
            <Link to="/">Home</Link>
          </span>
          <em>/</em>
          <span>Produto</span>
          <em>/</em>
          <span>{title}</span>
        </p>
      </div>
    </section>
  );
};

export default ProductPath;
