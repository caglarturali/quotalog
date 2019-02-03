import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GitHubButton = () => {
  return (
    <a
      className="gh-button"
      title="View the project repo on GitHub"
      href="https://github.com/caglarturali/quotalog"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
    </a>
  );
};

export default GitHubButton;
