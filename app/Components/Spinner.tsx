
// LoadingSpinner...

import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-50">
      <ClipLoader size={50}color={"#966fd6"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
