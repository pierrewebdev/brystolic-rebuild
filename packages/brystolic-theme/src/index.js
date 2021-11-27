const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/brystolic-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "brystolic-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
