import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddCourse = () => {
  const [categories, setCategories] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [courseDescription, setCourseDescription] = useState(""); // State for course description
  const [brochure, setBrochure] = useState(null); // State for brochure file

  // Fetch categories
  const fetchCategories = () => {
    fetch("http://localhost:8080/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  };

  // Fetch instructors
  const fetchInstructors = () => {
    fetch("http://localhost:8080/api/instructors")
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.error("Error fetching instructors:", error));
  };

  useEffect(() => {
    fetchCategories();
    fetchInstructors();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/api/courses", {
        course_Name: data.course_Name,
        url_Slug: data.url_Slug,
        featured_Option: data.featured_Option,
        course_Image: data.course_Image, // Send the image path as a string
        video_Id: data.video_Id,
        course_Category: data.course_Category,
        Skill_Level: data.Skill_Level,
        Short_Description: data.Short_Description,
        Course_Description: courseDescription, // Use the state variable for CKEditor content
        Instructor: data.instructor, // Ensure instructor ID is passed
        Monthly_Fee: data.Monthly_Fee,
        Admission_Fee: data.Admission_Fee,
        Duration_Months: data.Duration_Months,
        Duration_Day: data.Duration_Day,
        Meta_Title: data.Meta_Title,
        Meta_Description: data.Meta_Description,
        Brochure: data.Brochure,
        Status: data.Status,
        View_On_Web: data.View_On_Web,
        In_Sitemap: data.In_Sitemap,
        Page_Index:data.Page_Index,
        Custom_Canonical_Url:data.Custom_Canonical_Url
      });
  
      console.log("Course added successfully:", response.data);
    } catch (error) {
      console.error("Error adding course:", error.response || error.message);
    }
  };
  
  
  
  return (
    <div className="w-full overflow-y-auto">
      <Header />
      <div className="p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6 text-center">
          Add Course
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Course Name */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Course Name*</label>
            <input
              type="text"
              {...register("course_Name", { required: true })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              placeholder="Enter course name"
            />
            {errors.courseName && (
              <span className="text-red-500">Course Name is required</span>
            )}
          </div>

          {/* URL Slug */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">URL Slug*</label>
            <input
              type="text"
              {...register("url_Slug", { required: true })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              placeholder="Enter URL slug"
            />
            {errors.urlSlug && (
              <span className="text-red-500">URL Slug is required</span>
            )}
          </div>

          {/* Featured Option */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Featured*</label>
            <select
              {...register("featured_Option", { required: true })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.featured && (
              <span className="text-red-500">Featured option is required</span>
            )}
          </div>

          {/* Course Image */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Course Image*</label>
            <input
              type="text"
              {...register("course_Image", { required: true })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              accept="image/*"
            />
            {errors.courseImage && (
              <span className="text-red-500">Course Image is required</span>
            )}
          </div>
          {/* Video ID */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Video ID*</label>
            <input
              type="text"
              {...register("video_Id", { required: true })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              placeholder="Enter Video ID"
            />
            {errors.videoID && (
              <span className="text-red-500">Video ID is required</span>
            )}
          </div>

          {/* Course Category */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Course Category*</label>
            <select
              {...register("course_Category", { required: true })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.Category_Name}
                </option>
              ))}
            </select>
            {errors.courseCategory && (
              <span className="text-red-500">Course Category is required</span>
            )}
          </div>

          {/* Skill Level */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Skill Level*</label>
            <select {...register("Skill_Level", { required: true })} className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="all">Appropriate for All</option>
            </select>
            {errors.skillLevel && <span className="text-red-500">Skill Level is required</span>}
          </div>

          {/* Short Description */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Short Description*</label>
            <textarea
              {...register("Short_Description", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter short description"
            />
            {errors.shortDescription && <span className="text-red-500">Short Description is required</span>}
          </div>

          {/* Course Description (CKEditor) */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Course Description*</label>
            <CKEditor
              editor={ClassicEditor}
              data={courseDescription}
              onChange={(event, editor) => {
                const data = editor.getData();
                setCourseDescription(data);
              }}
            />
            {errors.courseDescription && <span className="text-red-500">Course Description is required</span>}
          </div>

          
          {/* Instructor */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Instructor*</label>
            <select {...register("Instructor", { required: true })} className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'>
              {instructors.map((instructor) => (
                <option key={instructor._id} value={instructor._id}>
                  {instructor.name}
                </option>
              ))}
            </select>
            {errors.instructor && <span className="text-red-500">Instructor is required</span>}
          </div>

          {/* Monthly Fee */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Monthly Fee*</label>
            <input
              type='number'
              {...register("Monthly_Fee", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter monthly fee"
            />
            {errors.monthlyFee && <span className="text-red-500">Monthly Fee is required</span>}
          </div>

          {/* Admission Fee */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Admission Fee*</label>
            <input
              type='number'
              {...register("Admission_Fee", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter admission fee"
            />
            {errors.admissionFee && <span className="text-red-500">Admission Fee is required</span>}
          </div>

          {/* Duration Months */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Duration Months*</label>
            <input
              type='number'
              {...register("Duration_Months", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter duration in months"
            />
            {errors.durationMonths && <span className="text-red-500">Duration in Months is required</span>}
          </div>

          {/* Duration Days */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Duration Days*</label>
            <input
              type='number'
              {...register("Duration_Day", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter duration in days"
            />
            {errors.durationDays && <span className="text-red-500">Duration in Days is required</span>}
          </div>

          {/* Meta Title */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Meta Title*</label>
            <input
              type='text'
              {...register("Meta_Title", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter meta title"
            />
            {errors.metaTitle && <span className="text-red-500">Meta Title is required</span>}
          </div>

          {/* Meta Description */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Meta Description*</label>
            <textarea
              {...register("Meta_Description", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter meta description"
            />
            {errors.metaDescription && <span className="text-red-500">Meta Description is required</span>}
          </div>

          {/* Brochure */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Brochure*</label>
            <textarea
              {...register("Brochure", { required: true })}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Brouchure Link"
            />
            {errors.metaDescription && <span className="text-red-500">Brochure is required</span>}
          </div>

          {/* Status */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Status*</label>
            <select {...register("Status", { required: true })} className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.status && <span className="text-red-500">Status is required</span>}
          </div>

          {/* Is View on Web? */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Is View on Web?*</label>
            <select {...register("View_On_Web", { required: true })} className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.isViewOnWeb && <span className="text-red-500">Selection is required</span>}
          </div>

          {/* In Sitemap */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>In Sitemap?*</label>
            <select {...register("In_Sitemap", { required: true })} className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.inSitemap && <span className="text-red-500">Selection is required</span>}
          </div>

          {/* Page Index */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Page Index?*</label>
            <select {...register("Page_Index", { required: true })} className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.pageIndex && <span className="text-red-500">Selection is required</span>}
          </div>

          {/* Custom Canonical URL */}
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2'>Custom Canonical URL</label>
            <input
              type='text'
              {...register("Custom_Canonical_Url")}
              className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
              placeholder="Enter custom canonical URL"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
