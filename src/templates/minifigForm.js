export default {
  reference: {
    type: 'textfield',
    value: '',
    label: 'Reference',
    placeholder: 'Minifig reference (ex: sw0001a)',
    validation: {
      required: true, 
      isAReference: ['sw0001', 'sw0001a'],
      reference: 'sw0001'
    },
    valid: false,
    touched: false,
    errorText: null,
    muiProps: {
      required: true,
      variant: 'outlined'
    }
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
    }
  },
  characterName: {
    type: 'autocomplete',
    value: '',
    label: 'Character name',
    placeholder: 'Character name (ex: Battle Droid)',
    autocompleteConfig: {
      creatable: true
    },
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    errorText: null
  },
  tags: {
    type: 'autocomplete',
    value: '',
    label: 'Tags',
    placeholder: 'Minifig tags (ex: Battle Droid, CIS, Droid)',
    autocompleteConfig: {
      creatable: true,
      multi: true
    },
    validation: {},
    valid: true,
    touched: false,
    errorText: null
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
    errorText: null
  }
}