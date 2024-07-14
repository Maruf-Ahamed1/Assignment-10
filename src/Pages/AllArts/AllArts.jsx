import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Featured from "../Featured/Featured";

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
        <span className="text-yellow-400 text-2xl font-bold">Explore our most beautiful Art & Craft</span>
        <br />
        <span className="text-purple-500">Hey!</span> {user?.email}{" "}
      </h1>
    
    {/* ________________SIX View Item__________________ */}

    <Featured></Featured>

     {/* ________________SIX View Item__________________ */}






      {/* This is dynamic Add Product */}
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
                <Link to={`/Details/${item._id}`}>
                <button className="btn btn-outline btn-warning">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* This is dynamic Add Product */}

    </div>
  );
};

export default AllArts;







{/* Number_1*/}
{/* <div className="grid md:grid-cols-3 gap-10">
<div className="p-2 border-4 mt-4 " key="">
  <div className=" ">
    <img className="lg:w-full lg:h-96" src="https://i.postimg.cc/DfqzGbVL/Mountain-view-canvas.jpg" alt="" />
    <h1 className="mb-2">
      <span className="text-xl ">Subcategory_Name: Landscape Painting </span>{" "}
      
    </h1>
    <h1 className="mb-2">
      <span className="text-xl">Price: $ 40</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Rating: 4</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Customization: NO </span>{" "}
    <h1 className="mb-2 mt-2">
      <span className="text-xl ">Short_Description: <span> Above the mountains, the sky is a mesmerizing gradient of colors, transitioning from a soft, pastel pink near the horizon to a deep, rich blue at the top of the canvas. Fluffy, white clouds are scattered across the sky, their edges tinged with the warm colors of the setting sun.</span>  </span>
    </h1> 
    </h1>
    <div className="mt-4">
      <Link to="">
      <button className="btn btn-outline btn-warning">View Details</button>
      </Link>
    </div>
  </div>
</div>

{/* Number_2*/}
{/* <div className="p-2 border-4 mt-4 " key="">
  <div className=" ">
    <img className="lg:w-full lg:h-96" src="https://i.postimg.cc/xTRm9ZYb/Pencil-Sketch-Portrait.jpg" alt="" />
    <h1 className="mb-2">
      <span className="text-xl ">Subcategory_Name:  Portrait Drawing</span>{" "}
      
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Price: $70</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Rating: 5</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Customization: YES ! </span>{" "}
    <h1 className="mb-2 mt-2 details">
      <p className="text-xl  ">Short_Description: <span> A pencil sketch portrait is a classic and intimate art form that captures the likeness and personality of a person through delicate lines and shading. It focuses on capturing details such as facial features, expressions, and textures with the subtlety and nuance that pencil allows. Often used for its ability to convey emotion and depth, pencil sketch portraits range from quick, expressive sketches to highly detailed renderings, showcasing the artist's skill in capturing the essence of the subject.</span>  </p>
             
    </h1>  
    </h1>
    <div className="mt-4">
      <Link to="">
      <button className="btn btn-outline btn-warning">View Details</button>
      </Link>
    </div>
  </div>
</div> */}
{/* Number_3*/}
{/* <div className="p-2 border-4 mt-4 " key="">
  <div className=" ">
    <img className="lg:w-full lg:h-96" src="https://i.postimg.cc/26Q62qSB/Floral-Watercolor-Art.jpg" alt="" />
    <h1 className="mb-2">
      <span className="text-xl ">Subcategory_Name: WaterColor Painting</span>{" "}
      
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Price: $50</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Rating: 3</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Customization: No !</span>{" "}
    </h1>
    <h1 className="mb-2">
      <span className="text-xl">Short_Description: <span>The watercolor painting showcases a serene landscape, rendered with the ethereal quality that only watercolor can provide. The artist has expertly used the medium’s inherent transparency and fluidity to create a scene that is both vibrant and calming.   </span>  </span>
    </h1>
    <div className="mt-4">
      <Link to="/SixView">
      <button className="btn btn-outline btn-warning">View Details</button>
      </Link>
    </div>
  </div>
</div> */}
{/* Number_4*/}
{/* <div className="p-2 border-4 mt-4 " key="">
  <div className=" ">
    <img className="lg:w-full lg:h-96" src="https://i.postimg.cc/nz27wRby/abstract-oil-painting-2.jpg" alt="" />
    <h1 className="mb-2">
      <span className="text-xl ">Subcategory_Name: Oil Painting</span>{" "}
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Price: $60</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Rating: 3</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Customization: NO ! </span>{" "}
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Short_Description: <span>Abstract oil painting is a contemporary art form that emphasizes shape, color, and texture over realistic representation. It often conveys emotions, concepts, or ideas through non-representational forms. Characterized by fluidity and complexity, abstract oil paintings invite viewers to interpret and connect with the artwork on a personal level.  </span>  </span>
    </h1>
    <div className="mt-4">
      <Link to="">
      <button className="btn btn-outline btn-warning">View Details</button>
      </Link>
    </div>
  </div>
</div> */}
{/* Number_5*/}
{/* <div className="p-2 border-4 mt-4 " key="">
  <div className=" ">
    <img className="lg:w-full lg:h-96" src="https://i.postimg.cc/7LD583Vw/Architectural-Charcoal.jpg" alt="" />
    <h1 className="mb-2">
      <span className="text-xl ">Subcategory_Name:  Charcoal Sketching</span>{" "}
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Price: $100</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Rating: 5</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Customization: YES ! </span>{" "}
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Short_Description: <span>A figure charcoal sketch is a dynamic and expressive form of art that captures the essence and movement of the human figure using charcoal as the medium. It focuses on capturing the gestures, proportions, and shadows of the figure with bold strokes and subtle shading. Charcoal's versatility allows artists to create both detailed renderings and expressive, gestural sketches that convey mood and emotion effectively</span>  </span>
    </h1>
    <div className="mt-4">
      <Link to="">
      <button className="btn btn-outline btn-warning">View Details</button>
      </Link>
    </div>
  </div>
</div> */}
{/* Number_6*/}
{/* <div className="p-2 border-4 mt-4 " key="">
  <div className=" ">
    <img className="lg:w-full lg:h-96" src="https://i.postimg.cc/jSY5PHBP/Superhero-Cartoon-Design.jpg" alt="" />
    <h1 className="mb-2">
      <span className="text-xl ">Subcategory_Name: Cartoon Drawing</span>{" "}
      
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Price: $80</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Rating: 4</span> 
    </h1>
    <h1 className="mb-2">
      <span className="text-xl ">Customization: NO !</span>{" "}
    </h1>
    <h1 className="mb-4">
      <span className="text-xl ">Short_Description: <span>Superhero cartoon design is a vibrant and imaginative genre that blends fantastical elements with exaggerated proportions and dynamic poses. It often features characters with extraordinary abilities, distinct costumes, and strong, heroic expressions. These designs emphasize bold lines, bright colors, and larger-than-life personalities to convey themes of courage, justice, and adventure, appealing to audiences of all ages with their iconic and memorable visual style.  </span>  </span>
    </h1>
    <div className="mt-4">
      <Link to="">
      <button className="btn btn-outline btn-warning">View Details</button>
      </Link>
    </div>
  </div>
</div> */}

