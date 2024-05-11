
import './App.css';
import Greet  from './components/greet'
import Welcome from './components/welcome'
import Name from './components/notjsx'
import Message from './components/Msg'
import Count from './count'

function App() {
  return (
    <div className="App">
      <h1>REACT</h1>

< Greet namee='jose' hero='captain America'>this is children prop</Greet>
< Greet namee='jane' hero='superman'><button>press</button></Greet>
< Greet namee='john' hero='batman'/>
<Welcome namee='john' hero='batman'/>
< Welcome namee='jose' hero='captain America'>this is children prop</Welcome>
< Welcome namee='jane' hero='superman'><button>press</button></Welcome>
<Name /> 
<Message/>
<Count/>
    </div>
  );
}

export default App;
