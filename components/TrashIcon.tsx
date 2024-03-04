import { FaTrash } from "react-icons/fa";

const TrashIcon = () => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        console.log("test");
      }}
      className="
      absolute
      bottom-2
      right-2

"
    >
      <FaTrash
        className="text-red-600
      transition
      opacity-0
      w-[20px]
      h-[20px]
    z-50
      flex
      items-center
      drop-shadow-md
      translate
      translate-y-1/4
      group-hover:opacity-100
      group-hover:translate-y-0
      hover:scale-110"
      />
    </button>
  );
};

export default TrashIcon;
