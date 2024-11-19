import { createContext } from "react";
import all_product from "../Components/Assets/all_dta";

export const ShopContext=createContext(null);

//cart setting
const getDefaultCart=()=>
{
  let cart={};
  for(let index=0;index<all_product.length;index++) {
  cart[index]=0;
  }
}
const ShopProvider=(props)=>{
const contextValue={all_product};
 // cart value changing


return(
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
 );

}
 export default ShopProvider;
