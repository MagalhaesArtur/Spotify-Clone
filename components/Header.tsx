"use client";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import usePlayer from "@/hooks/usePlayer";
import Link from "next/link";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const player = usePlayer();

  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();

  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div
        className="
        w-full
        flex
        mb-4
        items-center
        justify-between
        "
      >
        <div
          className="
        hidden
        md:flex
        gap-x-2
        items-center
        "
        >
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center
           cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center
           cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div
          className="
        flex
        md:hidden
        gap-x-2 items-center
        "
        >
          <button
            className="
          rounded-full
          p-2
          bg-white
          items-center
          justify-center
          hover:opacity-75
          transition
          "
          >
            <Link className="w-full h-full" href={"/"}>
              <HiHome className=" text-black" size={20} />
            </Link>
          </button>
          <button
            className="
          rounded-full
          p-2
          bg-white
          items-center
          justify-center
          hover:opacity-75
          transition
          "
          >
            <Link className="w-full h-full" href={"/search"}>
              <BiSearch className=" text-black" size={20} />
            </Link>
          </button>
        </div>
        <div
          className="
        flex
        justify-between
        items-center
        gap-x-4
        "
        >
          {user ? (
            <div
              className="
            flex gap-x-4 items-center
            "
            >
              <Button className="bg-white px-6 py-2" onClick={handleLogout}>
                logout
              </Button>
              <Button onClick={() => router.push("/account")} className="">
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
              bg-transparent
              text-neutral-300
              font-medium
              "
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
              bg-white
              px-6
              py-2
              "
                >
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
