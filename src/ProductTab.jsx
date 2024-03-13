import ProductCard from "./ProductCard.jsx";

function ProductTab(){
let styles= {
  display:"flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems:"center"
};
  return(
    <div style={styles}>
      
      <ProductCard title="Logitech" idx={0}/>
      <ProductCard title="Apple" idx={1}/>
      <ProductCard title="Zebronics" idx={2}/>
      <ProductCard title="petronics" idx={3}/>
    </div>
  );
}

export default ProductTab;