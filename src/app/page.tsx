import Image from "next/image";
import { AiFillHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiFillPhone } from "react-icons/ai";
import { FaHome, FaUser, FaFileAlt, FaServicestack } from 'react-icons/fa';

export default function Home() {
  return (
     <div className="min-h-screen flex flex-col bg-white">
      {/* Content Section: Sidebar + Hero */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow-lg">
          <div className="text-2xl font-bold mb-6">Phan Nguyễn Duy Bảo</div>
          <ul className="space-y-4">
            {/* Home */}
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-orange-400">
                <span className="bg-pink-600 p-2 rounded-full">
                  <AiFillHome className="text-white text-2xl" />
                </span>
                <div>
                  <h4 className="font-bold">Home</h4>
                  <p className="text-sm">Start to know me</p>
                </div>
              </a>
            </li>

            {/* About */}
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-green-500 to-green-400">
                <span className="bg-green-600 p-2 rounded-full">
                  <AiOutlineUser className="text-white text-2xl" />
                </span>
                <div>
                  <h4 className="font-bold">About</h4>
                  <p className="text-sm">Who I am</p>
                </div>
              </a>
            </li>

            {/* Portfolio */}
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-400">
                <span className="bg-blue-600 p-2 rounded-full">
                  <AiOutlineFundProjectionScreen className="text-white text-2xl" />
                </span>
                <div>
                  <h4 className="font-bold">Portfolio</h4>
                  <p className="text-sm">My work</p>
                </div>
              </a>
            </li>

            {/* Contact */}
            <li>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-purple-400">
                <span className="bg-purple-600 p-2 rounded-full">
                  <AiFillPhone className="text-white text-2xl" />
                </span>
                <div>
                  <h4 className="font-bold">Contact</h4>
                  <p className="text-sm">Get in touch</p>
                </div>
              </a>
            </li>
          </ul>
        </aside>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center bg-gray-100">
          <div className="text-center space-y-6 px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-extrabold">I Am Phan Nguyễn Duy Bảo Frontend Developer From VungTau City.</h1>
            <p className="text-lg md:text-xl text-gray-700">A Professional Portfolio Template</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Portfolio</button>
          </div>
        </main>
      </div>

      {/* Footer: luôn ở dưới */}
      <footer className="bg-gray-200 w-full text-center py-4">
        &copy; {new Date().getFullYear()} Phan Nguyễn Duy Bảo. All rights reserved.
      </footer>
    </div>
  );
}
