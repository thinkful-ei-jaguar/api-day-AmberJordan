const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jordan';

const getItems = function(){
  return fetch(`${BASE_URL}/items`);
};


export default {
  getItems
};