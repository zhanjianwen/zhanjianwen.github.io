import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import api  from './views/apis/index'
import * as moment from 'moment';
import * as _ from 'lodash';
import utils from './views/utils/index'

import { Provider } from 'react-redux'
import store from './views/redux'
declare global {
  interface Window {
    $api: any,
    moment:any,
    _:any,
    $utils:any
  }
}
window.$api = api;
window.moment = moment;
window._ = _;
window.$utils = utils;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();