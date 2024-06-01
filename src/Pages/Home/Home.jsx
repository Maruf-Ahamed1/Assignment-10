const Home = () => {
  return (
    <div>
      <div className="carousel w-full">
        {//_______________________--111111________________________ */}
        <div id="slide1" className="carousel-item relative  w-full">
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/fTQ2XLv4/pexels-mali-63238.jpg)",
            }}
          >



            
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-yellow-400">Mural Painting </h1>
                <p className="mb-5 text-xl font-medium">
                Murals are large-scale paintings applied directly to walls or ceilings, often incorporating architectural elements into their design.
                </p>
              </div>
            </div>
          </div>




          {/* ------------------------------------------ */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        /* ---------------------2222222------------------------- */}
        <div id="slide2" className="carousel-item relative   w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/d0VS1xjL/pexels-olgalioncat-7245320.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-yellow-400">Statue Painting</h1>
                <p className="mb-5 text-xl font-medium">
                Statue art paintings celebrate the intersection of sculpture and painting, showcasing the artists ability to render three-dimensional forms on a flat surface.
                </p>
              </div>
            </div>
          </div>



          {/* ------------------------------------------ */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* ----------------------33333--------------------------- */}

        <div id="slide3" className="carousel-item relative h-[70vh] w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/MK1LrRGK/pexels-pavel-danilyuk-8382636.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-yellow-400">Pencil sketch portrait Painting</h1>
                <p className="mb-5 text-xl font-medium">
                Pencil sketch portrait drawing is a timeless and rewarding art form that requires a keen eye for detail, mastery of shading techniques, and patience.
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* -----------------------------44444-------------------------------------- */}
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/Yqkc78Zm/pexels-david-waschbusch-959602-1887946.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-yellow-400">Water Painting</h1>
                <p className="mb-5 text-xl font-medium">
                Water paintings are a rich and varied genre that requires a deep understanding of light, color, and texture.
                </p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------- */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
