import './App.scss';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
