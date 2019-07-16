import { getBrandListData , getData , getDetail } from "@/api";
const state={
    brandList: [],
    listData:[],
    DetailData:{},
    list:['全部'],
    index:0,
    getAllData:[]
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
    },
    async getDetail({commit}:any , payload:any){
        console.log(payload)
        let data = await getDetail(payload)
        commit('getDetailData',data.data)
    }
};
const mutations={
    updateBrancList(state:any,params:any){
        state.brandList = params
    },
    getListData(state:any,params:any){
        state.listData=params
    },
    getIndex(state:any,payload:any){
        console.log( state.DetailData)
        state.index=payload
    },
    getDetailData(state:any,params:any){
        state.DetailData=params
        state.DetailData.list.forEach((item:any)=>{
            state.list.push(item.market_attribute.year)
            var arr=Array.from(new Set(state.list));
            state.list=arr
        })
        state.getAllData=state.DetailData.list
    },
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}

