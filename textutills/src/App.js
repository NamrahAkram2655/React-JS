import { useState } from 'react';
import './App.css';
import Buttons from './Components/Buttons/Buttons';
import Navbar from './Components/Navbar/Navbar';
import Textarea from './Components/Textarea/Textarea';
import Summary from './Components/Summary/Summary';
import Alert from './Components/Alert/Alert';

function App() {
  const [input, setinput] = useState("");


  const inputHandler = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
  }

  const [mode, setmode] = useState('light');
  const [text, setText] = useState('Enable Dark mode');

  const toggleStyle = () => {
    if (mode === 'light') {
      setmode('dark');
      setText('Enable light mode');
      document.body.style.backgroundColor = "rgb(15, 7, 55)";
      document.body.style.color = "white";
    }
    else {
      setmode('light');
      setText('Enable dark mode');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert({
        msg: null,
        type: null
      });
    }, 3000);
  }

  return (
    <div>
      <Navbar mode={mode} text={text} toggleStyle={toggleStyle} />
      <Alert alert={alert} />
      <div className='cont'>
        <form onSubmit={handleSubmit}>
          <Textarea input={input} inputHandler={inputHandler} heading="Enter Text to analyze" mode={mode} />
          <Buttons setinput={setinput} input={input} showAlert={showAlert} />
        </form>
        <Summary input={input} />
      </div>
    </div>
  );
}

export default App;
