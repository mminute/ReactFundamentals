import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render(){
    return <h1>{this.props.txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text'
}

ReactDOM.render(
  <App txt="this is the props value" />,
  document.getElementById('app')
);