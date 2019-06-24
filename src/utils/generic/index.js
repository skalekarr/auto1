export const constructQueryString = (obj = {}) => {
    let queryString = '';
    const keys = Object.keys(obj);
    const len = keys.length;
    if (len) {
        for (let i = 0; i < len; i += 1) {
            if (i === 0) {
                queryString += `?${keys[i]}=${obj[keys[i]]}`;
            } else {
                queryString += `&${keys[i]}=${obj[keys[i]]}`;
            }
        }
    }

    return queryString;
};

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('favourites');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
  }; 
  
  export const saveState = (state) => {
    try {
      const getOldState = loadState();
      const serializedState = JSON.stringify([...getOldState, state]);
      localStorage.setItem('favourites', serializedState);
      return loadState();
    } catch (err) {
      throw err
    }
  };
  
  export const removeState = (state) => {
    try {
      const getOldState = loadState();
      const removeState = getOldState.filter(item => item !== state)
      const serializedState = JSON.stringify(removeState);
      localStorage.setItem('favourites', serializedState);
      return loadState();
    } catch (err) {
      throw err
    }
  };
