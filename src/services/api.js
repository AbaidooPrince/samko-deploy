import axios from "axios"

export const api = () => {
    const baseURL = process.env.REACT_APP_BASE_API_URL
    const authToken = sessionStorage.getItem('samkoAuth')
    return axios.create({
      baseURL: baseURL,
      withCredentials: false,
      headers: {
        Accept: 'Application/json',
        Authorization: authToken ? `Bearer ${authToken}` : null
      }
    })
  }