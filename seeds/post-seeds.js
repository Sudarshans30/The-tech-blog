const { Post } = require('../models');

const postData = [
  {
    title: 'chatGPT',
    content: 'ChatGPT is a large language model developed by OpenAI, which is designed .',    
    user_id: 1,
  },

  {
    title: 'Handlebars',
    content: 'Handlebars is a popular templating language for building dynamic web pages and applications. It allows developers to create templates that can be populated with dynamic data and then rendered as HTML pages.',   
    user_id: 3,  
  },
  {
    title: 'React',
    content: 'React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of developers. React allows developers to build reusable UI components and manage the state of an application in a declarative way.',   
    user_id: 2,  
  },


  
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;