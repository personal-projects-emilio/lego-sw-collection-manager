export default {
  reference: {
    type: 'input',
    value: '',
    label: 'Reference',
    placeholder: 'Minifig reference (ex: sw0001a)',
    validation: {
      required: true, 
      isAReference: true,
      reference: null
    },
    valid: false,
    touched: false
  },
  name: {
    type: 'input',
    value: '',
    label: 'Name',
    placeholder: 'Minifig name (ex: Battle Droid Tan with Back Plate)',
    validation: {
      required: true, 
    },
    valid: false,
    touched: false
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
    touched: false
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
    touched: false
  },
  possessed: {
    type: 'switch',
    value: false,
    label: 'Possession',
    validation: {
      required: true
    },
    valid: true,
    touched: false
  }
}