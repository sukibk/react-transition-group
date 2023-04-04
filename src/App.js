import React, { Component } from "react";
import Transition from 'react-transition-group/Transition'
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false
    }

    showModal = () => {
        this.setState({modalIsOpen: true})
    }

    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

  render() {
      return (
      <div className="App">
        <h1>React Animations</h1>
          <button onClick={() => this.setState(prevState => {return{showBlock: !prevState.showBlock}})}>Toggle</button>
          {/*{this.state.showBlock ? <div style={{backgroundColor: 'red', width: 100, height: 100}}>*/}
          {/*</div> : null}*/}
          <Transition in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExited={() => console.log('onExited')}
          onExiting={() => console.log('onExiting')}
          >
              {state => {return <div style={{backgroundColor: 'red', width: 100, height: 100, margin: 'auto',
              opacity: state === 'exiting' ? 0 : 1,
              transition: 'opacity 1s ease-out'}} />}}
          </Transition>
          <br/>
                  <Modal show={this.state.modalIsOpen} onClose={this.closeModal}/>
          {this.state.modalIsOpen ?
              <Backdrop show /> : null}
        <button onClick={this.showModal} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
