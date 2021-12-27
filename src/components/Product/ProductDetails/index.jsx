import React from "react";
import ProductImage from "components/Product/ProductImage";
import ProductInfos from "components/Product/ProductInfos";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ selectedProduct }) => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <ProductImage {...selectedProduct} />
          <ProductInfos {...selectedProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
