import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const translate_base_url = 'https://translate.google.com/#view=home&op=translate&sl=en&tl=tr&text=';

export default function TranslateButton(props) {
  const { text } = props.quote;

  return (
    <a title="Translate the Quote" href={`${translate_base_url}${text}`} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon="language" size="3x" />
    </a>
  );
}
