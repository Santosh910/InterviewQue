// import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Homepage from './Components/Homepage';
// import Login from './Components/Login';
// import Todo from './Components/Todo';
// import ReactList from './Components/ReactList';
// import Counter from './Components/Counter';
// import Toggle from './Components/Toggle';





function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/todo' element={<Todo />} />
        {/* <Route exact path='/toggle' element={<Toggle />} /> */}
        {/* <Route exact path='/react-list' element={<ReactList />} />
        <Route exact path='/counter' element={<Counter />} /> */}
      </Routes>
    </div>
  );
}

export default App;
