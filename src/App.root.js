import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/section';
import Toolbox from './components/toolbox';

const sections = {
  toolbox: {
    icon: 'fa-code'
  },
  experience: {
    icon: 'fa-file-text-o'
  },
  about: {
    icon: 'fa-info'
  },
  contact: {
    icon: 'fa-inbox'
  }
};

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
          <figure className="App-logo">
            <span className="App-logo-text">TL</span>
          </figure>
          <figure className="App-header-text">
            <h1 className="App-header-subtext">Tara Lerias</h1>
            <h2 className="App-header-subtext App-header-title">Front End Engineer</h2>
          </figure>
          <nav className="App-header-nav">
            {Object.keys(sections).map(section => <i className={`App-header-icon fa ${sections[section].icon}`} />)}
          </nav>
        </div>
        <main className="App-intro">
          <Section icon={sections.toolbox.icon} title="Toolbox" backgroundColor="#443b44">
            <Toolbox />
          </Section>
          <Section icon={sections.experience.icon} title="Experience" backgroundColor="#6b5e6b">
          </Section>
          <Section icon={sections.about.icon} title="About me" backgroundColor="#8c7b8c">
          </Section>
          <Section icon={sections.contact.icon} title="Contact" backgroundColor="#D8BFD8">
          </Section>
        </main>
      </div>
    );
  }
}

export default App;
