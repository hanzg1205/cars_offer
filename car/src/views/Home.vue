<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>


<script lang="ts">
import { mapState , mapActions } from 'vuex'
import Vue from 'vue'
// import { Component, Vue } from 'vue-property？-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


  
export default Vue.extend({
  created(){
    this.getList();
  },
  methods:{
    ...mapActions({
      getList:'index/getList'
    })
  }
})
</script>
