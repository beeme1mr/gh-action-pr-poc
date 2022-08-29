module.exports = ({ github, context }) => {
  const labels = context.payload.pull_request.labels;
  console.log(labels);
};
