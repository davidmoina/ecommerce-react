const generateOrder = (name, email, phone, cart, total) => {
  return {
    buyer: {
        name,
        email,
        phone
    },
    items: cart,
    total,
    createDat: new Date().toLocaleString()
  }
}

export default generateOrder;