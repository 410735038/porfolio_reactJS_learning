import './App.css';
import './Tools/ProgressBar.css';
import './Tools/ProgressBar.js';
import PortfolioContainer from './portfolioContainer/PortfolioContainer.js';
function App() {
  return (
    <div className="App">
      <div className='progress'></div>
      <PortfolioContainer></PortfolioContainer>
    </div>
  );
}

export default App;
