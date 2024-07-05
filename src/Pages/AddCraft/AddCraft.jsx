import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleAddCraft = (e) =>{
  e.preventDefault()
  // console.log(user);

  const Category_Name =e.target.Category_Name.value
  const image =e.target.image.value
  const Subcategory_Name =e.target.Subcategory_Name.value
  const Short_Description =e.target.Short_Description.value
  const price =e.target.price.value
  const rating =e.target.rating.value
  const Customization =e.target.Customization.value
  const Processing_Time =e.target.Processing_Time.value
  const email =user.email
  //  const type = e.target.type.value;
  // console.log('Kkkkkkkkkkkkkkkk');
  const info = {Category_Name,price,image,Subcategory_Name,Short_Description,rating,Customization,Processing_Time,email}
  console.log(info);



  fetch('http://localhost:5000/add',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(info)
  })
  .then(res=>res.json())
  .then(data =>{
    console.log(data)
    if(data.insertedId){
      Swal.fire({
        title: 'Success!',
        text: 'User added Successfully.',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })
}

  return (
    
    <div>
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        {/* form */}
        <form onSubmit={handleAddCraft}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
              <span className="text-xl font-bold">Category_Name</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Category_Name"
                id="Category_Name"
                name="Category_Name"
              />


              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                 <span className="text-xl font-bold">Subcategory_Name</span>
              </label>
              <select
                name="Subcategory_Name"
                id="Subcategory_Name"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
              >
                <option value="Landscape Painting" >
                Landscape Painting
                </option>
                <option value="Portrait Drawing" >
                Portrait Drawing
                </option>
                <option value="WaterColor Painting" >
                WaterColor Painting
                </option>
                <option value="Oil Painting" >
                Oil Painting
                </option>
                <option value="Charcoal Sketching" >
                Charcoal Sketching
                </option>
                <option value="Cartoon Drawing" >
                Cartoon Drawing
                </option>
              </select>

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
              />
              {/* _____________________*/}
              
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                  <span className="text-xl font-bold">Customization</span>
              </label>
              <select
                name="Customization"
                id="Customization"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Brand"
              >
                <option value="Yes !" >
                  Yes !
                </option>
                <option value="No !">
                  No !
                </option>
                   
              </select>
              {/* -__________________ */}
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                <span className="text-xl font-bold">Image</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type= "text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
              <span className="text-xl font-bold">Short_Description</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Short_Description"
                id="Short_Description"
                name="Short_Description"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                <span className="text-xl font-bold">Rating</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />
              {/* ____________ */}
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                 <span className="text-xl font-bold">Processing_Time</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={500000000}
                max={500000000}
                min={0}
                type="number || text"
                placeholder="1/2...Days"
                id="Processing_Time"
                name="Processing_Time"
              />
            </div>
          </div>

          <input
            className="px-4 w-full py-3 mt-10 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
