import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = props => {
  const style = {
    color: props.color || 'ghostwhite',
    marginBottom: '20px'
  };

  return (
    <div className="loading-indicator">
      <FontAwesomeIcon icon="spinner" pulse style={style} size="2x" />
    </div>
  );
};

export default Loading;
