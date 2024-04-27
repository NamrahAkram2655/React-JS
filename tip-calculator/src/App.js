import { useState } from 'react';
import './App.css';
import BillData from './Components/BillData/BillData';
import Result from './Components/Result/Result';
import Reset from './Components/Reset/Reset';

function App() {

  const [input, setInput] = useState("");
  const [review, setReview] = useState("");
  const [frndReview, setFrndReview] = useState("");

  let result = (Number(review) + Number(frndReview)) / 2;

  const ResetHandler = () => {
    setInput("");
    setReview("");
    setFrndReview("");
  }

  return (
    <div>
      <BillData input={input} setInput={setInput} review={review} setReview={setReview} frndReview={frndReview} setFrndReview={setFrndReview} />

      <Result input={input} review={review} frndReview={frndReview} result={result} />

      <Reset ResetHandler={ResetHandler} />
    </div>
  );
}

export default App;
