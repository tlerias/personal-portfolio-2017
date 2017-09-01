import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/section';
import Toolbox from './components/toolbox'

/*
darkest : #443b44
#6b5e6b
#b7a1b7
#8c7b8c
lightest: #D8BFD8
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          () => <figure className="App-logo">
            <span className="App-logo-text">TL</span>
          </figure>
          <figure className="App-header-text">
            <h1 className="App-header-subtext">Tara Lerias</h1>
            <h1 className="App-header-subtext">Front End Engineer</h1>
          </figure>
        </div>
        <main className="App-intro">
          <Section title="Toolbox" backgroundColor="#443b44">
            <Toolbox />
          </Section>
          <Section title="Experience" backgroundColor="#6b5e6b">
          </Section>
          <Section title="About me" backgroundColor="#8c7b8c">
          </Section>
          <Section title="Footer" backgroundColor="#D8BFD8">
          </Section>
        </main>
      </div>
    );
  }
}

export default App;
