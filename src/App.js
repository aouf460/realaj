import './App.css';
import Background from '../src/assets/background.png'
import Cycle1 from '../src/assets/Cycle Image 3.png'
import Cycle2 from '../src/assets/Cycle Image 2.png'
import Navbar from './components/navbar/Navbar';
import Specs from './components/specs/Specs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Specs />
      <div className="container">

        <div className="details">
          <div className="title">
         <p> Take Over the Streets,
          <br/><span>Silently</span>.</p>
          </div>
          <div className="info">
          Join the revolution to make a difference for <br/> your life and the environment.

          </div>
          </div>
        
        <div className="right-rec"> 
              <div className="cycles">
                  <div className="cycle1">
                    <img src={Cycle1} />
                </div>

                <div className="cycle2">
                    <img src={Cycle2} />
              </div>
          </div>
      </div>

</div>

   
    </div>
  );
}

export default App;
