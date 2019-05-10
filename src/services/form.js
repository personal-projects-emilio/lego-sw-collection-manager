export const checkValidity = (value, rules) => {
  let validity = {valid: true, errorText: null}
  const trimValue = typeof value === 'string' ? value.trim() : value;

  rules.required && (
    validity = {
      valid: validity.valid && trimValue !== '',
      errorText: trimValue.length === 0 ? 'This field is required' : null
    }
  )
  
  if (rules.isAReference) {
    const pattern = /sw[0-9]{4}[abcds]?$/;
    const unique = trimValue !== rules.reference 
      ? rules.isAReference.indexOf(trimValue) === -1
      : true;
  
    validity = {
      valid: pattern.test(trimValue) && validity.valid && unique,
      errorText: !pattern.test(trimValue) && unique
        ? 'This is not a minifig reference: sw[0-9]{4}[abcds]'
        : pattern.test(trimValue) && !unique
        ? 'This minifig already exists in the database'
        : null
    }
}

  return validity;
}

export const getFormIsValid = template => {
  let isValid = true;
  Object.keys(template).forEach(inputKey => {
    isValid = template[inputKey].valid && isValid;
  })
  return isValid;
}