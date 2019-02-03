import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tweet_base_url = 'https://twitter.com/intent/tweet?hashtags=quotes,fCC&related=freecodecamp&text=';

export default function TweetButton(props) {
  const { text, author } = props.quote;

  return (
    <a id="tweet-quote" title="Tweet the Quote" href={`${tweet_base_url}${text} ${author}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
    </a>
  );
}
