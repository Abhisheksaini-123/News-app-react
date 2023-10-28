import News from './Component/News';
import Navbar from './Component/Navbar';
function App() {
  
  return (
    <div>
      <Navbar/>
      <News pagesize={5} country="in" category="general" />
      
      
    </div>
  );
}

export default App;

