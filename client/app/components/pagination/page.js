"use client";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Pagination = ({ page, pageCount }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  console.log(search);

  const isNextDisabled = () => {
    return page >= pageCount;
  };

  const isPrevDisabled = () => {
    return page <= 1;
  };

  const handlePaginate = async (direction) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }

    router.push(
      `${pathname}${search == "" ? `?search=${search}` : ``}?page=${
        page + direction
      }`
    );
  };

  return (
    <div className="flex justify-center mt-24">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${"bg-primary py-2 px-4 text-white w-24 rounded"} ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${"bg-primary py-2 px-4 text-white w-24 rounded ml-4"} ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
