function setState(target, callback) {
  const { name, value } = target;
  callback((prevState) => ({
    ...prevState,
    [name]: value,
  }));
}

export default setState;
