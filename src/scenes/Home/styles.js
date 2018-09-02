export default ({
  container: { 
    marginTop: 20
  },
  spinner: {
    marginTop: 80,
    fontSize: 80
  },
  form: {
    marginBottom: 20,
  },
  inputField: {
    width: '60vw',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px solid #A9A9A9',
    fontSize: 40,
    outline: 'none',
    '@media (max-width: 992px)': {
      fontSize: 30,
      width: '100%',
    },
    '@media (max-width: 426px)': {
      fontSize: 25,
      width: '100%',
    },
  },
  imageBlock: {
    width: 250,
    height: 200,
    margin: 10,
    objectFit: 'cover',
    cursor: 'pointer',
  },
  endOfResults: {
    display: 'inline-block',
    border: '1px solid grey',
    padding: 10,
    },
})