import React, { useEffect, useState } from "react";

const CourseCreationForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    whatyouwilllearn: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const formChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [sections, setSections] = useState([
    { title: "", subsections: [{ title: "", description: "", videoUrl: "" }] },
  ]);

  useEffect(() => {
    console.log(sections);
  }, [sections]);

  const handleVideoChange = (e, sectionIndex, subIndex) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const videoUrl = reader.result;
        const updatedSections = [...sections];
        updatedSections[sectionIndex].subsections[subIndex].videoUrl = videoUrl;
        setSections(updatedSections);
        setVideoPreview(videoUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSectionTitleChange = (index, value) => {
    const updatedSections = [...sections];
    updatedSections[index].title = value;
    setSections(updatedSections);
  };

  const handleSubsectionTitleChange = (sectionIndex, subIndex, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subsections[subIndex].title = value;
    setSections(updatedSections);
  };

  const handleSubsectionDescriptionChange = (sectionIndex, subIndex, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subsections[subIndex].description = value;
    setSections(updatedSections);
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        title: "",
        subsections: [{ title: "", description: "", videoUrl: "" }],
      },
    ]);
  };

  const addSubsection = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subsections.push({
      title: "",
      description: "",
      videoUrl: "",
    });
    setSections(updatedSections);
  };

  return (
    <div className="flex justify-center w-full h-max py-10 bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Course</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={formChangeHandler}
            value={formData.title}
            className="input-field px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={formChangeHandler}
            value={formData.description}
            rows={5}
            placeholder="Enter Description"
            className="input-field resize-none px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="learn">
            What you will learn
          </label>
          <textarea
            id="learn"
            onChange={formChangeHandler}
            name="whatyouwilllearn"
            value={formData.whatyouwilllearn}
            rows={3}
            placeholder="What you will learn about"
            className="input-field resize-none px-4 py-2 w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              id="price"
              onChange={formChangeHandler}
              name="price"
              value={formData.price}
              type="text"
              placeholder="Enter Price"
              className="input-field px-4 py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              name="category"
              onChange={formChangeHandler}
              value={formData.category}
              className="input-field px-4 py-2 w-full"
            >
              <option value="Select Category">Select Category</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>
        </div>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor={`section-${sectionIndex}`}
            >
              Section {sectionIndex + 1} Title
            </label>
            <input
              id={`section-${sectionIndex}`}
              type="text"
              placeholder="Enter Section Title"
              value={section.title}
              onChange={(e) =>
                handleSectionTitleChange(sectionIndex, e.target.value)
              }
              className="input-field px-4 py-2 w-full mb-2"
            />
            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="ml-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor={`subsection-${sectionIndex}-${subIndex}`}
                >
                  Subsection {subIndex + 1} Title
                </label>
                <input
                  id={`subsection-${sectionIndex}-${subIndex}`}
                  type="text"
                  placeholder="Enter Subsection Title"
                  value={subsection.title}
                  onChange={(e) =>
                    handleSubsectionTitleChange(
                      sectionIndex,
                      subIndex,
                      e.target.value
                    )
                  }
                  className="input-field px-4 mb-4 py-2 w-full"
                />
                <input
                  id={`subsection-${sectionIndex}-${subIndex}`}
                  type="text"
                  placeholder="Enter Subsection Description"
                  value={subsection.description}
                  onChange={(e) =>
                    handleSubsectionDescriptionChange(
                      sectionIndex,
                      subIndex,
                      e.target.value
                    )
                  }
                  className="input-field mb-4 px-4 py-2 w-full"
                />

                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="file"
                  >
                    Upload Lecture Video
                  </label>
                  <input
                    id="file"
                    type="file"
                    onChange={(e) =>
                      handleVideoChange(e, sectionIndex, subIndex)
                    }
                    className="input-field px-4 py-2 w-full"
                  />
                </div>
                {videoPreview && (
                  <div className="h-max mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="imagePreview"
                    >
                      Video Preview
                    </label>
                    <div className="w-full max-w-md overflow-hidden">
                      <video
                        src={videoPreview}
                        controls
                        className="w-full"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button
              className="text-blue-500 font-semibold"
              onClick={() => addSubsection(sectionIndex)}
            >
              + Add Subsection
            </button>
          </div>
        ))}
        <button
          className="text-blue-500 font-semibold mb-4"
          onClick={addSection}
        >
          + Add Section
        </button>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="file">
            Upload Thumbnail
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            className="input-field px-4 py-2 w-full"
          />
        </div>
        {imagePreview && (
          <div className="h-max mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="imagePreview"
            >
              Image Preview
            </label>
            <div className="w-full max-w-md overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded w-full">
          Create Course
        </button>
      </div>
    </div>
  );
};

export default CourseCreationForm;
