import React, {useState, useEffect} from 'react';
import './styles/main.scss';

import RequestsList from './components/request-components/RequestsList'
import Form from "./components/Form"
import useFetch from "./helpers/fetchData"

function App() {
  // const DATA_LINK = 'https://027132dc-7417-472c-bcdd-4b9245888c75.mock.pstmn.io';
  // const [data, loading] = useFetch(DATA_LINK);

  useEffect(() => {
    fetch('https://027132dc-7417-472c-bcdd-4b9245888c75.mock.pstmn.io/demo')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="main-window">
      <h1>Hello World</h1>
      <RequestsList />
      <Form />
    </div>
  );
}

export default App;
