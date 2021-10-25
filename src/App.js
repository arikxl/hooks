import './App.css';

import useLocalStorage from './components/useLocalStorage';
import useUpdatedConsoleLog from './components/useUpdatedConsoleLog';


function App() {

  const [name, setName] = useLocalStorage('name', '')
  useUpdatedConsoleLog(name)

  return (
    <>
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
 

    </>
  );  
}

export default App;
