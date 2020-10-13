<template>
  <section class="user-msg" v-show="msg">
    <p>{{msg}}</p>
    <button @click="closeMsg">x</button>
  </section>
</template>

<script>
import eventBus from '@/services/eventBus.js';

export default {
  data() {
    return {
      msg: '',
    };
  },
  created() {
    eventBus.$on('showMsg', (msg) => {
      this.msg = msg;
      setTimeout(() => {
        this.msg = '';
        eventBus.$off('showMsg');
      }, 4000);
    });
  },
  methods:{
    closeMsg(){
      this.msg = '';
      eventBus.$off('showMsg');
    }
  },
  destroyed() {
    eventBus.$off('showMsg');
  },
};
</script>
