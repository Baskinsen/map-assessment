import React, { useState } from "react";
import ImageUploadImg from "../assets/file upload states.png";
import { toast } from "react-toastify";

interface ImageUploadProps {
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
}

const ImageUpload = ({
  imageFile,
  setImageFile,
}: ImageUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      alert("No file selected.");
      return;
    }

    const file = files[0];

    if (file && file.type.startsWith("image/")) {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > 800 || img.height > 400) {
          toast.error("Image must not be more than 800 X 400px");
          return;
        }

        setImageFile(file);

        const reader = new FileReader();
        
        reader.readAsDataURL(file);

        URL.revokeObjectURL(objectUrl);
      };

      img.onerror = () => {
        alert("Invalid image file.");
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };

  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 1) {
      toast.error("Image must not be more than 1");
    } else {
      handleImageChange({
        target: { files: files } as HTMLInputElement,
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center space-y-4 border-[3px] border-[#D0D5DD] p-5 px-10 border-dotted rounded-md ${
        isDragOver ? "bg-[#e0f7fa]" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Upload Section */}
      <div>
        <img src={ImageUploadImg} alt="Upload Icon" />
      </div>
      <p className="text-[#475367] text-[14px] font-[400] text-center">
        <span className="text-[#175CFF] ">Click to upload</span> or drag and
        drop
      </p>
      <div className="flex flex-col justify-center space-y-4">
        <label className="block text-sm font-[400] text-[#98A2B3] mx-auto text-center">
          PNG or JPG or GIF format (max. 800 X 400px)
        </label>

        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          name="image"
        />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#F0F2F5]"></div>
          </div>
          <div className="relative flex justify-center text-sm font-bold">
            <span className="px-2 bg-white text-[#98A2B3]">OR</span>
          </div>
        </div>
        {imageFile ? (
          <button
            onClick={handleRemoveImage}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 mx-auto"
          >
            Remove Image
          </button>
        ) : (
          <button
            onClick={() => document.getElementById("image-upload")?.click()}
            className="px-4 py-2 bg-[#FFFFFF] border-[1.5px] border-[#175CFF] text-[14px] font-bold text-[#175CFF] rounded-lg    hover:bg-[#175CFF] hover:text-[#ffffff] mx-auto"
          >
            Browse Files
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
