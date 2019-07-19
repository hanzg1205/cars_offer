import { getBrandListData , getData , getDetail } from "@/api";
const state={
    listData:[],
    DetailData:{},
    list:['全部'],
    index:0,
    getAllData:[],
    brandList: {},
    letterList: [],
    cid:[]
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
    updateLetterList(state:any,params:any){
        state.letterList = params
    },
    getListData(state:any,params:any){
        state.listData=params
    },
    getIndex(state:any,payload:any){
        state.index=payload
        if(state.index){
            state.getAllData={list:[]}
            state.DetailData.list.forEach((item:any)=>{
               if(item.market_attribute.year==state.list[state.index]){
                state.getAllData.list.push(item)
               }
            })
        }else{
            let obj:any={}
            console.log(state.DetailData)
            state.DetailData.list&&state.DetailData.list.forEach((item:any)=>{
                let a = item.max_power_str||'其他';
                if(obj[a]){
                    obj[a].push(item)
                }else{
                    obj[a]=[item]
                }
             })
            state.getAllData=obj
            state.cid=state.getAllData
            console.log(state.cid)
        }
    },
    getDetailData(state:any,params:any){
        state.DetailData=params
        let obj:any={}
        state.DetailData.list.forEach((item:any)=>{
           state.list==1
            state.list.push(item.market_attribute.year)
            var arr=Array.from(new Set(state.list));
            state.list=arr
            let a = item.max_power_str||'其他';
            if(obj[a]){
                obj[a].push(item)
            }else{
                obj[a]=[item]
            }
        })
        state.getAllData=obj
        let arr=[]
        for(let i in state.getAllData){
            arr.push(state.getAllData[i][0])
            state.cid=arr[0]
        }
    },
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}