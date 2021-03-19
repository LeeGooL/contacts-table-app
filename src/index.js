import React from 'react';
import { render } from 'react-dom';

import { Button } from 'antd';

import 'antd/dist/antd.css';

const App = () => <Button type='primary' style={{ margin: 10}}>Button</Button>;

render(<App />, document.getElementById('root'));
