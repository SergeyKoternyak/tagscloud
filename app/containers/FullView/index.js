import React from 'react';
import { connect } from 'react-redux';

import toUpperCase from '../../helpers/toUpperCase';

const FullView = props => {
  const { tags, match } = props;
  const { id } = match.params;
  const tag = tags.find(tag => tag.id === id);

  return (
    <dl>
      <dt>Label</dt>
      <dd>{tag.label}</dd>
      <dt>Total Mentions</dt>
      <dd>
        {
          Object.values(tag.sentiment).reduce((prev, current) => (prev + current), 0)
        }
      </dd>
      {
        Object.keys(tag.sentiment).map(mention => (
          <React.Fragment key={mention}>
            <dt>{`${toUpperCase(mention)} Mention`}</dt>
            <dd>{tag.sentiment[mention]}</dd>
          </React.Fragment>
        ))
      }
      {
        Object.keys(tag.pageType).map(pageType => (
          <React.Fragment key={pageType}>
            <dt>{toUpperCase(pageType)}</dt>
            <dd>{tag.pageType[pageType]}</dd>
          </React.Fragment>
        ))
      }
    </dl>
  );
};

const mapStateToProps = state => ({
  tags: state.tags
});

export default connect(mapStateToProps)(FullView);

/*- Label
- Total Mentions
- Positive Mentions
- Neutral Mentions
- Negative Mentions
- List of page types*/