import request from '@/utils/request';
// 获取首页数据
export function getBrandListData(params:any){
    return request({
        url: 'v2-car-getMasterBrandList.html',
        method: 'get'
    })
}
//滑块数据
export function getData(params:any){
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
// 询问底价
export function getDealer(params:any){
    return request({
        url: 'v2-dealer-alllist.html',
        method: 'get',
        params: params
    })
}

// 获取省份
export function getProvince(params:any){
    return request({
        url: 'v1-city-alllist.html',
        method: 'get'
    })
}
// 市
export function getCity(params:any){
    return request({
        url: 'v1-city-alllist.html',
        method: 'get',
        params
    })
}

// 获取图片
export function getImage(params:any){
    return request({
        url: 'v2-car-getImageList.html',
        method: 'get',
        params
    })
}

// 获取颜色 
export function getColor(params:any){
    return request({
        url: 'v2-car-getModelImageYearColor.html',
        method: 'get',
        params
    })
}

// 获取某个类型下所有图片
export function getCategoryImageList(params:any){
    return request({
        url: 'v2-car-getCategoryImageList.html',
        method: 'get',
        params
    })
}
export function getItem(params:any){
    if(params.CarID&&params.SerialID){
        return request({
            url:`http://baojia.chelun.com/v2-car-getImageList.html?SerialID=${params.SerialID}&CarID=${params.CarID}&_1563455975168`,
            method:'GET'
        })
    }else{
        return request({
            url:`http://baojia.chelun.com/v2-car-getImageList.html?SerialID=${params.SerialID}&_1563455975168`,
            method:'GET'
        })
    }
}

export function getColorData(params:any){
    if(params.color&&params.SerialID){
        return request({
            url:`http://baojia.chelun.com/v2-car-getImageList.html?SerialID=${params.SerialID}&ColorID=${params.color}&_1563466446099`,
            method:'GET'
        })
    }else{
        return request({
            url:`http://baojia.chelun.com/v2-car-getImageList.html?SerialID=${params.SerialID}&_1563467528587`,
            method:'GET'
        })
    }
}
