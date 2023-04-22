const { Comment} = require('../models');
// const moment = require('moment');

const commentData = [
  {
    content:'This is very helpfull for beginners',    
    user_id: 1,
    post_id: 1,
  
  },
  {
    content:'This is very helpfull for beginners',  
    user_id: 2,
    post_id: 2,
  
  },
  {
    content:'Great work!',  
    user_id: 2,
    post_id: 1,
  
  },
  
]
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;