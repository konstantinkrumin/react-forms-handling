import React, {useState, useEffect} from 'react';
import './styles/main.scss';

import RequestsList from './components/request-components/RequestsList'
import Form from "./components/Form"

function App() {
  const [data, setData] = useState()

  const DATA_LINK = 'https://d76afe3b-6e74-4da7-b7ac-fff456f1bb50.mock.pstmn.io/data';

  useEffect(() => {
    fetch(DATA_LINK)
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <div className="main-window">
      {console.log(data)}
      <h1>Hello World</h1>
      <RequestsList />
      <Form />
    </div>
  );
}

export default App;
