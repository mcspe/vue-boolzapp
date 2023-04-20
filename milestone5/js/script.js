import {contacts, emojis, answers} from './db.js';

const {createApp} = Vue;
const dt = luxon.DateTime;

createApp({
  data(){
    return {
      isInputActive: false,
      searchBar: '',
      contacts,
      selectedContact: 0,
      isMouseHover: false,
      isMessageID: null,
      chevronClicked: false,
      emojis,
      emojiClicked: false,
      messageText: '',
      answers
    }
  },
  methods:{
    addEmoji(emoji) {
      this.messageText += emoji;
      const input = document.querySelector('.text-area>input');
      input.focus();
    },
    messagePreview(messages) {
      if (messages.length > 0) {
        if (messages[messages.length - 1].message.length > 39) {
        const newStr = messages[messages.length - 1].message.substr(0, 39) + '...';
        return newStr;
        } else {
        return messages[messages.length - 1].message;
        }
      }  else return 'Non ci sono messaggi. Invia un messaggio...';
    },
    messageTime(messages) {
      if (messages.length > 0) {
        return messages[messages.length - 1].date.substr(11, 5);
      }
    },
    messageTimeConv(message) {
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
        this.getReply(contact);
      }
    },
    getReply(contact) {
      setTimeout(() => {
        const newMsgObj = {
          date: dt.now().toFormat('dd/MM/yyyy HH:mm:ss'),
          message: this.answers[Math.floor(Math.random() * (this.answers.length - 1))],
          status: 'received'
        }
        this.contacts[contact].messages.push(newMsgObj);
      }, 2000);
    },
    deleteMsg(index) {
      if (this.contacts[this.selectedContact].messages.length === 1) {
        this.contacts[this.selectedContact].visible = false;
        this.contacts[this.selectedContact].messages.splice(index, 1);
      } else {
        this.contacts[this.selectedContact].messages.splice(index, 1);
      }
      
    },
    displayContacts(){
      this.contacts.forEach(contact => {
        contact.visible = contact.name.toLowerCase().includes(this.searchBar.toLowerCase()); 
      });
    }
  },
  mounted(){
    //console.log(this.contacts[0].messages[0].message.length);
  }
}).mount('#app');