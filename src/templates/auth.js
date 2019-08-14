export default {
  email: {
    type: 'textfield',
    value: '',
    label: 'Email',
    validation: {
      required: true,
      email: true
    },
    valid: false,
    touched: false,
    errorText: null,
    muiProps: {
      required: true,
      variant: 'outlined'
    },
    className: "padding1rem"
  },
  password: {
    type: 'textfield',
    value: '',
    label: 'Password',
    validation: {
      required: true, 
    },
    config: {
      type: 'password'
    },
    valid: false,
    touched: false,
    errorText: null,
    muiProps: {
      required: true,
      variant: 'outlined'
    },
    className: "padding1rem"
  },
}