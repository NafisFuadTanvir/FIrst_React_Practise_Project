import { getStoredCard } from "../../utilities/fakedb";

const CustomLoader = async ()=> {
  
    const loaderproduct= await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");

    const products = await loaderproduct.json();


    const storedCart= getStoredCard();
    const savedcart= [];
    
     for(const id in storedCart){

        const addedproduct= products.find(pd=> pd.id===id);
        
        const quantity= storedCart[id];
        addedproduct.quantity= quantity;
        savedcart.push(addedproduct);
        
     }

    return savedcart;

}


export default CustomLoader;