import { useEffect } from "react";
export default function ImageUpload({
  register,
  watch,
  previewImage,
  setPreviewImage,
}) {
  const imageField = watch("image");
  useEffect(() => {
    if (imageField?.length > 0) {
      console.log(imageField);
      setPreviewImage(URL.createObjectURL(imageField[0]));
    }
  }, [imageField]);
  return (
    <>
      {previewImage ? (
        <img
          className="max-w-full rounded-lg"
          src={previewImage}
          alt="previewImage"
        />
      ) : (
        <img
          className="max-w-full rounded-lg"
          src="/src/assets/imgs/未知貓.jpg"
          alt="fakeImage"
        />
      )}

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="image"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            貓咪的照片
          </label>
        </div>
        <div className="mt-2">
          <input
            type="file"
            {...register("image")}
            className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="image"
          />
        </div>
      </div>
    </>
  );
}
