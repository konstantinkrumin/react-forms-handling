import React from 'react';
import './styles/main.scss';

import RequestsList from './components/request-components/RequestsList'
import Form from "./components/Form"
import fetchData from "./helpers/fetchData"

function App() {
  return (
    <div className="main-window">
      <h1>Hello World</h1>
      <RequestsList />
      <Form />
    </div>
  );
}

export default App;
