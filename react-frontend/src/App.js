//import logo from './logo.svg';
import './App.css';
//import ImageClassifier from './ImageClassifier';
import  Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          My Token = {window.token}
          {/*img classifier : have to yarn add tfjs, model*/}
          {/*<ImageClassifier></ImageClassifier>*/}
          test
          <Main></Main>
      </header>
    </div>
  );
}

export default App;
