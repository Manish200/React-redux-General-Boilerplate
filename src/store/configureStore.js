import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';



const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state'); // For local storage
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      console(e)
    }
  };

  const peristedState = loadState();
  
  const configureStore = createStore(
    rootReducer,
    peristedState,
    applyMiddleware(thunk));
  
  
    store.subscribe(() => {
      saveState(store.getState());
    });

    
export default configureStore;