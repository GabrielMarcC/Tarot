/* eslint-disable react/prop-types */
export const Button = ({ label, value }) => {
  return (
    <div className="flex items-center justify-center py-9 p-2">
      <button
        className="rounded-lg bg-orange-700 w-[130px] text-white text-[25px] hover:opacity-60"
        onClick={value}
      >
        {label}
      </button>
    </div>
  );
};
