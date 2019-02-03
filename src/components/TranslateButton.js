import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getLanguageCode = () => {
  // Define user's language. Different browsers have the user locale defined
  // on different fields on the `navigator` object, so we make sure to account
  // for these different by checking all of them
  const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

  // Split locales with a region code
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
  return languageWithoutRegionCode;
};

const buildTranslateUrl = text => {
  const browserLanguage = getLanguageCode();
  return `https://translate.google.com/#view=home&op=translate&sl=en&tl=${browserLanguage}&text=${text}`;
};

const TranslateButton = props => {
  const { text } = props.quote;
  const { customStyle } = props;

  return (
    <a
      className="button"
      title="Translate the Quote"
      href={`${buildTranslateUrl(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={customStyle}
    >
      <FontAwesomeIcon icon="language" size="3x" />
    </a>
  );
};

export default TranslateButton;
