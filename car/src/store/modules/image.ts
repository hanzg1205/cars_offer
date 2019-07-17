import { getImage } from "@/api";
const state={
    imgTypeList: []
};
const actions={
    async getImage({commit}:any, params:any){
        let image = await getImage(params);
        console.log(image,"00....");
        commit('updateImage',image.data)
    }
};
const mutations={
    updateImage(state:any,params:any){
        state.imgTypeList = params;
    }

};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}