import React from 'react';
import styles from './ProductList.module.css'
import { products } from './../data/products'

type ProductItemType = {
    id: number,
    name: string,
    price: number,
    promoPrice: number,
    thumb: string,
}
const ProductItem = ({product}:{product: ProductItemType}) => {
    let discount = 0;
    if (product.promoPrice > 0) {
        discount = 100 - (100 * product.promoPrice) / product.price;
    }
    return (
        <div data-id={product.id} className={styles.product_item}>
            {discount > 0 && <span className={styles.discount}>-{`${discount} %`}</span>}
            <img src={product.thumb} alt={product.name} />
            <h3>{product.name}</h3>
            <div className={styles.price}>
                {product.promoPrice > 0 ? (
                    <>
                        <strong>{product.promoPrice}</strong>
                        <del>{product.price}</del>
                    </>
                ) : (
                    <strong>{product.price}</strong>
                )}
            </div>
        </div>
    );
}
const ProductsList = () => {

  return <div className={styles.product_wrapper}>
        {
            products.map((item) =>{
                return <ProductItem key={`ProductsList_${item.id}`} product={item} />
            })
        }
  </div>;
};

export default ProductsList;