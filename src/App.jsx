import React, { useState, useEffect } from 'react';
import './App.scss';

import Quote from './components/Quote';

import useAsync from './hooks/useAsync';
import getPseudoRandomNumber from './utils/getRandomNumber';

const fetchQuotes = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
  );

  return res.json();
};

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const { value } = useAsync(fetchQuotes);

  useEffect(() => {
    if (value?.quotes) {
      getRandomIndex(value.quotes.length);
    }
  }, [value]);

  const getRandomIndex = (quotesArrayLength) => {
    const randomNumber = getPseudoRandomNumber(quotesArrayLength);
    setRandomNumber(randomNumber);
  };

  return (
    <main className="App">
      <div className="container">
        {value ? (
          <Quote
            quote={value.quotes[randomNumber].quote}
            author={value.quotes[randomNumber].author}
            getRandomQuoteFn={() => getRandomIndex(value.quotes.length)}
          />
        ) : (
          <>
            <h3>Loading...</h3>
          </>
        )}
      </div>
    </main>
  );
}

export default App;
