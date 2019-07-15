import vue from 'vue';
import vuex from 'vuex';
import index from './modules/index';

vue.use(vuex);

let store = new vuex.Store({
  modules: {
    index
  }
});
export default store;
