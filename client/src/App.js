import React from 'react';
import './App.css';
//import MainLayout from "./components/layout/MainLayout/MainLayout";

class App extends React.Component {

  state = {
    product: [],
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/home')
        .then(res => res.json())
        .then(res => {
          this.setState({ product: res });
        });
  }

  render() {
    return (
      //<MainLayout></MainLayout>
        <div>
          <ul>
            {this.state.product.map(product => <li key={product.id}>{product.model}</li>)}
          </ul>
        </div>
    );
  }
}

export default App;
