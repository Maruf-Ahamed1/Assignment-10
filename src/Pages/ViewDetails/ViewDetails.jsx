import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {

const {id} = useParams()
console.log(id);
const [details,setDetails] = useState({})


useEffect(()=>{
    fetch(`http://localhost:5000/singleDetails/${id}`)
    .then(res => res.json())
    .then(data => {
        setDetails(data)
        console.log(data);
    })
},[id])


const handleUpdate =(e) => {
  e.preventDefault()

    const Category_Name =e.target.Category_Name.value
    const price =e.target.price.value
    const info = {Category_Name,price }
  
       fetch(`http://localhost:5000/updateCraft/${id}`,{
        method:"PUT",
        headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(info)
    })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        })

     const handleUpdate = (e) =>  {
      e.preventDefault()
    
      const Category_Name =e.target.Category_Name.value
      const price =e.target.price.value
      const info = {Category_Name,price}
      fetch(`http://localhost:5000/updateCraft/${id}`,{
        method:"PUT",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(info)
      })
     } 

}

   
    return (
        <div>
            <h1> view details page </h1>
            <form onSubmit={handleUpdate} action="">
            <label className="block mb-2 dark:text-white" htmlFor="name">
              <span className="text-xl font-bold">Category_Name</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Category_Name"
                id="Category_Name"
                name="Category_Name"
                defaultValue={details.Category_Name}
              />

            <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                <span className="text-xl font-bold">Price</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
                defaultValue={details.price}
              />

              
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Craft"
          />
            </form>
        </div>
    );
};

export default ViewDetails;