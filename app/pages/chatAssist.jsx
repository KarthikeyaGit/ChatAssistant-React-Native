import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';




const ChatAssist = () => {
  const welcomeMessages = [
    "Hi there! Welcome to our chatbot. How can I assist you today?",
    "Welcome! I'm here to help you with anything you need. Just let me know how I can assist you.",
    "Hello and welcome! I'm your friendly chatbot. How may I be of service to you today?",
    "Greetings! Thanks for choosing to chat with me. Let me know how I can help you.",
    "It's great to have you here! I'm ready to help you with anything you need. What can I assist you with?",
    "Welcome to our chatbot. I'm here to answer any questions you have and provide you with the information you need.",
    "Hi there! I'm excited to chat with you today. Let's get started, what can I help you with?",
    "Good day! I'm your personal chatbot. What can I do for you today?",
    "Welcome, welcome! I'm here to make your life easier. Just tell me what you need.",
    "Hello and welcome to our chatbot. Let me know how I can assist you today."
  ];
  const [messages, setMessages] = useState([  {    text: welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)],
    user: {
      _id: 0,
    },
    createdAt: new Date(),
  },
]);


  console.log("messages", messages);
  const [inputText, setInputText] = useState('');

  

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        text: inputText.trim(),
        user: {
          _id: 1,
          name: 'John Doe',
        },
        createdAt: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText('');
      setTimeout(() => { 
        
        setMessages((prevMessages) => [...prevMessages, { text: welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)],
          user: {
            _id: 0,
          },
          createdAt: new Date(),
        }]);

      },1000)
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.messageContainer, message.user._id === 1 ? styles.myMessage : styles.otherMessage]}>
            <Text style={[styles.messageText, message.user._id === 1 ? styles.myMessageText : styles.otherMessageText]}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
  },
  messageText: {
    fontSize: 16,
  },
  myMessageText: {
    color: '#000',
  },
  otherMessageText: {
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChatAssist;
