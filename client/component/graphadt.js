import React from 'react';

// import GraphADTComponent from './GraphADTComponent';

class GraphADT extends React.Component {
  static propTypes = {
    vertices: React.PropTypes.PropTypes.object,
    edges: React.PropTypes.object,

  };

  constructor(props) {
    super(props);
    this.state = {
      vertices: props.vertices,
    };
  }

}

export default GraphADT;
