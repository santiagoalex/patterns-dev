class ChatRoom {
  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time}  [${sender}]:  ${message} `);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User(" Alejandro ", chatroom);

const user2 = new User(" Camila ", chatroom);

user1.send("Hola, ¿como estas?");
user2.send("Muy bien, y tu ¿ćomo te encuentras?");
