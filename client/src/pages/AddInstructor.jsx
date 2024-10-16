import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [slug, setSlug] = useState("");
  const [featured, setFeatured] = useState("No");
  const [courseImage, setCourseImage] = useState(null);
  const [videoId, setVideoId] = useState("");
  const [category, setCategory] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [monthlyFee, setMonthlyFee] = useState("");
  const [admissionFee, setAdmissionFee] = useState("");
  const [durationMonths, setDurationMonths] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [brochure, setBrochure] = useState(null);
  const [status, setStatus] = useState("No");
  const [viewOnWeb, setViewOnWeb] = useState("No");
  const [inSitemap, setInSitemap] = useState("No");
  const [pageIndex, setPageIndex] = useState("No");
  const [canonicalUrl, setCanonicalUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Course Added:", {
      courseName,
      slug,
      featured,
      courseImage,
      videoId,
      category,
      skillLevel,
      shortDescription,
      courseDescription,
      instructor,
      monthlyFee,
      admissionFee,
      durationMonths,
      durationDays,
      metaTitle,
      metaDescription,
      brochure,
      status,
      viewOnWeb,
      inSitemap,
      pageIndex,
      canonicalUrl,
    });
    navigate("/courses"); // Redirect to course list page after successful form submission
  };

  return (
    <div className='p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto'>
      <h2 className='text-3xl font-semibold text-gray-100 mb-6 text-center'>
        Add Instructor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Course Name */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='courseName'>
            Course Name 
          </label>
          <input
            type='text'
            id='courseName'
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter course name"
            required
          />
        </div>

        {/* URL Slug */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='slug'>
            URL Slug
          </label>
          <input
            type='text'
            id='slug'
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter URL slug"
            required
          />
        </div>

        {/* Featured Option */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='featured'>
            Featured
          </label>
          <select
            id='featured'
            value={featured}
            onChange={(e) => setFeatured(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Course Image */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='courseImage'>
            Course Image
          </label>
          <input
            type='file'
            id='courseImage'
            onChange={(e) => setCourseImage(e.target.files[0])}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            accept="image/*"
          />
        </div>

        {/* Video ID */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='videoId'>
            Video ID
          </label>
          <input
            type='text'
            id='videoId'
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter video ID"
          />
        </div>

        {/* Course Category */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='category'>
            Course Category
          </label>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
          >
            <option value="">Select Category</option>
            {/* Add category options here */}
          </select>
        </div>

        {/* Skill Level */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='skillLevel'>
            Skill Level
          </label>
          <select
            id='skillLevel'
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="All">Appropriate for All</option>
          </select>
        </div>

        {/* Short Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='shortDescription'>
            Short Description
          </label>
          <textarea
            id='shortDescription'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter short description"
          />
        </div>

        {/* Course Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='courseDescription'>
            Course Description
          </label>
          <textarea
            id='courseDescription'
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter full course description"
          />
        </div>

        {/* Instructor */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='instructor'>
            Instructor
          </label>
          <input
            type='text'
            id='instructor'
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter instructor's name"
            required
          />
        </div>

        {/* Monthly Fee */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='monthlyFee'>
            Monthly Fee
          </label>
          <input
            type='number'
            id='monthlyFee'
            value={monthlyFee}
            onChange={(e) => setMonthlyFee(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter monthly fee"
            required
          />
        </div>

        {/* Admission Fee */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='admissionFee'>
            Admission Fee
          </label>
          <input
            type='number'
            id='admissionFee'
            value={admissionFee}
            onChange={(e) => setAdmissionFee(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter admission fee"
            required
          />
        </div>

        {/* Duration Months */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='durationMonths'>
            Duration (Months)
          </label>
          <input
            type='number'
            id='durationMonths'
            value={durationMonths}
            onChange={(e) => setDurationMonths(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter duration in months"
            required
          />
        </div>

        {/* Duration Days */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='durationDays'>
            Duration (Days)
          </label>
          <input
            type='number'
            id='durationDays'
            value={durationDays}
            onChange={(e) => setDurationDays(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter duration in days"
          />
        </div>

        {/* Meta Title */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='metaTitle'>
            Meta Title
          </label>
          <input
            type='text'
            id='metaTitle'
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter meta title"
          />
        </div>

        {/* Meta Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='metaDescription'>
            Meta Description
          </label>
          <textarea
            id='metaDescription'
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter meta description"
          />
        </div>

        {/* Brochure */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='brochure'>
            Brochure
          </label>
          <input
            type='file'
            id='brochure'
            onChange={(e) => setBrochure(e.target.files[0])}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            accept="application/pdf"
          />
        </div>

        {/* Status */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='status'>
            Status
          </label>
          <select
            id='status'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Is View on Web */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='viewOnWeb'>
            Is View on Web?
          </label>
          <select
            id='viewOnWeb'
            value={viewOnWeb}
            onChange={(e) => setViewOnWeb(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* In Sitemap */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='inSitemap'>
            In Sitemap
          </label>
          <select
            id='inSitemap'
            value={inSitemap}
            onChange={(e) => setInSitemap(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Page Index */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='pageIndex'>
            Page Index
          </label>
          <select
            id='pageIndex'
            value={pageIndex}
            onChange={(e) => setPageIndex(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Custom Canonical URL */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2' htmlFor='canonicalUrl'>
            Custom Canonical URL
          </label>
          <input
            type='url'
            id='canonicalUrl'
            value={canonicalUrl}
            onChange={(e) => setCanonicalUrl(e.target.value)}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md'
            placeholder="Enter canonical URL"
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200'
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
