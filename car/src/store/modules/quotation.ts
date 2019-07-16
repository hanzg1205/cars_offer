import { getDealer } from "@/api";
const state={
    quotationDetails:{} = {},
    dealerList: []
};
const actions={
    async getDealer({commit}:any, params:Object){
        console.log('params...',params);
        let {data} = await getDealer(params);
        console.log('data...',data);
        commit('updateDetail',data.details);
        commit('updateDeler',data.list);
    }
};
const mutations={
    updateDetail(state:any, payload:Object){
        state.quotationDetails = payload;
    },
    updateDeler(state:any, payload:Array<Object>){
        state.dealerList = payload;
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}