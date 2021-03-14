export const nameRule = name => ({
  [name]: {
    presence: true,
    length: {
      minimum: 2,
    },
  },
});

export const emailRule = {
  email: {
    presence: true,
    email: true,
  },
};

const passwordFormat = {
  pattern:
    '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W|_])(?=.*[a-zA-Z]).{8,}$',
  message:
    'must be a minimum of 8 characters and include at least one lower case letter, upper case letter, a number and special character.',
};

export const passwordRule = {
  password: {
    presence: true,
    format: passwordFormat,
    length: {
      maximum: 24,
    },
  },
};

export const descriptionRule = text => ({
  [text]: {
    presence: true,
    length: {
      minimum: 2,
    },
  },
});
