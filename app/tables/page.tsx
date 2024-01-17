import Table from "@/components/Tables/Table";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Table />
      </div>
    </>
  );
};

export default TablesPage;
