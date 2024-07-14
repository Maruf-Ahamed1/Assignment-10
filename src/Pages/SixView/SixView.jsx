import { useLoaderData, useParams } from "react-router-dom";

const SixView = () => {
    const Data = useLoaderData()
    const {id} = useParams()
    const one = Data.find(one => one.id === id);
    // console.log(Data,id)
    // console.log(one)

    return (
        <div className="grid md:grid-cols-2 gap-10 px-4 ">

            <div className="">
                <img className="lg:w-full lg:h-96" src={one.image} alt="" />
            </div>
            
            <div className="py-5">
                <h1 className="text-2xl">Subcategory_Name: <span className="font-extrabold">{one.Subcategory_Name}</span></h1>
                <h1 className="text-2xl">Price: <span className="font-extrabold"> $ {one.Price}</span></h1>
                <h1 className="text-2xl">Rating: <span className="font-extrabold">{one.rating}</span></h1>
                <h1 className="text-2xl">Customization: <span className="font-extrabold">{one.Customization}</span></h1>
                <h1> <span className="text-2xl">Short_Description:</span> <span className="font-bold"> {one.Description}</span></h1>
            </div>

        </div>
    );
};

export default SixView;