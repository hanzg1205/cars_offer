import { getBrandListData } from "@/api";
const state={
    brandList: []
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
    }
};
const mutations={
    updateBrancList(state:any,params:any){
        state.brandList = params
    }
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}