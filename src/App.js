import './App.scss';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import MainContent from './Component/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
