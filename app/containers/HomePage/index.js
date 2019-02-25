import React from 'react';
import { connect } from 'react-redux';

import TagsCloud from '../../components/TagsCloud';

const HomePage = props => {
  const { tags } = props;
  return (
    <TagsCloud data={tags} />
  );
};

const mapStateToProps = state => ({
  tags: state.tags
});

export default connect(mapStateToProps)(HomePage);