const Handlebars = require('handlebars');
const moment = require('moment');

Handlebars.registerHelper('formatDate', (dateString)=> {
  // Convert the date string to a Date object
  const date = new Date(dateString);

  // Extract the day, month, and year from the Date object
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  // Construct the formatted date string
  const formattedDate = `${day}/${month}/${year}`;

  // Return the formatted date string
  return formattedDate;
}
)
