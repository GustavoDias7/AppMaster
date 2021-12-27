import React, { useEffect, useState } from "react";
import SimpleHeader from "components/common/Headers/SimpleHeader";
import Topbar from "components/common/Topbar";
import products from "mock/product";
import { useSearchParams } from "react-router-dom";
import ProductPath from "components/Product/ProductPath";
import ProductDetails from "components/Product/ProductDetails";
import MainFooter from "components/common/MainFooter";

const Product = () => {
  let [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedPorduct] = useState(null);

  useEffect(() => {
    function getProduct() {
      const paramProductId = searchParams.get("id");
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === paramProductId) {
          setSelectedPorduct(products[i]);
          break;
        }
      }
    }
    getProduct();
  });

  if (!selectedProduct) return null;
  return (
    <>
      <Topbar />
      <SimpleHeader />
      <ProductPath title={selectedProduct.title} />
      <ProductDetails selectedProduct={selectedProduct} />
      <MainFooter />
    </>
  );
};

export default Product;
