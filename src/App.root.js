import React, { Component } from 'react';
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
  projects: {
    icon: 'fa-tasks'
  },
  about: {
    icon: 'fa-info'
  },
};

const contactSections = {
  github: {
    icon: 'fa-github-alt',
    url: 'https://github.com/tlerias',
    ariaLabel: 'Github Profile',
  },
  linkedin: {
    icon: 'fa-linkedin-square',
    url: 'https://www.linkedin.com/in/tlerias',
    ariaLabel: 'LinkedIn Profile',
  },
  email: {
    icon: 'fa-envelope',
    url: 'mailto: shoutouttara@gmail.com',
    ariaLabel: 'Email Address',
  },
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
            <h1 className="App-header-subtext">Tara (Lerias) Bird</h1>
            <h2 className="App-header-subtext App-header-title">Front End Engineer</h2>
          </figure>
          <nav className="App-header-nav">
            {Object.keys(contactSections).map((section, i) => (
              <a key={`${contactSections[section].url}_${i}`} className="App-header-link" href={contactSections[section].url} target="_blank" rel="noopener noreferrer">
                <i className={`App-header-icon fa ${contactSections[section].icon}`} />
              </a>
            ))}
          </nav>
        </div>
        <main className="App-intro">
          <Section icon={sections.toolbox.icon} title="Toolbox" backgroundColor="#443b44">
            <Toolbox />
          </Section>
          {/*<Section icon={sections.experience.icon} title="Experience" backgroundColor="#6b5e6b">
            More information to come. This site is still under construction.
          </Section>
          <Section icon={sections.projects.icon} title="Projects" backgroundColor="#8c7b8c">
            More information to come. This site is still under construction.
          </Section>
          <Section icon={sections.about.icon} title="About me" backgroundColor="#D8BFD8">
            More information to come. This site is still under construction.
          </Section>*/}
        </main>
      </div>
    );
  }
}

export default App;
