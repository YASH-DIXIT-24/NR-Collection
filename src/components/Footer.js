import React from "react";
import { Link } from "react-router-dom";
export  default  Footer = () => {
    return (
        <></>
    //   <footer className="bg-custom-grey text-white py-8 absolute w-full bottom-[0px] z-30 top-[100px]">
    //     <div className="container mx-auto px-4">
    //       <div className="flex flex-wrap justify-between">
    //         {/* Company Information */}
    //         <div className="w-full md:w-1/4 mb-6 md:mb-0">
    //           <h5 className="font-bold text-lg mb-2">Rapid Food</h5>
    //           <p className="text-sm">
    //             Your favorite place for fast and delicious meals. Always fresh,
    //             always fast.
    //           </p>
    //         </div>
            
    //         {/* Navigation Links */}
    //         <div className="w-full md:w-1/4 mb-6 md:mb-0">
    //           <h5 className="font-bold text-lg mb-2">Navigation</h5>
    //           <ul>
    //             <li className="mb-2">
    //               <Link to="/" className="hover:underline">Home</Link>
    //             </li>
    //             <li className="mb-2">
    //               <Link to="/menu" className="hover:underline">Menu</Link>
    //             </li>
    //             <li className="mb-2">
    //               <Link to="/about" className="hover:underline">About Us</Link>
    //             </li>
    //             <li className="mb-2">
    //               <Link to="/contact" className="hover:underline">Contact</Link>
    //             </li>
    //           </ul>
    //         </div>
  
    //         {/* Social Media Links */}
    //         <div className="w-full md:w-1/4 mb-6 md:mb-0">
    //           <h5 className="font-bold text-lg mb-2">Follow Us</h5>
    //           <div className="flex space-x-4">
    //             <a href="https://facebook.com" className="hover:text-gray-400">
    //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M18.896 2H5.104A3.108 3.108 0 002 5.104v13.792A3.108 3.108 0 005.104 22h7.418v-6.742H9.607v-2.634h2.915v-1.947c0-2.899 1.773-4.478 4.363-4.478 1.241 0 2.309.092 2.619.134v3.034l-1.797.001c-1.409 0-1.68.67-1.68 1.653v2.157h3.36l-.437 2.634h-2.923V22h5.729A3.108 3.108 0 0022 18.896V5.104A3.108 3.108 0 0018.896 2z" />
    //               </svg>
    //             </a>
    //             <a href="https://twitter.com" className="hover:text-gray-400">
    //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.924 4.924 0 002.163-2.723 9.825 9.825 0 01-3.127 1.194 4.92 4.92 0 00-8.379 4.482 13.974 13.974 0 01-10.141-5.146 4.903 4.903 0 001.523 6.564 4.903 4.903 0 01-2.228-.616v.061a4.92 4.92 0 003.946 4.827 4.922 4.922 0 01-2.224.084 4.928 4.928 0 004.604 3.416A9.873 9.873 0 010 19.54a13.933 13.933 0 007.548 2.211c9.142 0 14.307-7.721 14.307-14.417 0-.22-.004-.438-.013-.653a10.325 10.325 0 002.532-2.637l.002-.003z" />
    //               </svg>
    //             </a>
    //             <a href="https://instagram.com" className="hover:text-gray-400">
    //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //                 <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.057 2.073.25 2.55.416a5.107 5.107 0 011.852 1.1 5.107 5.107 0 011.1 1.852c.166.477.36 1.291.416 2.55.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.057 1.259-.25 2.073-.416 2.55a5.107 5.107 0 01-1.1 1.852 5.107 5.107 0 01-1.852 1.1c-.477.166-1.291.36-2.55.416-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.057-2.073-.25-2.55-.416a5.107 5.107 0 01-1.852-1.1 5.107 5.107 0 01-1.1-1.852c-.166-.477-.36-1.291-.416-2.55-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.057-1.259.25-2.073.416-2.55a5.107 5.107 0 011.1-1.852 5.107 5.107 0 011.852-1.1c.477-.166 1.291-.36 2.55-.416 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.278.058-2.157.26-2.91.545a7.486 7.486 0 00-2.725 1.729 7.486 7.486 0 00-1.729 2.725c-.285.753-.487 1.632-.545 2.91-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.278.26 2.157.545 2.91a7.486 7.486 0 001.729 2.725 7.486 7.486 0 002.725 1.729c.753.285 1.632.487 2.91.545 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.278-.058 2.157-.26 2.91-.545a7.486 7.486 0 002.725-1.729 7.486 7.486 0 001.729-2.725c.285-.753.487-1.632.545-2.91.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.26-2.157-.545-2.91a7.486 7.486 0 00-1.729-2.725 7.486 7.486 0 00-2.725-1.729c-.753-.285-1.632-.487-2.91-.545-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.16 6.16 0 016.162 6.162 6.16 6.16 0 01-6.162 6.162 6.16 6.16 0 01-6.162-6.162 6.16 6.16 0 016.162-6.162m0 10.026a3.864 3.864 0 100-7.728 3.864 3.864 0 000 7.728zm7.504-10.108a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
            
    //         {/* Contact Information */}
    //         <div className="w-full md:w-1/4">
    //           <h5 className="font-bold text-lg mb-2">Contact Us</h5>
    //           <p className="text-sm">1234 Food Street</p>
    //           <p className="text-sm">Food City, FC 12345</p>
    //           <p className="text-sm">Email: contact@rapidfood.com</p>
    //           <p className="text-sm">Phone: (123) 456-7890</p>
    //         </div>
    //       </div>
  
    //       <div className="mt-8 text-center border-t border-gray-700 pt-4">
    //         <p className="text-sm">&copy; 2024 Rapid Food. All rights reserved.</p>
    //       </div>
    //     </div>
    //   </footer>
    );
  };
  