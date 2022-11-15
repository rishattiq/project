import './App.css';
import Collection from './Pages/Collection';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from './Pages/Form';
import HostDashboard from './Pages/HostDashboard';


function App() {
  return (
  <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Collection/>}/>
      <Route path="/form" element={<Form/>} />
      <Route path="//HostDashboard" element={<HostDashboard/>} />
    </Routes>
  </BrowserRouter>
</> 
  );
}

export default App;
