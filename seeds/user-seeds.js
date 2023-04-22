const { User } = require('../models');
const bcrypt = require('bcrypt');


const userData = [
  {
    username: 'Alex',    
    email:'alex@gmail.com',
    password:`${bcrypt.hashSync("Alex12345", 10)}`,        
  },
  {
    username: 'Sam',    
    email:'Sam@s.com',
    password:`${bcrypt.hashSync("pass12345", 10)}`,
  },
  {
    username: 'Ash',    
    email:'ash@w.com',
    password:`${bcrypt.hashSync('pass12345', 10)}`,
  },
  {
    username: 'Bob',    
    email:'bob@job.com',
    password:`${bcrypt.hashSync('pass12345', 10)}`,
  },
 
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;