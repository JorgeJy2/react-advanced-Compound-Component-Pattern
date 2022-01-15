
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/Interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';


export const ProductContext = createContext({

} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductCart = ({ children, product }: ProductCardProps) => {
    const {
        counter,
        increaseBy
    } = useProduct();

    return (

        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
                {
                    children
                }
            </div>
        </Provider>
    )
}

ProductCart.Title = ProductTitle;
ProductCart.Image = ProductImage;
ProductCart.Buttons = ProductButtons;
