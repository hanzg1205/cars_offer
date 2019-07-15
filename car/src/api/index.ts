import request from '@/utils/request.ts'
export function getData(){
     return request({
         url:'http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=92&_1563193329867',
         method:'GET'
     })
}