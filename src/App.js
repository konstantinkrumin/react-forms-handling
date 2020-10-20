import React, {useState, useEffect} from 'react';
import './styles/main.scss';

import RequestsList from './components/request-components/RequestsContainer'
import FormsContainer from "./components/form-components/FormsContainer"
import EmptyDataset from "./components/EmptyDataset"
import Loading from "./components/Loading"

function App() {
  const DATA_LINK = 'https://d76afe3b-6e74-4da7-b7ac-fff456f1bb50.mock.pstmn.io/data'
  
  const [data, setData] = useState([])
  const [requestName, setRequestName] = useState()
  const [isItemSelected, setIsItemSelected] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(DATA_LINK)
      .then(response => response.json())
      .then(json => {
        setData(json.requestID)
        setRequestName(json.dataType)
        setIsItemSelected(createObj(json.requestID))
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      handleSelection(data[0])
    }
  }, [data])

  function createObj (arr) {
    let newObj = {}
    arr.map((item, index) => index === 0 ? newObj[item] = true : newObj[item] = false)
    return newObj
  }

  function handleSelection(selectedItem) {
    const objCopy = JSON.parse(JSON.stringify(isItemSelected))
    for (let item in objCopy) {
      Number.parseInt(item) === selectedItem 
        ? objCopy[item] = true 
        : objCopy[item] = false
    }
    setIsItemSelected(objCopy)
  }

  function handleFormSubmit(requestNum) {
    const filteredData = data.filter(item => item !== requestNum)
    setData(filteredData)
  }

  if (loading === false && data.length !== 0) {
    return (
      <div className="main-window">
        <RequestsList data={data} requestName={requestName} handleSelection={handleSelection} isItemSelected={isItemSelected} />
        <FormsContainer data={data} handleFormSubmit={handleFormSubmit} isItemSelected={isItemSelected} />
      </div>
    );
  } else if (loading === false && data.length === 0) {
    return <EmptyDataset />
  } else {
    return <Loading />
  }

}

export default App;
