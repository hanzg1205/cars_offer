import { getImage, getColor, getCategoryImageList, getItem , getColorData } from "@/api";
const state={
    imgTypeList: [], // 图片列表
    colorList: [], // 颜色列表
    imgAllList: [] //某个类型下所有图片
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
        // console.log("color...",color);
        commit("updateColor",color.data)
    },
    // 获取某个类型下所有图片
    async getCategoryImageList({commit}:any, params:any){
        let imgList = await getCategoryImageList(params);
        console.log('imgList...00',imgList);
        commit("updateImgList",imgList.data.List)
    },
    //点击车款
    async getItemType({commit}:any,payload:any){
        let data = await getItem(payload)
        commit('updateImage',data.data)
    },
    async getColorItem({commit}:any,payload:any){
        let data = await getColorData(payload)
        commit('updateImage',data.data)
    }
};
const mutations={
    updateImage(state:any,params:any){
        state.imgTypeList = params;
    },
    updateColor(state:any,params:any){
        state.colorList = params;
    },
    updateImgList(state:any,params:any){
        state.imgAllList = params;
    }

};
export default{
    namespaced: true,
    state,
    actions,
    mutations
}