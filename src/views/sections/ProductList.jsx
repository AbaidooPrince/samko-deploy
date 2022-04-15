import React from 'react'
import SectionTitle from '../../components/custom/SectionTitle'
import TinyTitle from '../../components/custom/TinyTitle'
import ProductItem from '../../components/ProductItem'
const ProductList = () => {
    const items = ['sdks', 'sdsf', 'wqw']
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
        <TinyTitle></TinyTitle>
        <SectionTitle></SectionTitle>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-8 place-content-center mt-12'>
                { items.length &&
                    items.map(item => 
                        <ProductItem></ProductItem>
                    )
                }

            </div>
        </div>
    )
}

export default ProductList