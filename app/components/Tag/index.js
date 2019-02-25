import React from 'react';
import { Link } from 'react-router-dom';

import style from './tag.scss';

const Tag = props => {
  const { id, fontSize, label } = props;

  return (
    <Link
      to={`/${id}`}
      className={style.tag}
      style={{
        fontSize: fontSize
      }}
    >
      {label}
    </Link>
  );
};

export default Tag;