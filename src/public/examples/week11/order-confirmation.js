/* Get the customer first and last name and generate a thank-you message that includes their name */

const paramString = window.location.search;
const params = new URLSearchParams(paramString);
const firstName = params.get('firstName');
const lastName = params.get('lastName');

document.getElementById('thankYouMessage').innerHTML = `Thank you, ${firstName} ${lastName}!`