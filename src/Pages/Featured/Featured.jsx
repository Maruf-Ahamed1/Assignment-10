import { useEffect, useState } from "react";
import SingleView from "../SingleView/SingleView";


const Featured = () => {
    const [element,setElement] = useState([])

    useEffect( ()=> {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setElement(data))
    }, [] )

    return (
        <div>
            {/* <h1 className="text-xl">Subcategory_Name: {element.length} </h1> */}
               <div className="grid md:grid-cols-3 gap-10">
                  {
                     element.map(Item=>  <SingleView key={Item.id} Props={Item}></SingleView>)
                  }
               </div>     
            
        </div>
    );
};

export default Featured;

         
