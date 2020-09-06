import { isWebUri } from 'valid-url';

const required = (value) => (value ? undefined : 'This field is required');

const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const validUrl = (value) => (!isWebUri(value) ? 'Not a valid url' : undefined);

export { required, minLength, maxLength, validUrl };
