import React, { useEffect } from "react";
import { useParams } from "react-router";
import useRawgApi from "../app/hooks/useRawgApi";
import placeholderProduct from "../../json/placeholderProduct";
import ProductBox from "./productbox";
import useFirestoreProducts from "../firebase/useFirestoreProducts";
import { v4 as uuidv4 } from "uuid";

import "./productview.css";

const ProductPage = () => {
  const { productId } = useParams();
  //const [product] = useRawgApi("id", productId)
  const productItem = useFirestoreProducts(productId);

  const createProduct = () => {
    return productItem.map((item, i) => (
      <ProductBox key={uuidv4()} product={item} />
    ));
  };

  return (
    <div className="ProductPage">
      {createProduct()}
      {/** Recommended products component */}
    </div>
  );
};

export default ProductPage;
