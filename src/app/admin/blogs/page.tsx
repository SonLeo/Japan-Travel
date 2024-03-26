import Breadcrumb from "~/components/admin-components/Breadcrumb";
import Actions from "~/components/common/Actions";
import Filter from "~/components/common/Filter";

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
          <Actions defaultValue={"Actions"} options={BlogOptions} />
          <Filter />
        </div>
      </div>
    </section>
  );
}
