import { getDealer, getProvince, getCity } from "@/api";
const state={
    quotationDetails:{} = {},
    dealerList: [], // 报价经销商列表
    provinceList: [], //省份数据
    cityList: [], // 市数据
};
const actions={
    async getDealer({commit}:any, params:Object){
        // console.log('params...',params);
        let {data} = await getDealer(params);
        // console.log('data...',data);
        commit('updateDetail',data.details);
        data.list.forEach((item:any,index:Number)=>{
            if(index < 3){
                item.flag = true;
            }else{
                item.flag = false;
            }
        })
        commit('updateDeler',data.list);
    },
    // 获取省份
    async getProvince({commit}:any, params:any){
        let province = await getProvince(params);
        // console.log('province...',province);
        commit('updateProvince',province.data)
    },
     // 获取市
     async getCity({commit}:any, params:any){
        let city = await getCity(params);
        // console.log('city...',city);
        commit('updateCity',city.data)
    }
};
const mutations={
    updateDetail(state:any, payload:Object){
        state.quotationDetails = payload;
    },
    updateDeler(state:any, payload:Array<Object>){
        state.dealerList = payload;
        console.log(state.dealerList)
    },
    // 省份
    updateProvince(state:any, payload:Array<Object>){
        state.provinceList = payload;
    },
    // 市
    updateCity(state:any, payload:Array<Object>){
        state.cityList = payload;
    }

};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}