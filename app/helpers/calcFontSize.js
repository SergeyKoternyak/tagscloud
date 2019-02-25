const calcFontSize = data => {
  const sentimentScoreValues = data.map(tag => (tag.sentimentScore));
  const min = Math.min(...sentimentScoreValues);
  const max = Math.max(...sentimentScoreValues);
  const minFontSize = 12;
  const maxFontSize = 100;

  const dataWithFontSize = data.map(tag => ({
    ...tag,
    fontSize: Math.ceil(
      tag.sentimentScore === min
        ? minFontSize
        : (tag.sentimentScore / max) * (maxFontSize - minFontSize) + minFontSize
    )
  }));

  return dataWithFontSize;
};

export default calcFontSize;