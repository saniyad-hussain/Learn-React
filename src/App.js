import React from 'react';
import './App.css';
import Todos from './components/Todos';
 
class App extends React.Component {
  state = {
    todos: [
    {
      id: 1,
      title: 'Go to office',
      complete: false,
    },
    {
      id: 3,
      title: 'Go to Park',
      complete: false,
    },
    {
      id: 3,
      title: 'Go to Bed',
      complete: false,
    },
    {
      id: 4,
      title: 'Go mosque',
      complete: true,
      
    }

  ]
}
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
