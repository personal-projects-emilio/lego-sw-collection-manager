export default {
  reference: {
    type: 'textfield',
    value: '',
    label: 'Reference',
    placeholder: 'Minifig reference (ex: sw0001a)',
    validation: {
      required: true, 
      isAReference: [],
      reference: null
    },
    valid: false,
    touched: false,
    errorText: null,
    muiProps: {
      required: true,
      variant: 'outlined'
    },
    className: "padding10rem"
  },
  name: {
    type: 'textfield',
    value: '',
    label: 'Name',
    placeholder: 'Minifig name (ex: Battle Droid Tan with Back Plate)',
    validation: {
      required: true, 
    },
    valid: false,
    touched: false,
    errorText: null,
    muiProps: {
      required: true,
      variant: 'outlined'
    },
    className: "padding10rem"
  },
  characterName: {
    type: 'autocomplete',
    value: '',
    label: 'Character name',
    placeholder: 'Character name (ex: Battle Droid)',
    config: {
      options: [],
      creatable: true
    },
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    errorText: null,
    muiProps: {
      required: true,
      variant: 'outlined',
      InputLabelProps: {
        shrink: true
      },
    },
    className: "padding10rem"
  },
  tags: {
    type: 'autocomplete',
    value: [],
    label: 'Tags',
    placeholder: 'Minifig tags (ex: Battle Droid, CIS, Droid)',
    config: {
      multi: true,
      options: [],
      creatable: true
    },
    validation: {},
    valid: true,
    touched: false,
    errorText: null,
    muiProps: {
      variant: 'outlined',
      InputLabelProps: {
        shrink: true
      },
    },
    className: "padding10rem"
  },
  possessed: {
    type: 'switch',
    value: false,
    label: 'Possession',
    validation: {
      required: true
    },
    valid: true,
    touched: false,
    errorText: null,
    className: "padding10rem"
  }
}