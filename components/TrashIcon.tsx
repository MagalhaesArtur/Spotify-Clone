"use client";
// import deleteSongById from "@/actions/deleteSongById";
import { FaTrash } from "react-icons/fa";

interface TrashIconProps {
  id: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({ id }) => {
  return (
    <button
      onClick={(e) => {
        // const test = deleteSongById(id);
        // console.log("test", test);
        e.stopPropagation();
      }}
      className="
      w-full
      h-[15px]
      flex
      justify-end
      items-end

"
    >
      <FaTrash
        className="text-red-600
      transition
      opacity-0
      drop-shadow-md
      translate
      translate-y-1/4
      group-hover:opacity-100
      group-hover:translate-y-0
      hover:scale-125"
        size={20}
      />
    </button>
  );
};

export default TrashIcon;
