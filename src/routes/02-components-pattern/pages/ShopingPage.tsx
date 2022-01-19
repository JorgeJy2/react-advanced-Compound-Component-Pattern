import {
    ProductButtons,
    ProductCart,
    ProductImage,
    ProductTitle
} from '../components';

import '../styles/custom-style.css';

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
                <ProductCart product={product} className='bg-dark'>
                    <ProductCart.Image className='custom-image' />
                    <ProductCart.Title title='Cafe' className='text-white' />
                    <ProductCart.Buttons className='custom-buttons' />
                </ProductCart>

                <ProductCart product={product} 
                className='bg-dark'>
                    <ProductImage className='custom-image'  />
                    <ProductTitle className='text-white'/>
                    <ProductButtons className='custom-buttons'/>
                </ProductCart>


                <ProductCart product={product} 
                 style={{backgroundColor: '#70D1F8'}}>
                    <ProductImage className='custom-image'
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                     />
                    <ProductTitle className='text-white' style={{
                        fontWeight:  'bold'
                    }}/>
                    <ProductButtons className='custom-buttons' style={ {
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCart>
            </div>
        </div>
    )
}
