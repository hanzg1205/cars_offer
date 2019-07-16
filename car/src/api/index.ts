import request from '@/utils/request';
// 获取首页数据
export function getBrandListData(params:any){
    return request({
        url: 'v2-car-getMasterBrandList.html',
        method: 'get'
    })
}
export function getData(params:any){
     return request({
         url:`http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${params}&_1563193329867`,
         method:'GET'
     })
}

// 询问底价
export function getDealer(params:any){
    return request({
        url: 'v2-dealer-alllist.html',
        method: 'get',
        params: params
    })
}