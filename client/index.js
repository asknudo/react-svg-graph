import React from 'react';
import ReactDOM from 'react-dom';
import GraphADT from './component/graphadt';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h1>Nudo's React SVG Graph Stomping Ground</h1>
        <GraphADT />
      </div>
      );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
