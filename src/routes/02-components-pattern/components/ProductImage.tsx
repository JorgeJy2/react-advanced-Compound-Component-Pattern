import { useContext } from "react";
import { ProductContext } from "./ProductCart";

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string,
    className?: string,
    style?: React.CSSProperties
}

export const ProductImage = ({ img = '', className, style }: Props) => {
    const { product } = useContext(ProductContext);

    let imgToShow = '';

    if (img)
        imgToShow = img;
    else if (product.img)
        imgToShow = product.img;
    else
        imgToShow = noImage;

    return (
        <img
            src={imgToShow}
            alt='Product'
            style={style}
            className={`${styles.productImg} ${className}`}
        />
    );
}