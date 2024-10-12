import { BrowserRouter } from "react-router-dom" //used for routing
import { About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary"> 
        3D Developer Portfolio
      </div>
    </BrowserRouter>
      
  )
}

export default App
