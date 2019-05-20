import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

Enzyme.configure({ adapter: new Adapter() });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
