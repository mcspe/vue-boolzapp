import {contacts, emojis} from './db.js';

const {createApp} = Vue;

createApp({
  data(){
    return {
      isInputActive: false,
      contacts,
      isMouseHover: false,
      emojis,
      emojiClicked: false
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
}).mount('#app');