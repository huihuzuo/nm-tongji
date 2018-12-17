import axios from "axios"


//获取导航navList
export const loadNavList = (val) => {
  return axios.get(`/static/json/${val}.json`, {
    baseURL: ''
  })
}

//获取维度weidulist
export const loadWeiduList = (val) => {
  return axios.get(`/static/json/${val}.json`, {
    baseUrl: ''
  })
}
