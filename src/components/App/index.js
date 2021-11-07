// == Import
import './styles.css';
import Header from '../Header/Header'
import Body from '../Body/Body';
import HarryPotter from "../data/Data"
import Footer from '../Footer/Footer';
// == Composant
const App = () => 
{


 return (
  
  <div className="app">
    <Header />
  <Body data_harry = {HarryPotter}/>
  <Footer />
  </div>
);
}
// == Export
export default App;
