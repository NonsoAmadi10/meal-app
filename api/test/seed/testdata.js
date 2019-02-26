const testData = {
  validmealData: {
    name: 'Rice and beans',
    price: 400,
    size: 'large'
  },
  modifymealData: {
    name: 'beans',
    price: 500,
    size: 'small'
  },

  invalidmealData: {
    name: '',
    price: '',
    size: '',
  },

  validMenuData: {
    list: [{ name: 'rice and beans', price: 700 }, { name: 'banga and starch', price: 200}],
    section: 'section'
  },

  invalidMenuData: {
    list: [],
    section: ''
  },

  validOrderData: {
    customer: 'jack robinson',
    meal: 'rice',
    price: 300,
    status: 'ongoing'
  },

  invalidOrderData: {
    customer: '',
    meal: '',
    price: '',
    status: ''
  }

}

export default testData;
