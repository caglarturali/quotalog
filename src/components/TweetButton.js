import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tweet_base_url = 'https://twitter.com/intent/tweet?hashtags=quotes,fCC&related=freecodecamp&text=';

const TweetButton = props => {
  const { text, author } = props.quote;
  const { color } = props;

  const btnStyle = {
    background: color
  };

  return (
    <a
      id="tweet-quote"
      className="button"
      title="Tweet the Quote"
      href={`${tweet_base_url}${text} ${author}`}
      target="_blank"
      rel="noopener noreferrer"
      style={btnStyle}
    >
      <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
    </a>
  );
};

export default TweetButton;
