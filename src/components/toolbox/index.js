import React, { Component } from 'react';
import Framework from '../common/framework';
import Tool from '../common/tool';
import './Toolbox.css';
import { tools, logos} from '../../seed';

class Toolbox extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="Toolbox">
        <div className="Toolbox-framework">
          {logos.map(framework => <Framework framework={framework} />)}
        </div>
        <div className="Toolbox-tools">
          {tools.map(tool => <Tool tool={tool} />)}
        </div>
      </div>
    );
  }
}

export default Toolbox;
