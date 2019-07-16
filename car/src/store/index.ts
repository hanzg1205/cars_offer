import vue from 'vue';
import vuex from 'vuex';
import index from './modules/index';
import quotation from './modules/quotation';


vue.use(vuex);

let store = new vuex.Store({
  modules: {
    index,
    quotation
  }
});
export default store;
