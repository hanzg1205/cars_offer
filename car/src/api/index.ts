import request from '@/utils/request';
// 获取首页数据
export function getBrandListData(params:any){
    return request({
        url: 'v2-car-getMasterBrandList.html?_1563176110194',
        method: 'get'
    })
}
//滑块数据
export function getData(params:any){
    console.log('12345',params)
     return request({
         url:`http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${params}&_1563193329867`,
         method:'GET'
     })
}
//汽车详情数据
export function getDetail(params:any){
    return request({
        url:`http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${params}&_1563248063080`,
        method:'GET'
    })
}