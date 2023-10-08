import ProductCard from "../../common/productCard/ProductCard"

const ItemList = ( {items} ) => {
    console.log(items)
  return (
    <>
        {items.length !== 0 ? items.map((item) => {
            return (<ProductCard key={item.id}  item={item}/>)}
        ) : 
        `Cargando. . . `
        }
    </>
    
    
  )
}

export default ItemList