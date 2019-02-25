import React from 'react';
import Tag from '../Tag';

import style from './tagsCloud.scss';

import calcFontSize from '../../helpers/calcFontSize';

const TagsCloud = props => {
  const { data } = props;
  const dataWithFontSize = calcFontSize(data);

  return (
    <div className={style.root}>
      {
        dataWithFontSize.map(tag => (
          <Tag
            key={tag.id}
            {...tag}
          />
        ))
      }
    </div>
  );
};

export default TagsCloud;