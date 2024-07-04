import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItem] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/my/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user,control]);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You Want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
 
        // console.log('delete Confirmed')

        fetch(`http://localhost:5000/my/${id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setControl(!control)
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="lg:text-4xl text-center">
        <span className="text-purple-500">Hey!</span> {user?.email}{" "}
      </h1>

      {items?.map((item) => (
        <div className="p-2 border-4 mt-4" key={item._id}>
          <div className="lg:flex lg:justify-between text-center items-center ">
            <img
              className="w-28 h-28 md:ml-0 ml-28 mb-2"
              src={item.image}
              alt=""
            />
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
            <div className="flex gap-10 justify-center">
              <Link to={`/details/${item._id}`}>
                 <button className="btn btn-outline btn-success">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-outline btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyList;
