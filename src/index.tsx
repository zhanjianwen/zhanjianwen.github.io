import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import api  from './views/apis/index'
import * as moment from 'moment';
import * as _ from 'lodash';
declare global {
  interface Window {
    $api: any,
    moment:any,
    _:any
  }
}
window.$api = api;
window.moment = moment;
window._ = _;
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();