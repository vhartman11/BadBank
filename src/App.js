import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import {AllData} from './alldata'
import { UserContext } from './context';
import {NavBar} from './navbar'
import {Home} from './home'
import {CreateAccount} from './createaccount'
import {Deposit} from './deposit'
import {Withdraw} from './withdraw'

function App() {
  return (
    <HashRouter>
    <UserContext.Provider value={{currentAccount: 0, users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100},{name:'dsd',email:'fds@mit.edu',password:'secret',balance:1000000}]}}>
      <NavBar/>
      
        <div className="container" style={{padding: "20px"}}>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/CreateAccount/" element={<CreateAccount/>} />
          <Route path="/deposit/" element={<Deposit/>} />
          <Route path="/withdraw/" element={<Withdraw/>} />
          <Route path="/alldata/" element={<AllData/>} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;