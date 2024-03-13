import "./ProductCard.css";
import ProductPrice from "./ProductPrice.jsx";

function ProductCard({title, idx}){
  let oldPrices =["12,495","11,900","1,599","599"];
  let newPrices =["8,999","9,199","899","278"];
  let description=[["8,000 Dpi","wireless"], ["initutive surface","designed for iPad Pro"], [ "designed for iPad Pro", "initutive surface"], ["wireless", "8,000 Dpi"]];

  return (
  <div className="ProductCard">
  <h4>{title}</h4>
  <p>{description[idx][0]}</p>
  <p>{description[idx][1]}</p>

  <ProductPrice oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
  </div>
);
}


export default ProductCard;