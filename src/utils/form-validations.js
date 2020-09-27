const required = (value) => (value ? undefined : 'This field is required');

const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export { required, minLength, maxLength };
