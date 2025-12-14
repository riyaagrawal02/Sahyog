import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif text-blue-500">
          Sahyog 
        </h1>

        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-indigo-600">Explore</a>
          <a href="#" className="hover:text-indigo-600">Roadmaps</a>
          <a href="#" className="hover:text-indigo-600">Mentors</a>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-500 transition">
            Ask Doubt
          </button>

          <User className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
