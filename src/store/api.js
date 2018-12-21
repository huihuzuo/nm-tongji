import axios from "axios"


//获取导航navList
export const loadNavList = (val) => {
  return axios.get(`/static/json/${val}.json`, {
    baseURL: ''
  })
}

//获取交通流量下的维度weidulist
export const loadWeiduList = (val) => {
  return axios.get(`/static/json/${val}.json`, {
    baseUrl: ''
  })
}

//获取交通事件下的维度weidulist2
export const loadWeiduList2 = (val) => {
  return axios.get(`/static/json/${val}.json`, {
    baseUrl: ''
  })
}

//获取indexRanking
export const loadIndexRanking = (val) => {
    return axios.get(`/static/json/${val}.json`,{
      baseUrl: ''
 })
}


