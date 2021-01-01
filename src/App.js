import React, { Component } from 'react';
import './App.scss';
import Header from './Component/Header/Header';
import Aside from './Component/Sidebar/Aside';
import MainContent from './Component/MainContent/MainContent';
import ResponsiveSidebar from './Component/Sidebar/ResponsiveSidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarHidden: true,
    };
  }

  toggleStatus = () => {
    const { sidebarHidden } = this.state;
    this.setState({ sidebarHidden: !sidebarHidden });
    console.log(sidebarHidden);
  }

  render() {
    const { sidebarHidden } = this.state;
    return (
      <div className="App" >
        <Header toggleShowStatus={this.toggleStatus} />
        <div className="main-container">
          <Aside />
          <MainContent />
          <ResponsiveSidebar hide={sidebarHidden} click={this.toggleStatus} />
        </div>
      </div>
    );
  }
}

export default App;
