import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStart } from './../../redux/products/products.action'
import Product from './Product'

import './styles.scss'

const mapState = ({ productsData }) => ({
  products: productsData.products
})

const ProductResults = ({}) => {
  const dispatch = useDispatch()
  const { products } = useSelector(mapState) 

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    )
  }, [])

  if (!Array.isArray(products)) return null 

if (products.length < 1) {
    return (
      <div className="products">
        <p>No search results</p>
      </div>
    );
  }

  return (
    <div className="products">
      {products.map((product, pos) => {
        const { productCategory, productThumbnail, productName, productDesc, productPrice } = product;
        if (
          !productThumbnail ||
          !productName ||
          !productDesc ||
          typeof productPrice === 'undefined'
        )
          return null;

          //if (filter && productCategory !== filter) {
          //  console.log(filter)
          //  console.log("test")
          //}

          const configProduct = {
            productThumbnail, productName, productDesc, productPrice
          }

        return (
          <Product {...configProduct}/>
        );
      })}
    </div>
  );
};

export default ProductResults 