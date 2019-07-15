import { getData } from '@/api/index.ts'
const state={

};
const actions={
   async getList({commit}:any,action:any){
    let data = await getData()
    console.log(data)
   }    
};
const mutations={
   
};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}