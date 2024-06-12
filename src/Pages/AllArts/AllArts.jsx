import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AllArts = () => {
  const { user } = useContext(AuthContext);
  const [items, setItem] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:5000/my/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);




  return (
    <div>
      <h1 className="lg:text-4xl text-center">
        <span className="text-purple-500">Hey!</span> {user?.email}{" "}
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {items?.map((item) => (
          <div className="p-2 border-4 mt-4 " key={item._id}>
            <div className=" ">
              <img className="lg:w-full lg:h-96" src={item.image} alt="" />
              <h1 className="mb-2">
                <span className="text-xl font-bold">Subcategory_Name:</span>{" "}
                {item.Subcategory_Name}
              </h1>
              <h1 className="mb-2">
                <span className="text-xl font-bold">Price:</span> {item.price}
              </h1>
              <h1 className="mb-2">
                <span className="text-xl font-bold">Rating:</span> {item.rating}
              </h1>
              <h1 className="mb-2">
                <span className="text-xl font-bold">Customization:</span>{" "}
                {item.Customization}
              </h1>
              <div className="">
                <Link to="/details">
                <button className="btn btn-outline btn-warning">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArts;


// loader:({params})=>fetch(`http://localhost:5000/${params.id}`)