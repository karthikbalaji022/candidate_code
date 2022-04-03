import './App.css';
import Nav from './components/Navbar'
import Head from './components/Head';
import Activity from './components/Activity';
import CandidateStatus from './components/CandidateStatus'
import React,{useReducer} from 'react';

export const AppContext=React.createContext();
function App() {
  const initialState={
    inputText:'',
  };
  function reducer(state,action)
  {
    switch(action.type){
      case 'SearchChange':
        return{
          inputText:action.data
        };
        default:
          return state;
    }
  }
  const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div className="AppContainer">
     <Nav />
     <div className='rightContent'>
     <AppContext.Provider value={{state,dispatch}}>
      <Head />
      <Activity/>
      <CandidateStatus />
      </AppContext.Provider>
     </div>
    </div>
  );
}

export default App;
