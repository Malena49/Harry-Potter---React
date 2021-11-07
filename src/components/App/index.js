// == Import
import './styles.css';
import Header from '../Header/Header'
import Body from '../Body/Body';
import HarryPotter from "../data/Data"

// == Composant
const App = () => 
{


 return (
  
  <div className="app">
    <Header />
  <Body data_harry = {HarryPotter}/>
  </div>
);
}
// == Export
export default App;
