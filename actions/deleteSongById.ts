import { supabaseAdmin } from "@/libs/supabaseAdmin";
import toast from "react-hot-toast";

const deleteSongById = async (id: string): Promise<any> => {
  await supabaseAdmin.from("songs").delete().eq("id", id);
  setTimeout(() => {
    toast.success("Song deleted!");
  }, 2000);
};

export default deleteSongById;
