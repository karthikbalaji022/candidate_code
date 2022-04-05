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
  function reducer(reducerstate,action)
  {
    switch(action.type){
      case 'SearchChange':
        return{
          inputText:action.data
        };
        default:
          return reducerstate;
    }
  }
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div style={{width:"100%",height:"100vh",display: "flex",overflow: "hidden"}}>
     <Nav />
     <div style={{flex: "96%",width:"100vw",height: "100%"}}>
     <AppContext.Provider value={{state,dispatch}}>
      <Head />
      <Activity/>
      <CandidateStatus />
      </AppContext.Provider>
     </div>
    </div>
  );}
export default App;
