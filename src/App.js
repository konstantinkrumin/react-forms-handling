import React, {useState, useEffect} from 'react';
import './styles/main.scss';

import RequestsList from './components/request-components/RequestsContainer'
import FormsContainer from "./components/form-components/FormsContainer"

function App() {
  const [data, setData] = useState([])
  const [requestName, setRequestName] = useState()

  const DATA_LINK = 'https://d76afe3b-6e74-4da7-b7ac-fff456f1bb50.mock.pstmn.io/data';

  useEffect(() => {
    fetch(DATA_LINK)
      .then(response => response.json())
      .then(json => {
        setData(json.requestID)
        setRequestName(json.dataType)
      })
  }, [])

  return (
    <div className="main-window">
      <RequestsList data={data} requestName={requestName} />
      <FormsContainer data={data} />
    </div>
  );
}

export default App;
