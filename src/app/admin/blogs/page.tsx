import { ChevronDownIcon, Cog6ToothIcon, FunnelIcon } from "@heroicons/react/24/outline";
import Breadcrumb from "~/components/admin-components/Breadcrumb";
import FilterSection from "~/components/admin-components/blogs/FilterSection";
import Selector from "~/components/common/Selector";

export default function BlogsPage() {
  const BlogOptions = [
    {
      value: "Approve",
      label: "Approve",
    },
    {
      value: "Delete",
      label: "Delete",
    },
    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: "Reject",
      label: "Reject",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Blogs" />

        <div className="w-full ">
          <div className="flex justify-end">
            <div className="action-button relative flex dark:text-white border border-stroke before:border-transparent after:border-transparent after:border-b-stroke before:border-b-stroke dark:after:border-b-meta-4 w-fit py-1 px-3 rounded hover:bg-stroke dark:hover:bg-meta-4 after:hidden before:hidden mr-1">
              <FunnelIcon className="w-6 h-6 mr-2" /> Filter
            </div>
            <div className="action-button relative flex dark:text-white border border-stroke before:border-transparent after:border-transparent after:border-b-stroke before:border-b-stroke dark:after:border-b-meta-4 w-fit py-1 px-3 rounded hover:bg-stroke dark:hover:bg-meta-4">
              <Cog6ToothIcon className="w-6 h-6 mr-2" /> Columns{" "}
              <ChevronDownIcon className="w-4 h-6 ml-2" />
            </div>
          </div>
          <FilterSection />
          <Selector defaultValue={"Actions"} options={BlogOptions} />
        </div>
      </div>
    </section>
  );
}
