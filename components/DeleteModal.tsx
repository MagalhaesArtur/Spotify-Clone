import Modal from "./Modal";
import toast from "react-hot-toast";
import { supabaseAdmin } from "@/libs/supabaseAdmin";
import { useRouter } from "next/navigation";
import useDeleteModal from "@/hooks/useDeleteModal";
import Button from "./Button";
import { useAppContext } from "@/context";
import { useState } from "react";
import Loading from "./loading";

const DeleteModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { deleteSongId } = useAppContext();

  const deleteModal = useDeleteModal();
  const router = useRouter();

  const deleteSong = async (id: string) => {
    setIsLoading(true);
    await supabaseAdmin.from("songs").delete().eq("id", id);
    setTimeout(() => {
      router.refresh();
      toast.success("Song deleted!");
      deleteModal.onClose();
      setIsLoading(true);
    }, 2000);
  };

  const onChange = (open: boolean) => {
    if (!open) {
      deleteModal.onClose();
    }
  };

  return (
    <Modal
      title="Are you sure?"
      description="Click to delete the song"
      isOpen={deleteModal.isOpen}
      onChange={onChange}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Button
          onClick={() => {
            deleteSong(deleteSongId);
          }}
        >
          Delete
        </Button>
      )}
    </Modal>
  );
};

export default DeleteModal;
