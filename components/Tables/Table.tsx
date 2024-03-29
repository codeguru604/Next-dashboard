'use client'

import { Package } from "@/types/package";
import Link from "next/link";
import { useEffect, useState } from "react";
const packageData: Package[] = [
  {
    name: "Jacob Jones",
    dateStart: "9/18/16",
    noCustodian: 2,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/19",
    acknowledgement: "101,0%",
    leadAttorney: "Ralph Edwards",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/14",
    noCustodian: 4,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Dianne russell",
    caseType: "text",
  },
  {
    name: "Floyd Mies",
    dateStart: "9/18/14",
    noCustodian: 1,
    sourceHeld: "text",
    caseStatus: "private",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd russell",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/15",
    noCustodian: 6,
    sourceHeld: "text",
    caseStatus: "private",
    dateRelease: "7/11/21",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd Miles",
    caseType: "text",
  },
  {
    name: "Jacob Jones",
    dateStart: "9/18/16",
    noCustodian: 2,
    sourceHeld: "text",
    caseStatus: "private",
    dateRelease: "7/11/19",
    acknowledgement: "101,0%",
    leadAttorney: "Ralph Edwards",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/14",
    noCustodian: 4,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Dianne russell",
    caseType: "text",
  },
  {
    name: "Floyd Mies",
    dateStart: "9/18/14",
    noCustodian: 1,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd russell",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/15",
    noCustodian: 6,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/21",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd Miles",
    caseType: "text",
  },
  {
    name: "Jacob Jones",
    dateStart: "9/18/16",
    noCustodian: 2,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/19",
    acknowledgement: "101,0%",
    leadAttorney: "Ralph Edwards",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/14",
    noCustodian: 4,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Dianne russell",
    caseType: "text",
  },
  {
    name: "Floyd Mies",
    dateStart: "9/18/14",
    noCustodian: 1,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd russell",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/15",
    noCustodian: 6,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/21",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd Miles",
    caseType: "text",
  },
  {
    name: "Jacob Jones",
    dateStart: "9/18/16",
    noCustodian: 2,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/19",
    acknowledgement: "101,0%",
    leadAttorney: "Ralph Edwards",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/14",
    noCustodian: 4,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Dianne russell",
    caseType: "text",
  },
  {
    name: "Floyd Mies",
    dateStart: "9/18/14",
    noCustodian: 1,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/20",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd russell",
    caseType: "text",
  },
  {
    name: "Ralph Edwards",
    dateStart: "9/18/15",
    noCustodian: 6,
    sourceHeld: "text",
    caseStatus: "public",
    dateRelease: "7/11/21",
    acknowledgement: "105,0%",
    leadAttorney: "Floyd Miles",
    caseType: "text",
  },
];

