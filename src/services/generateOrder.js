const generateOrder = (name, surname, email, phone, country, address, information, postcode, city, terms, newsletter, cart, total) => {
  return {
    buyer: {
        name,
        surname,
        email,
        phone,
        country,
        address,
        information,
        postcode,
        city,
        terms,
        newsletter
    },
    items: cart,
    total,
    createDat: new Date().toLocaleString()
  }
}

export default generateOrder;