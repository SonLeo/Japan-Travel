import Breadcrumb from "~/components/admin-components/Breadcrumb";
import FilterSection from "~/components/admin-components/blogs/FilterSection";
import Filter from "~/components/common/Filter";
import Selector from "~/components/common/Select";

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
        <Breadcrumb pageName="Posts manager" />

        <div className="w-full ">
          <FilterSection />
          <Selector defaultValue={"Actions"} options={BlogOptions} />
        </div>
      </div>
    </section>
  );
}
