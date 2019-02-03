import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tweet_base_url = 'https://twitter.com/intent/tweet?hashtags=quotes,fCC&related=freecodecamp&text=';

const TweetButton = props => {
  const { text, author } = props.quote;
  const { customStyle } = props;

  return (
    <a
      id="tweet-quote"
      className="button"
      title="Tweet the Quote"
      href={`${tweet_base_url}${text} ${author}`}
      target="_blank"
      rel="noopener noreferrer"
      style={customStyle}
    >
      <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
    </a>
  );
};

export default TweetButton;
