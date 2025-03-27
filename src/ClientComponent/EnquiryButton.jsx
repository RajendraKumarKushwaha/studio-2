'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { FormModal } from "./FormModal";

export function EnquiryButton({ isHome }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex">
      <Button
          onClick={() => setOpen(true)}
          className={`px-4 py-2 rounded-md transition
            ${isHome
              ? "bg-[#f28b00] text-white hover:bg-[#f28900]  cursor-pointer py-3  text-lg"
              : "bg-black text-white hover:bg-black  cursor-pointer py-3  text-lg"
            }`}
        >
          Enquiry Now
        </Button>
      </div>

      {/* <FormModal open={open} setOpen={setOpen} /> */}
    </>
  );
}
