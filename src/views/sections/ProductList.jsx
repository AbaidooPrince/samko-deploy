import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/custom/SectionTitle'
import TinyTitle from '../../components/custom/TinyTitle'
import ProductItem from '../../components/ProductItem'
import { getProductsSection } from '../../services/services'
const ProductList = () => {
    const items = ['sdks', 'sdsf', 'wqw']
    const [data, setData] = useState({})
    const [stores, setStores] = useState([])
  
    const getData = () => {
      const response = sessionStorage.getItem('products')
      setData(JSON.parse(response))
    //   setStores(response.attributes.products.data)
    }
    // const getStores = () => {
    //     const response = sessionStorage.getItem('stores')
    //     setStores(JSON.parse(response))
    //   }
    useEffect(() => {
        getProductsSection()
      getData()
    }, [])
    return (
        <div className='container mx-auto'>
            { data.attributes && <div className='text-center'>
        <TinyTitle text={'online store'}></TinyTitle>
        <SectionTitle text={`${data.attributes.title}`}></SectionTitle>
            </div>}

        <div className='grid xl:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-8 place-content-center mt-12'>
                { 
                    items.map(item => 
                        <ProductItem data={item} key={item.id}></ProductItem>
                    )
                }

            </div>
        </div>
    )
}

export default ProductList