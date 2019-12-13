const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jordan';

function listApiFetch(...args){
    let error;
    return fetch(...args)
     .then(res => {
         if (!res.ok){
             console.error = {code: res.status};
         if (!res('content-type').includes('json')){
             error.message = res.statusText;
             return Promise.reject(error);
         }
             
         }
         return res.json();
     })

     .then(data -> {
         if(error){
             error.message = data.message;
             return Promise.reject(error);
         }
         return data;
     })
    
}

const getItems = function(){
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name){
    let newItem = JSON.stringify({name});
    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newItem
});
};
const updateItem = function(id, updateData){
    let updateDataString = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: updateDataString
    });
};

const deleteItem = function(id){
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });
};
    
    



export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};