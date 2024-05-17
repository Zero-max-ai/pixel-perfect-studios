"use client";
import { BookCall } from "@/utils/BookCall";

interface ClientButtonProps {
  title: string;
}

const ClientButton = ({ title }: ClientButtonProps) => {
  return (
    <div
      onClick={BookCall}
      className="bg-black w-fit px-6 py-3 text-xs text-white rounded-full cursor-pointer"
    >
      {title}
    </div>
  );
};

export default ClientButton;
