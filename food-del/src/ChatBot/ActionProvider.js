import React from 'react';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleResponse = (key) => {
      const responses = {
        // hello: 'Hii, welcome to myCuisine, Im your Cuisine Genie, what mood your tummy is in for today?',
        salad: 'How about a fresh Salad? We have several options like Caesar Salad and Garden Salad,check out salad section.',
        rolls: 'You might enjoy our Rolls, including Spring Rolls and Veg Rolls, check out rolls section.',
        desserts: 'If you are looking for something sweet, check out our Desserts like Cake, Ice Cream or check our desserts section.',
        sandwich: 'How about a Sandwich? We have several varieties including chicken sandwich or veg sandwich,check out Sandwich section.',
        cake: 'We have delicious Cakes available, including Cupcakes and Pastries, check out Cakes section.',
        pureVeg: 'For Pure Veg options, we recommend our Vegetarian Dishes like veg soup, veg chowmein, check out Pure Veg section.',
        pasta: 'We have a variety of Pasta dishes such as Spaghetti, Penne, and Fettuccine,check out Pasta section.',
        noodles: 'How about trying some Noodles? We offer Ramen, Lo Mein, and Spaghetti,check out Noodles section.',
        spicy: 'We have a couple of options for your choice of taste,you can check out Rolls or Noodles section.'
      };
  
      const message = this.createChatBotMessage(responses[key]);
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  
    handleUnknown = () => {
      const message = this.createChatBotMessage("I'm not sure what you're looking for. Could you please specify more?");
      
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  