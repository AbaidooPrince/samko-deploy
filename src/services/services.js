import { api } from './api'

const getAboutSection = async () => {
    try {
        const response = await api().get('/about-section?populate=*')
        if (response.status === 200) {
            console.log(response.data.data)
            sessionStorage.setItem('about', JSON.stringify(response.data.data))
            return response.data.data
        }
    } catch (e) {

    }
}
const getModernSection = async () => {
    try {
        const response = await api().get('/morden-section?populate=*')
        if (response.status === 200) {
            console.log(response.data.data)
            sessionStorage.setItem('morden', JSON.stringify(response.data.data))
            return response.data.data
        }
    } catch (e) {

    }
}
const getSliders = async () => {
    try {
        const response = await api().get('/sliders?populate=*')
        if (response.status === 200) {
            console.log(response.data.data)
            sessionStorage.setItem('sliders', JSON.stringify(response.data.data))
            return response.data.data
        }
    } catch (e) {

    }
}

const getProductsSection = async () => {
    try {
        const response = await api().get('/product-section?populate=*')
        if (response.status === 200) {
            console.log(response.data.data)
            sessionStorage.setItem('products', JSON.stringify(response.data.data))
            return response.data.data
        }
    } catch (e) {

    }
}
const getStores = async () => {
    try {
        const response = await api().get('/products?populate=*')
        if (response.status === 200) {
            console.log(response.data.data)
            sessionStorage.setItem('stores', JSON.stringify(response.data.data))
            return response.data.data
        }
    } catch (e) {

    }
}

export {
    getAboutSection,
    getModernSection,
    getProductsSection,
    getStores,
    getSliders
}