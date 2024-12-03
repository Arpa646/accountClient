import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white p-9 mt-11">
      <div
        style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: "17px",
          fontWeight: 400,
        }}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
      >
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">OUR RECIPES</h3>
          <ul className="space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                Popular Recipes
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                New Recipes
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Healthy Eating
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Meal Prep Ideas
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Cooking Tips
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">SUPPORT</h3>
          <ul className="space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                Help + FAQs
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Recipe Assistance
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Cooking Guidelines
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">FOOD TIPS & NEWS</h3>
          <ul className="space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                Healthy Tips
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Food News
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Seasonal Recipes
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Meet Our Chefs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">STAY CONNECTED</h3>
          <p className="mb-4">
            Stay updated with our latest recipes, cooking tips, and food news.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 rounded-none border border-white bg-gray-800 text-white"
          />
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="triangle-container">
          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
