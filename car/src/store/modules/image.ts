import { getImage, getColor } from "@/api";
const state={
    imgTypeList: [], // 图片列表
    colorList: [], // 颜色列表
};
const actions={
    // 获取图片
    async getImage({commit}:any, params:any){
        let image = await getImage(params);
        // console.log(image,"00....");
        commit('updateImage',image.data)
    },
    // 获取颜色
    async getColor({commit}:any, params:any){
        let color = await getColor(params);
        console.log("color...",color);
        commit("updateColor",color.data)
    }
};
const mutations={
    updateImage(state:any,params:any){
        state.imgTypeList = params;
    },
    updateColor(state:any,params:any){
        state.colorList = params;
    }

};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}