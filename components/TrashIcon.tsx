"use client";
import { FaTrash } from "react-icons/fa";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useDeleteModal from "@/hooks/useDeleteModal";
import { useAppContext } from "@/context";

interface TrashIconProps {
  id: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({ id }) => {
  const { setDeleteSongId } = useAppContext();
  const DeleteModal = useDeleteModal();

  const authModal = useAuthModal();
  const { user, subscription } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // if (!subscription) {
    //   return subscribeModal.onOpen();
    // }
    setDeleteSongId(id);
    return DeleteModal.onOpen();
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
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
