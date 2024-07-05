import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const Subcategory_Name=e.target.Subcategory_Name.value;
    const price = e.target.price.value;
    const Short_Description=e.target.Short_Description.value
    const rating=e.target.rating.value
    const info = {  price,Short_Description,rating,Subcategory_Name};

    fetch(`http://localhost:5000/updateCraft/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })


    
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

// __________________________________________________________//
      
    const handleUpdate= (e) => {
      e.preventDefault();

      const Subcategory_Name=e.target.Subcategory_Name.value;
      const price = e.target.price.value;
      const Short_Description=e.target.Short_Description.value;
      const rating=e.target.rating.value;
      const info = { price,Short_Description,rating,Subcategory_Name};
      fetch(`http://localhost:5000/updateCraft/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
    };
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-purple-400"> Update details page </h1>

      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        <form onSubmit={handleUpdate} action="">
          <div className="flex gap-8 ">
            {/* Left Side */}
            <div className="flex-1">
        

            <label
                className="block  mb-2 dark:text-white"
                htmlFor="brand"
              >
                 <span className="text-xl font-bold">Subcategory_Name</span>
              </label>
              <select
                name="Subcategory_Name"
                defaultValue={details.Subcategory_Name}
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
                defaultValue={details.price}
              />
            </div>

            {/* Right Side */}
            <div className="flex-1">
            <label className="block mb-2  dark:text-white" htmlFor="type">
              <span className="text-xl font-bold">Short_Description</span>
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Short_Description"
                id="Short_Description"
                name="Short_Description"
                defaultValue={details.Short_Description}
              />
              {/* ___Rating */}
     
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
                defaultValue={details.Short_Description}
              />



            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#54db35] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Craft"
          />
        </form>
      </div>
    </div>
  );
};

export default ViewDetails;
