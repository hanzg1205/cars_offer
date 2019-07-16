import request from '@/utils/request';
// 获取首页数据
export function getBrandListData(params:any){
    return request({
        url: 'v2-car-getMasterBrandList.html?_1563176110194',
        method: 'get'
    })
}
export function getData(params:any){
    console.log('12345',params)
     return request({
         url:`http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${params}&_1563193329867`,
         method:'GET'
     })
}
