import React from 'react';
import Framework from '../common/framework';
import Tool from '../common/tool';
import './Toolbox.css';
import { tools, logos} from '../../seed';

const Toolbox = () => (
  <div className="Toolbox">
    <div className="Toolbox-framework">
      {logos.map((framework, i) => <Framework key={`${framework}_${i}`} framework={framework} />)}
    </div>
    <div className="Toolbox-tools">
      {tools.map((tool, i) => <Tool key={`${tool}_${i}`} tool={tool} />)}
    </div>
  </div>
);

export default Toolbox;
