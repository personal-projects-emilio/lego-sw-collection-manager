export const styles = theme => ({
  input: {
    display: 'flex !important',
    padding: '10px !important',
    height: 'auto',
  },
  paper: {
    position: 'absolute',
    zIndex: 1000,
    maxHeight: '12rem',
    overflow: 'hidden',
    left: 0,
    right: 0,
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
    textAlign: 'center'
  },
});

export const customStyles = {
  placeholder: (provided, state) => ({
    ...provided,
    color: 'inherit',
    opacity: 0.42
  })
}
