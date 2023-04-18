import {contacts, emojis} from './db.js';

const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
  data(){
    return {
      isInputActive: false,
      contacts,
      selectedContact: 0,
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
    },
    messageTime(message){
      return message.date.substr(11, 5);
    }
  },
  mounted(){
    // console.log(dt.fromFormat('10/01/2020', 'HH.mm dd/MM/yy'));
  }
}).mount('#app');