import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex px-4 ">
      <h1 className="text-pink-600 text-xl font-extrabold">Breaking News:</h1>
      <Marquee className="font-medium text-xl">
      Join us our Art-Maker for a celebration of local artistry and interactive family activities (Arts Maker...). <br />
      <span className="text-green-500">Today for only 25% discount.</span>     
      </Marquee>
    </div>
  );
};

export default BreakingNews;
