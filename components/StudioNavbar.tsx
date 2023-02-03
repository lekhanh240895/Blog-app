import Link from "next/link";
import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div className="bg-[#101112]">
      <div className="bg-inherit text-[#f7ab0a] flex items-center p-5">
        <ArrowUturnLeftIcon className="w-6 h-6 text-[#f7ab0a] mr-2" />
        <Link href="/">Go to website</Link>
      </div>

      <> {props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
