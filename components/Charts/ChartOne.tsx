"use client";

import React from "react";
import Link from "next/link";
import CardDataStats from "../CardDataStats";

const ChartOne: React.FC = () => {

  return (
    <div className="col-span-12 rounded-xl px-5 pt-7.5 pb-5 shadow-default bg-white  dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-semibold text-title-sm">Holds Overview</p>
              <p className="text-title-xsm font-normal">Holds Summary</p>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="hidden inline-flex items-center border-primary justify-center rounded-md border py-2 px-4 gap-1.5 text-center font-medium text-title-ssm text-black hover:bg-opacity-90 md:flex dark:text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.1007 5.11293L8.43899 2.83175C8.31472 2.72281 8.15784 2.66707 8.00013 2.66699C7.89223 2.66694 7.78393 2.69294 7.68544 2.74577C7.64154 2.76926 7.59984 2.79794 7.56128 2.83175L4.89959 5.11293C4.62003 5.35253 4.58763 5.7734 4.82723 6.05296C5.06683 6.33253 5.4877 6.36492 5.76726 6.12532L7.33342 4.78305V9.94614C7.33342 10.3143 7.6319 10.6128 8.00009 10.6128C8.36828 10.6128 8.66676 10.3143 8.66676 9.94614L8.66676 4.78297L10.233 6.12532C10.5126 6.36492 10.9334 6.33253 11.173 6.05296C11.4126 5.7734 11.3802 5.35253 11.1007 5.11293ZM4.00008 9.33366C4.00008 8.96547 4.29856 8.66699 4.66675 8.66699H5.66675C6.03494 8.66699 6.33341 8.36852 6.33341 8.00033C6.33341 7.63214 6.03494 7.33366 5.66675 7.33366H4.66675C3.56218 7.33366 2.66675 8.22909 2.66675 9.33366V11.3337C2.66675 12.4382 3.56218 13.3337 4.66675 13.3337H11.3334C12.438 13.3337 13.3334 12.4382 13.3334 11.3337V9.33366C13.3334 8.22909 12.438 7.33366 11.3334 7.33366H10.3334C9.96522 7.33366 9.66675 7.63214 9.66675 8.00033C9.66675 8.36852 9.96522 8.66699 10.3334 8.66699H11.3334C11.7016 8.66699 12.0001 8.96547 12.0001 9.33366V11.3337C12.0001 11.7018 11.7016 12.0003 11.3334 12.0003H4.66675C4.29856 12.0003 4.00008 11.7018 4.00008 11.3337V9.33366Z" fill="gray" />
          </svg>
          Export
        </Link>
      </div>

      <div className="grid grid-cols-1 mt-10 gap-2 md:grid-cols-3 xl:grid-cols-5">
        <CardDataStats title="Number of Active Holds" total="343" color="meta-1">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#AE262C" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13 11C11.8954 11 11 11.8954 11 13V27C11 28.1046 11.8954 29 13 29H27C28.1046 29 29 28.1046 29 27V13C29 11.8954 28.1046 11 27 11H13ZM16 21C16 20.4477 15.5523 20 15 20C14.4477 20 14 20.4477 14 21V25C14 25.5523 14.4477 26 15 26C15.5523 26 16 25.5523 16 25V21ZM20 17C20.5523 17 21 17.4477 21 18V25C21 25.5523 20.5523 26 20 26C19.4477 26 19 25.5523 19 25V18C19 17.4477 19.4477 17 20 17ZM26 15C26 14.4477 25.5523 14 25 14C24.4477 14 24 14.4477 24 15V25C24 25.5523 24.4477 26 25 26C25.5523 26 26 25.5523 26 25V15Z" fill="white" />
          </svg>

        </CardDataStats>
        <CardDataStats title="Number of Active Custodians" total="300" color="meta-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#F6921E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 14C12 11.7909 13.7909 10 16 10H22V14C22 16.2091 23.7909 18 26 18H28V26C28 28.2091 26.2091 30 24 30H16C13.7909 30 12 28.2091 12 26V14ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21H18C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19H16ZM16 23C15.4477 23 15 23.4477 15 24C15 24.5523 15.4477 25 16 25H20C20.5523 25 21 24.5523 21 24C21 23.4477 20.5523 23 20 23H16ZM24.6818 12.1988L24.5509 14.1629C24.5106 14.7666 25.0115 15.2674 25.6152 15.2272L27.5792 15.0962C28.4365 15.0391 28.8274 13.9989 28.2198 13.3913L26.3867 11.5582C25.7792 10.9507 24.7389 11.3415 24.6818 12.1988Z" fill="white" />
          </svg>

        </CardDataStats>
        <CardDataStats title="Acknowledgement Rate" total="5" color="meta-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#D8DF25" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24.6261 13.2653L21.3263 13.7367C20.8222 13.8087 20.4103 14.049 20.1162 14.3811L12.4167 22.0806C11.6357 22.8616 11.6357 24.1279 12.4167 24.909L15.2452 27.7374C16.0263 28.5185 17.2925 28.5185 18.0736 27.7374L25.773 20.038C26.1051 19.7439 26.3454 19.332 26.4174 18.8279L26.8888 15.528C27.0775 14.2081 25.946 13.0767 24.6261 13.2653ZM22.3162 17.8379C22.7067 18.2284 23.3399 18.2285 23.7305 17.8379C24.121 17.4474 24.1209 16.8142 23.7305 16.4237C23.34 16.0332 22.7068 16.0332 22.3162 16.4237C21.9257 16.8142 21.9257 17.4474 22.3162 17.8379Z" fill="white" />
          </svg>

        </CardDataStats>
        <CardDataStats title="Number of assets with preservation" total="8" color="meta-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#303192" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22 16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12C20.2091 12 22 13.7909 22 16ZM18 21C14.134 21 11 23.2386 11 26C11 27.1046 11.8954 28 13 28H23C24.1046 28 25 27.1046 25 26C25 23.2386 21.866 21 18 21ZM26 14C26.5523 14 27 14.4477 27 15V16H28C28.5523 16 29 16.4477 29 17C29 17.5523 28.5523 18 28 18H27V19C27 19.5523 26.5523 20 26 20C25.4477 20 25 19.5523 25 19V18H24C23.4477 18 23 17.5523 23 17C23 16.4477 23.4477 16 24 16H25V15C25 14.4477 25.4477 14 26 14Z" fill="white" />
          </svg>

        </CardDataStats>
        <CardDataStats title="Number of assets" total="8" color="meta-5">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#633092" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22 16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12C20.2091 12 22 13.7909 22 16ZM18 21C14.134 21 11 23.2386 11 26C11 27.1046 11.8954 28 13 28H23C24.1046 28 25 27.1046 25 26C25 23.2386 21.866 21 18 21ZM26 14C26.5523 14 27 14.4477 27 15V16H28C28.5523 16 29 16.4477 29 17C29 17.5523 28.5523 18 28 18H27V19C27 19.5523 26.5523 20 26 20C25.4477 20 25 19.5523 25 19V18H24C23.4477 18 23 17.5523 23 17C23 16.4477 23.4477 16 24 16H25V15C25 14.4477 25.4477 14 26 14Z" fill="white" />
          </svg>
        </CardDataStats>
      </div>
    </div>
  );
};

export default ChartOne;
