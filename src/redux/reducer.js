// src/reducers/itemReducer.js
// src/reducers/itemReducer.js
const initialState = {
    items: [],
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ITEMS_SUCCESS':
        return {
          ...state,
          items: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default itemReducer;
  
  