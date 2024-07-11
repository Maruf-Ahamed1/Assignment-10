import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleDetails = () => {
const {id}=useParams();
console.log(id);

const [Product,setProduct] = useState({})
useEffect(() =>{
    fetch(`http://localhost:5000/singleProduct/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)  
      console.log(data);
    })
},[id])


return (
    <div className="grid md:grid-cols-2 gap-10 px-4 ">

            <div className="">
                <img className="lg:w-full lg:h-96" src={Product.image} alt="" />
            </div>
            
            <div className="py-5">
                <h1 className="text-3xl">Subcategory_Name: <span className="font-extrabold">{Product.Subcategory_Name}</span></h1>
                <h1 className="text-3xl">Price: <span className="font-extrabold">{Product.price}</span></h1>
                <h1 className="text-3xl">Rating: <span className="font-extrabold">{Product.rating}</span></h1>
                <h1 className="text-3xl">Customization: <span className="font-extrabold">{Product.Customization}</span></h1>
                <h1> <span className="text-3xl">Short_Description:</span> <span className="font-bold"> {Product.Short_Description}</span></h1>
            </div>
                       
        </div>

    );
};

export default SingleDetails;




