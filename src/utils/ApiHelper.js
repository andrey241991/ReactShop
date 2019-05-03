import axios from 'axios';
//const API = 'https://qa-api.wovenlyrugs.com/products?page=1&page_size=16&size=runners&group=Rug';

const instance = axios.create({
    baseURL: 'https://qa-api.wovenlyrugs.com/',
    timeout: 1000,
  });
  const API_PRODUCTS = "products";
  const API_PAGE = 'page'
  const API_PAGE_SIZE = "page_size";
  const API_SIZE = "size";
  const API_GROUP = "group";


export function getProducts(params){
    const {page, size, page_size, group} = params
    return instance.get(`/${API_PRODUCTS}?${API_PAGE}=${page}&${API_PAGE_SIZE}=${size}&${API_SIZE}=${page_size}&${API_GROUP}=${group}`)
    .then(res => {
       return res.data.result.data;
    })
}

export function getPageCount(){
   return instance.get(`/${API_PRODUCTS}?${API_PAGE}=1&${API_PAGE_SIZE}=16&${API_SIZE}=runners&${API_GROUP}=Rug`)
    .then(res => {
        return res.data.result.total_count;
    })
}
