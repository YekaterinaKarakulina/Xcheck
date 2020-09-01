function isObjectEmpty(value) {
  return value && Object.keys(value).length === 0 && value.constructor === Object;
}

export default isObjectEmpty;
