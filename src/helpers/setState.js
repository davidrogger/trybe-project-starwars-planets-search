function setState(target, callback, state) {
  const { name, value } = target;
  callback({
    ...state,
    [name]: value,
  });
}

export default setState;
