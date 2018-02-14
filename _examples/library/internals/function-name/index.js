export default f => {
  const match = String(f).match(/^function (\w*)/);

  return match == null ? '' : match[1]; // eslint-disable-line
};