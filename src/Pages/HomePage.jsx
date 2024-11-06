import Homes from "../Layouts/Homes"
import { Link } from "react-router-dom";
import Images from "../assets/Images/dotnet-full-stack-hero-image.png";
function HomePage(){
    return(
        <Homes>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                <h1 className="text-4xl  font-semibold">Find Out Best
                    <span className="text-yellow-500 font-bold">Online Courses</span>
                </h1>
                <p className="text-xl text-gray-200">We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost</p>
                <div className="space-x-6">
                    <Link to="/courses">
                    <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                        Explore courses
                    </button>
                    </Link>
                    <Link to="/contact">
                    <button className="border border-yellow-500  px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                        Contact Us
                    </button>
                    </Link>
                </div>
                </div>
                <div className="w-[400px] h-[400px] flex items-center justify-center">
  <img src={Images} alt="Description" className="w-full  " />
</div>

            </div>

        </Homes>
    );
    
}
export default HomePage;