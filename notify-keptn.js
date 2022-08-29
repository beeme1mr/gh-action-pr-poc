module.exports = ({ github, context }) => {
  console.log(context);
  return context.payload.client_payload.value;
};
