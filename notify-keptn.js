module.exports = ({ context }) => {
  const labels = context.payload.pull_request.labels;
  const parsedLabels = {};
  labels.forEach((label) => {
    const [key, value] = label.name.split(":");
    parsedLabels[key] = value;
  });

  return {
    data: {
      project: parsedLabels["project"],
      stage: parsedLabels["stage"],
      service: parsedLabels["service"],
      status: "succeeded",
      result: "pass",
    },
    source: "github",
    specversion: "1.0",
    // TODO see what the event name is
    type: "sh.keptn.event.mytask-active.finished",
    shkeptncontext: parsedLabels["shkeptncontext"],
    triggeredid: parsedLabels["triggeredid"],
  };
};
