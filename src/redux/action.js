// src/actions/itemActions.js
export const fetchItemsSuccess = (items) => ({
    type: 'FETCH_ITEMS_SUCCESS',
    payload: items,
  });
  
  export const fetchItems = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const items = await response.json();
        const itemsWithImgSrc = items.map(item => ({
            ...item,
            imgSrc: `https://picsum.photos/200?random=${item.id}`,
          }));
    
          dispatch(fetchItemsSuccess(itemsWithImgSrc));
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
  };
  