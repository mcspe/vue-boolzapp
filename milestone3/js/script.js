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
    messageTime(message) {
      return message.date.substr(11, 5);
    },
    newMessage(contact) {
      if (this.messageText != '') {
        const newMsgObj = {
          date: dt.now().toFormat('dd/MM/yyyy HH:mm:ss'),
          message: this.messageText,
          status: 'sent'
        }
        this.messageText = '';
        this.contacts[contact].messages.push(newMsgObj);
      }
    }
  },
  mounted(){
    console.log(dt.now().toFormat('dd/MM/yyyy HH:mm:ss'));
  }
}).mount('#app');