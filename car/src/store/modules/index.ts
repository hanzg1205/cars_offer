import { getBrandListData , getData } from "@/api";
const state={
    brandList: [],
    listData:[]
};
const actions={
    async getBrandList({commit}:any,params:any){
        let data:any = await getBrandListData(params);
        // console.log('data...',data.data);
        let obj:any = {};
        data.data.forEach((item:any) => {
            let key = item.Spelling.slice(0,1);
            obj[key] = [];   
        })
        for(let key in obj){
            data.data.forEach((item:any) => {
                let i = item.Spelling.slice(0,1);
                if(key == i){
                    obj[key].push(item);
                } 
            })
        }
        console.log('obj...',obj);
        commit('updateBrancList',obj)
    },
    async getList({commit}:any,action:any){
        console.log('action...',action)
        let data = await getData(action)
        console.log('data',data)
        commit('getListData',data)
    }    
};
const mutations={
    updateBrancList(state:any,params:any){
        state.brandList = params
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