import * as React from 'react';
import './App.less';
import AppRouter from './views/routers/index'
class App extends React.Component {
  public render() {
    return (
      
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
