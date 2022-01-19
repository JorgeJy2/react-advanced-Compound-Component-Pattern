import { Props as ButtonsProductCartProps} from "../components/ProductButtons";
import { Props as ProductCartProps } from "../components/ProductCart";
import { Props as ImageProductCartProps} from "../components/ProductImage";
import { Props as TitleProductCartProps } from "../components/ProductTitle";


export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ProductContextProps {
    increaseBy: (value: number) => void,
    counter: number,
    product: Product
}

export interface ProductCartHocProps {
    (Props: ProductCartProps): JSX.Element;
    Title:   (Props: TitleProductCartProps)     => JSX.Element;
    Image:   (Props: ImageProductCartProps)     => JSX.Element;
    Buttons: (Props: ButtonsProductCartProps)   => JSX.Element;
}