import './App.css';
import Collection from './Pages/Collection';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from './Pages/Form';

import HostDashboard from './Pages/HostDashboard';
import UpdateTransport from './Pages/Update';
import Update from './Pages/Update';


function App() {
  return (
    <div data-testid="Apptest" className='App' > 
  <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Collection/>}/>
      <Route path="/form" element={<Form/>} />
      <Route path="/HostDashboard" element={<HostDashboard/>} />
      <Route path="/Update" element={<Update/>} />
    </Routes>
  </BrowserRouter>

</> 
</div>
  );
}

export default App;
