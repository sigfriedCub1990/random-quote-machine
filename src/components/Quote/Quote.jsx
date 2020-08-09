import React from 'react';
import './Quote.scss';

const Quote = ({ quote, author, getRandomQuoteFn }) => {
  return (
    <article id="quote-box" className="Quote">
      <h2 id="text" className="Quote__text">
        {quote}
      </h2>
      {
        <h3 id="author" className="Quote__author">
          {author}
        </h3>
      }
      <div className="Quote__actions">
        <button
          id="new-quote"
          className="refresh-btn"
          onClick={getRandomQuoteFn}
        >
          Get another quote!
        </button>
        <a
          id="tweet-quote"
          className="share-btn"
          href="https://twitter.com/intent/tweet"
        >
          Share on Twitter
        </a>
      </div>
    </article>
  );
};

export default Quote;
