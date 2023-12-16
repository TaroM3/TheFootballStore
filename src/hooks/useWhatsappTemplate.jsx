function useWhatsappTemplate(products) {
  const phoneNumber = 5492216697039;
  const template = products.map((product) => {
    return `
        ${product.title} \n,
        talle: ${product.size}\n
        cantidad: ${product.quantity}\n,
        `;
  });
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola, estoy interesado/a en: \n ${template} muchas gracias.`;
  return url;
}

export default useWhatsappTemplate;
