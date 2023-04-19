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
    messagePreview(message) {
      if (message.length > 39) {
        const newStr = message.substr(0, 39) + '...';
        return newStr;
      } else {
        return message;
      }
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
    }
  },
  computed: {
    displayedContacts(){
      this.contacts.forEach(contact => {
        contact.visible = contact.name.toLowerCase().includes(this.searchBar.toLowerCase()); 
      });
      const contactsList = this.contacts.filter(contact => contact.visible);
      console.log(contactsList);
      return contactsList;
    }
  },
  mounted(){
    console.log(this.contacts[0].messages[0].message.length);
  }
}).mount('#app');