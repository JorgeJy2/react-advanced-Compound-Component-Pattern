
import { ProductCart as ProductCartHOC } from "./ProductCart";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCartHocProps } from "../interfaces/Interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCart: ProductCartHocProps = Object.assign(ProductCartHOC, {
    Image: ProductImage,
    Buttons: ProductButtons,
    Title: ProductTitle
});

export default ProductCart;
