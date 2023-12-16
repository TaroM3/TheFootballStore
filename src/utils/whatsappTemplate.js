function whatsappTemplate(products) {
  const phoneNumber = 5492216697039;
  const template = products.reduce((info, product) => {
    return (info += `${product.title} %0A talle: ${product.size}%0A cantidad: ${product.quantity}%0A`);
  }, ' ');
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola, estoy interesado/a en:%0A${template} muchas gracias.`;
  return { url };
}

export default whatsappTemplate;
