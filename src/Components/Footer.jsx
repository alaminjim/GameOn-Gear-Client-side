import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#1C1C23]">
      <div className="lg:flex justify-evenly pt-12 space-y-6 pl-6 md:grid md:grid-cols-2 md:pl-20">
        <section className="text-white ">
          <h1 className="text-3xl font-bold text-[#B5BE2D]">GAMEoN_GEAR</h1>
          <p className="pt-4">
            GAMEoN_GEAR is a leader in sports goods in <br></br>Bangladesh
            having a very strong image and <br></br>reputation in the industry.
          </p>
        </section>
        <section className="text-white">
          <h1>CONTACT US</h1>
          <span className="space-y-1.5 text-gray-200">
            <p className="flex">
              <FaMobileAlt className="pr-1.5 w-5 h-5"></FaMobileAlt>Sales:
              xxxxxxxx
            </p>
            <p className="flex ">
              <FaMobileAlt className="pr-1.5 w-5 h-5"></FaMobileAlt>Leader:
              xxxxxxxx
            </p>
            <p className="flex ">
              <FaMobileAlt className="pr-1.5 w-5 h-5"></FaMobileAlt>info:
              xxxxxxx
            </p>
            <p className="flex">
              <FaMailBulk className="w-6 h-6"></FaMailBulk>
              <a className="pl-1.5">mail: info@gmail.com</a>
            </p>
          </span>
        </section>
        <section className="text-white">
          <h1>INFORMATION</h1>
          <span className="space-y-1.5 text-gray-200">
            <p>About Us</p>
            <p>Our Store</p>
            <p>Terms and Condition</p>
            <p>Privacy & Policy</p>
          </span>
        </section>
        <section className="text-white">
          <h1>CUSTOMER SERVICE</h1>
          <span className="text-gray-200 space-y-1.5">
            <p>How to order</p>
            <p>My Account</p>
            <p>Return & Exchange</p>
            <p>Repair & Services</p>
          </span>
        </section>
      </div>
      <hr className="text-white mt-22 mr-20 ml-20"></hr>
      <div className="text-center mt-9 space-y-6">
        <div className="flex text-white justify-center items-center gap-2.5">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <p className="text-center text-white">
          Copyright © {new Date().getFullYear()} - All right reserved by
          GAMEoN_GEAR
        </p>
      </div>
    </div>
  );
};

export default Footer;
