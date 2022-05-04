// eda48240a8be403ba43f13ab67e3b6ad

// base url: https://newsapi.org/v2/

// url da api :  everything?q=tesla&from=2022-04-03&sortBy=publishedAt&apiKey=eda48240a8be403ba43f13ab67e3b6ad

// https://newsapi.org/v2
// /top-headlines?country=us&category=business&apiKey=eda48240a8be403ba43f13ab67e3b6ad
// http://servicodados.ibge.gov.br/api/v3/noticias/

import axios from "axios";


const api = axios.create({
    baseURL: 'http://servicodados.ibge.gov.br/api/v3/'
});

export default api;