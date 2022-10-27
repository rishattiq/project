import './App.css';
import Collection from './Pages/Collection';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from './Pages/Form';


function App() {
  return (
  <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Collection/>}/>
      <Route path="/form" element={<Form/>} />
    </Routes>
  </BrowserRouter>
</> 
  );
}

export default App;
