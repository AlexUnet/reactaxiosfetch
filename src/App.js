import React, {useEffect, useState} from 'react';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
import axios from 'axios';

function App(){
  const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
    loading: false,
    repors: null,
  });

  useEffect(() =>{
    setAppState({loading: true});
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({loading: false, repos:allRepos});
    });  
    /* FETCH REQUEST
    fetch(apiUrl)
    .then((res) => res.json())
    .then((repos) => {
      setAppState({loading: false, repos: repos});
    });*/
  },[setAppState]);
  return(
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos}/>
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love' >
          💚
          </span>{' '}
          with by Alex
        </div>
      </footer>
    </div>
  );
}
export default App;
