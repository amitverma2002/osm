import pic1 from "./assets/girl slipers.webp"
import pic2 from "./assets/PUMA Adidas.webp"
import pic3 from "./assets/s-trouser-004-kajaru-original-imah7m6x646bm9uz.webp"
import pic4 from "./assets/t-shirt-ppts01-pepe-jeans-original-imah9d6ye7sgeaug.webp"
import pic5 from "./assets/Kurtis.webp"
import pic6 from "./assets/3-774-womn-3-deals4you-pink-original-imah6gdfgfgk26ha.webp"

export default function sale() {
  const saleProduct = [
    {
      name:"Girl Slippers",
      price:"Under ₹499",
      img:pic1,
    },
    {
      name:"Adidas puma",
      price:"Under ₹499",
      img:pic2,
    },{
      name:"Boy Trouser",
      price:"Under ₹499",
      img:pic3,
    },{
      name:"T-Shirt",
      price:"Under ₹499",
      img:pic4,
    },{
      name:"Kurtis",
      price:"Under ₹499",
      img:pic5,
    },{
      name:"Women Shoes",
      price:"Under ₹499",
      img:pic6,
    },
  ]
  return (
   
    <div className="flex justify-around bg-white mt-[20px] mx-10 items-center h-[250px] ">
        {saleProduct.map((name)=>(
          <div className="">
          <img src={name.img} className="w-[130px]"/>
          <h3>{name.name}</h3>
          <h2>{name.price}</h2>
          </div>
        ))}
    </div>  
  )
}
  // once click on category redirect the       with the 
  // extract query parameter from url
