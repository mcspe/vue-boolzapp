import {contacts} from './db.js';

const {createApp} = Vue;

createApp({
  data(){
    return {
      isInputActive: false,
      contacts,
      isMouseHover: false
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
}).mount('#app');