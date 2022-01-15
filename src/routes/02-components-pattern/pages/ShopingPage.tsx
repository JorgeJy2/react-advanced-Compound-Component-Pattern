import {
    ProductButtons,
    ProductCart,
    ProductImage,
    ProductTitle
} from '../components';

const product = {
    id: '1',
    title: 'Coffee mug - card',
    img: '/coffee-mug.png'

}

export const ShopingPage = () => {
    return (
        <div>
            <h1>Shoping store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}

            >
                <ProductCart product={product}>
                    {/* <h1>hola</h1>
                    <h1>hola</h1> */}
                    <ProductCart.Image />
                    <ProductCart.Title title='Cafe' />
                    <ProductCart.Buttons />


                </ProductCart>

                <ProductCart product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />

                </ProductCart>
            </div>
        </div>
    )
}
