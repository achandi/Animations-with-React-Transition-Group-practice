import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    showModal: false,
    showBlock: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'red',
                margin: 'auto',
                transition: 'opacity 1s ease-out', //could also use all for first val
                opacity: state === 'exiting' ? 0 : 1,
              }}
            />
          )}
        </Transition>
        <Modal show={this.state.showModal} closed={this.toggleModal} />
        {this.state.showModal && <Backdrop show />}
        <button className="Button" onClick={this.toggleModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
