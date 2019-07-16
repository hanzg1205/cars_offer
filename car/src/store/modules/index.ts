import { getBrandListData , getData } from "@/api";
const state={
    brandList: {},
    letterList: [],
    listData:[]
};
const actions={
    async getBrandList({commit}:any,params:any){
        let data:any = await getBrandListData(params);
        // 格式化数据
        let obj:any = {};
        data.data.forEach((item:any) => {
            let key = item.Spelling[0];
            if(obj[key]){
                obj[key].push(item);
            }else{
                obj[key] = [item]
            }
        })  
        console.log('obj...',obj);
        commit('updateBrancList',obj);
        // 获取楼层数据
        let keyData = Object.keys(obj);
        commit('updateLetterList',keyData);

    },
    async getList({commit}:any,action:any){
        let data = await getData(action)
        commit('getListData',data)
    }    
};
const mutations={
    updateBrancList(state:any,params:any){
        state.brandList = params
    },
    updateLetterList(state:any,params:any){
        state.letterList = params
    },
    getListData(state:any,params:any){
        state.listData=params
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}