import { Link } from "react-router-dom";

const SingleView = ({Props}) => {
    const {id,image,Subcategory_Name,Price,rating,Customization,Description} = Props
    return (
        <div className="p-2 border-4 mt-4 ">
            <img className="lg:w-full lg:h-96" src={image} alt="" />
            <h1 className="text-xl mb-1 mt-1">Subcategory_Name:{Subcategory_Name}</h1>
            <h1 className="text-xl mb-1">Price: $ {Price}</h1>
            <h1 className="text-xl mb-1">Rating: {rating}</h1>
            <h1 className="text-xl mb-1">Customization: {Customization}</h1>
            {/* <h1 className="text-xl mb-4">Short_Description: {Description}</h1> */}

           <span className="mb-4">
             {
                Description.length > 60 ? <p>Description : {Description.slice(0,60)} <Link to={`/Six/${id}`}>.....
                    <p className="mt-2"> <button className="btn btn-outline btn-warning">View Details</button></p>
                </Link></p>
                : <p>{Description}</p>
             }
           </span>

       
        </div>
    );
};

export default SingleView;



   {/* <Link to={`/Six/${id}`}>
                <button className="btn btn-outline btn-warning">View Details</button>
      </Link> */}