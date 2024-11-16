import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-3 bg-base-200 p-3">
           <p className="bg-red-400 px-3 py-2 text-white w-fit">Latest</p>
           <Marquee pauseOnHover className="gap-10" >
           <p>
            <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, esse?</Link>
           </p>
           <p>
            <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, esse?</Link>
           </p>
           <p>
            <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, esse?</Link>
           </p>
           </Marquee>
        </div>
    );
};

export default LatestNews;