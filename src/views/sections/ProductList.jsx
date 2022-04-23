import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/custom/SectionTitle'
import TinyTitle from '../../components/custom/TinyTitle'
import ProductItem from '../../components/ProductItem'
import { getProductsSection } from '../../services/services'
// import { getProductsSection } from '../../services/services'
const ProductList = () => {
   
    const [data, setData] = useState({})
    const [stores, setStores] = useState({})
  console.log(data)
    const getData = () => {
      getProductsSection()
      const response = sessionStorage.getItem('products')
      setData(JSON.parse(response))
    //   setStores(response.attributes.products.data)
    }
    const getStores = () => {
        const response = sessionStorage.getItem('stores')
        setStores(JSON.parse(response))
      }
    useEffect(() => {
        getData()
        getStores()
    }, [])
    return (
        <div className='container mx-auto'>
            { data.attributes && <div className='text-center'>
        <TinyTitle text={'online store'}></TinyTitle>
        <SectionTitle text={`${data.attributes.title}`}></SectionTitle>
            </div>}

        <div className='grid xl:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-8 place-content-center mt-12'>
                { data.attributes &&
                    stores.map(item => 
                        <ProductItem data={item} 
                        item={item.attributes.item}
                        description={item.attributes.description}
                        price={item.attributes.price}
                        image={item.attributes.image.data.attributes.url}
                        key={item.id}>

                        </ProductItem>
                    )
                }

            </div>
        </div>
    )
}

export default ProductList