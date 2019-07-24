import * as React from 'react';
import './App.less';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