const Table = () => {
  const [productList, setProductList] = useState(packageData);
  const [rowsLimit, setRowsLimit] = useState(5);
  const [rowsToShow, setRowsToShow] = useState(productList.slice(0, rowsLimit));
  const [customPagination, setCustomPagination] = useState<Number[]>([]);
  const [totalPage, setTotalPage] = useState(
    Math.ceil(productList?.length / rowsLimit)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = productList.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };
  const changePage = (value: number) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = productList.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };
  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = productList.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };
  useEffect(() => {
    const newPagination = Array.from({ length: totalPage }, (_, index) => index + 1);
    setCustomPagination(newPagination);
  }, [totalPage]);

  return (
    <div className="rounded-xl bg-white px-5 py-6 shadow-default dark:bg-bodydark2">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex gap-4 justify-center items-center">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Matters
          </h2>
          <Link
            href="#"
            className="flex items-center border-primary justify-center rounded-sm border py-2 px-6 text-center gap-2 font-medium text-title-ssm text-black hover:bg-opacity-90 dark:text-primary"
          >
            Filter
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.771 3.01465H2.22974C1.54615 3.01465 1.11925 3.75963 1.46244 4.35393L7.9524 15.3863V22.0995C7.9524 22.5933 8.3486 22.9923 8.83968 22.9923H16.1611C16.6522 22.9923 17.0484 22.5933 17.0484 22.0995V15.3863L23.5411 4.35393C23.8815 3.75963 23.4546 3.01465 22.771 3.01465ZM15.0506 20.9834H9.95017V16.6307H15.0534V20.9834H15.0506ZM15.3185 14.3818L15.0534 14.845H9.94738L9.68231 14.3818L4.14939 5.02358H20.8514L15.3185 14.3818Z" fill="gray" />
            </svg>
          </Link>
          <Link
            href="#"
            className="flex items-center border-primary justify-center rounded-sm border py-3 px-6 text-center gap-6 font-medium text-title-ssm text-black hover:bg-opacity-90 dark:text-primary"
          >
            Public
            <svg
              className="hidden fill-current sm:block"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                fill=""
              />
            </svg>
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="flex items-center bg-noti-alt justify-center rounded-sm  py-3 px-4 text-center gap-2 font-medium text-title-ssm text-white hover:bg-opacity-90 dark:text-black"
          >
            + Create New Hold
          </Link>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto rounded-xl">
        <table className="w-full table-auto ">
          <thead>
            <tr className="bg-gray text-left dark:bg-white dark:bg-opacity-10">
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                <div className="inline-flex gap-4 items-center">
                  Name
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  Date Hold Began
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  No. of Custodian
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  Source held
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  Case Status
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  Date Release
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  Acknowledgement %
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  Lead Attorney
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                <div className="inline-flex gap-4 items-center">
                  Case Type
                  <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                      fill=""
                    />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rowsToShow.map((product, key) => (
              <tr key={key}>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">{product.name}</p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.dateStart}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.noCustodian}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.sourceHeld}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-sm text-white py-1 px-3 text-sm font-medium ${product.caseStatus === "public"
                      ? "bg-success"
                      : product.caseStatus === "private"
                        ? "bg-danger"
                        : "bg-warning"
                      }`}
                  >
                    {product.caseStatus}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.dateRelease}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.acknowledgement}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.leadAttorney}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {product.caseType}
                  </p>
                </td>
                <td className="border-b bg-gray bg-opacity-50 border-[#eee] py-5 px-4 dark:bg-graydark dark:bg-opacity-50 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                          fill=""
                        />
                        <path
                          d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-6 px-1 items-center">
        <div className="text-lg">
          <Link
            href="#"
            className="inline-flex items-center border-primary justify-center rounded-md border py-2 px-4 gap-1.5 text-center font-medium text-title-ssm text-black hover:bg-opacity-90 dark:text-primary"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.1007 5.11293L8.43899 2.83175C8.31472 2.72281 8.15784 2.66707 8.00013 2.66699C7.89223 2.66694 7.78393 2.69294 7.68544 2.74577C7.64154 2.76926 7.59984 2.79794 7.56128 2.83175L4.89959 5.11293C4.62003 5.35253 4.58763 5.7734 4.82723 6.05296C5.06683 6.33253 5.4877 6.36492 5.76726 6.12532L7.33342 4.78305V9.94614C7.33342 10.3143 7.6319 10.6128 8.00009 10.6128C8.36828 10.6128 8.66676 10.3143 8.66676 9.94614L8.66676 4.78297L10.233 6.12532C10.5126 6.36492 10.9334 6.33253 11.173 6.05296C11.4126 5.7734 11.3802 5.35253 11.1007 5.11293ZM4.00008 9.33366C4.00008 8.96547 4.29856 8.66699 4.66675 8.66699H5.66675C6.03494 8.66699 6.33341 8.36852 6.33341 8.00033C6.33341 7.63214 6.03494 7.33366 5.66675 7.33366H4.66675C3.56218 7.33366 2.66675 8.22909 2.66675 9.33366V11.3337C2.66675 12.4382 3.56218 13.3337 4.66675 13.3337H11.3334C12.438 13.3337 13.3334 12.4382 13.3334 11.3337V9.33366C13.3334 8.22909 12.438 7.33366 11.3334 7.33366H10.3334C9.96522 7.33366 9.66675 7.63214 9.66675 8.00033C9.66675 8.36852 9.96522 8.66699 10.3334 8.66699H11.3334C11.7016 8.66699 12.0001 8.96547 12.0001 9.33366V11.3337C12.0001 11.7018 11.7016 12.0003 11.3334 12.0003H4.66675C4.29856 12.0003 4.00008 11.7018 4.00008 11.3337V9.33366Z" fill="gray" />
            </svg>
            Export
          </Link>
        </div>
        <div className="flex">
          <ul
            className="flex justify-center items-center gap-x-[10px] z-30"
            role="navigation"
            aria-label="Pagination"
          >
            <li
              className={` prev-btn text-white flex items-center justify-center w-[36px] rounded-sm h-[36px] border-[1px] border-solid border-boxdark-2 disabled] ${currentPage == 0
                ? "pointer-events-none"
                : " cursor-pointer"
                }`}
              onClick={previousPage}
            >
              <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" />
            </li>
            {customPagination?.map((data, index) => (
              <li
                className={`flex items-center justify-center w-[36px] rounded-sm h-[34px] border-[1px] border-solid cursor-pointer ${currentPage == index
                  ? "text-noti-alt text-noti-alt border-noti-alt"
                  : "border-boxdark-2 text-black dark:text-white"
                  }`}
                onClick={() => changePage(index)}
                key={index}
              >
                {index + 1}
              </li>
            ))}
            <li
              className={`flex items-center justify-center w-[36px] rounded-sm h-[36px] border-[1px] border-solid border-boxdark-2 ${currentPage == totalPage - 1
                ? "pointer-events-none"
                : "cursor-pointer"
                }`}
              onClick={nextPage}
            >
              <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
