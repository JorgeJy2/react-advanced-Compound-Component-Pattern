
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/Interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

import { ReactElement } from "react";

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties
}

export const ProductContext = createContext({

} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductCart = ({ children, product , className, style}: Props) => {
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
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}>
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
