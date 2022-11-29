
import './App.css';

import LeftPanel from './components/LeftPanel'

import Login from './components/Login'

import PhotoGrid1 from './components/PhotoGrid1';

import Footer from './components/Footer'


function App() {
  
			return (
              <div className="w3-light-grey w3-content" style={{maxWidth:'1600px'}}>
                   <LeftPanel/>
                   <Login/>
                   <PhotoGrid1/>
                   <Footer/>
                </div>
			  );
}

export default App;
