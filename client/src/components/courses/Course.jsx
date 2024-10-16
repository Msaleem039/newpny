import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]); // Store the original courses from the API
  const [filteredCourses, setFilteredCourses] = useState([]); // Filtered courses displayed in the table
  const location = useLocation();

  // Fetch courses from the API
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/courses");
   
      setCourses(response.data); // Set both courses and filteredCourses initially
      setFilteredCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    // Filter courses based on the search term, checking both name and email
    const filtered = courses.filter(
      (course) =>
        (course.name && course.name.toLowerCase().includes(term)) ||
        (course.email && course.email.toLowerCase().includes(term))
    );
    setFilteredCourses(filtered);
  };

  // Check if the current route is 'addcourse'
  const isAddCoursePage = location.pathname.includes("addcourse");

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {!isAddCoursePage && (
        <>
          <div className='text-center items-center mb-6'>
            {/* Title */}
            <h2 className='text-2xl font-semibold text-gray-100 mb-5 cursor-pointer'>
              Courses
            </h2>

            <hr className="w-full h-1 bg-slate-500 rounded-sm" />

            {/* Search and Add Course Button */}
            <div className='my-5 flex justify-center lg:justify-between items-center space-x-4'>
              {/* Search Bar */}
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search courses...'
                  className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
              </div>

              {/* Add Course Button */}
              <Link to='/addcourse'>
                <button className='bg-blue-600 hover:bg-blue-500 text-white hidden sm:block font-semibold py-2 px-4 rounded-lg transition-all duration-300'>
                  Add Courses
                </button>
              </Link>
            </div>
          </div>

          {/* Table */}
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-700'>
              <thead>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Name
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Description
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Image
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Status
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-700'>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <motion.tr
                      key={course.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                              {course.name ? course.course_Name.charAt(0) : "?"}
                            </div>
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-100'>
                              {course.course_Name || "N/A"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-300'>{course.Short_Description || "N/A"}</div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
                         <img src= {course.course_Image || "N/A"} />
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            course.status === 'Active'
                              ? 'bg-green-800 text-green-100'
                              : 'bg-red-800 text-red-100'
                          }`}
                        >
                          {course.status || "N/A"}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                        <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                          Edit
                        </button>
                        <button className='text-red-400 hover:text-red-300'>
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-400">
                      No courses found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Render the Add Course form if on the 'addcourse' route */}
      <Outlet />
    </motion.div>
  );
};

export default Courses;
