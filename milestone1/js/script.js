import {contacts, emojis} from './db.js';

const {createApp} = Vue;

createApp({
  data(){
    return {
      isInputActive: false,
      contacts,
      isMouseHover: false,
      emojis,
      emojiClicked: false,
      messageText: ''
    }
  },
  methods:{
    addEmoji(emoji) {
      this.messageText += emoji;
      const input = document.querySelector('.text-area>input');
      input.focus();
    }
  },
  mounted(){
    
  }
}).mount('#app');