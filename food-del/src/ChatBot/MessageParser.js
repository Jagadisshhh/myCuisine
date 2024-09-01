import React from 'react';

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const regexMap = {
        hello: /hello|hi|good morning|good evening|good afternoon|hola/i,
        salad: /salad|leaf|green|lettuce|healthy/i,
        rolls: /rolls?|wrap|spring roll|burrito/i,
        desserts: /dessert|sweet|cake|ice cream|pudding/i,
        sandwich: /sandwich|sub|bread/i,
        cake: /cake|cupcake|pastry/i,
        pureVeg: /pure veg|vegetarian|no meat|no chicken|no beef/i,
        pasta: /pasta|spaghetti|penne|fettuccine/i,
        noodles: /noodles?|ramen|lo mein|spaghetti/i,
        spicy: /spicy|hot|flaming/i
      };
  
      for (const [key, regex] of Object.entries(regexMap)) {
        if (regex.test(message)) {
          this.actionProvider.handleResponse(key);
          return;
        }
      }
      this.actionProvider.handleUnknown();
    }
  }
  
  export default MessageParser;
  