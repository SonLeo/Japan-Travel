"use client";
import { ArrowUturnRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { DatePicker, DatePickerProps, Flex, Input, Space } from "antd";
import Selector from "~/components/common/Selector";

export default function FilterSection() {
  const BlogStatus = [
    {
      value: "Approved",
      label: "Approved",
    },
    {
      value: "Deleted",
      label: "Deleted",
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
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="border border-solid border-stroke p-5 my-5 rounded-lg bg-stroke dark:bg-meta-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="xl:mr-4">
          <p className="dark:text-white font-medium mb-1">Id:</p>
          <Space direction="vertical" size="middle" className="w-full flex-1">
            <Space.Compact size="middle" className="w-full">
              <Input
                addonBefore={<div className="w-10 dark:text-white">from</div>}
                placeholder="input value filter"
              />
            </Space.Compact>
            <Space.Compact size="middle" className="-mt-3 w-full">
              <Input
                addonBefore={<div className="w-10 dark:text-white">to</div>}
                placeholder="input value filter"
              />
            </Space.Compact>
          </Space>
        </div>
        <div className="xl:mr-4">
          <p className="dark:text-white font-medium mb-1">Category:</p>
          <Space direction="vertical" size="middle" className="w-full flex-1">
            <Space.Compact size="middle" className="w-full">
              <Input
                addonBefore={<div className="w-10 dark:text-white">from</div>}
                placeholder="input value filter"
              />
            </Space.Compact>
            <Space.Compact size="middle" className="-mt-3 w-full">
              <Input
                addonBefore={<div className="w-10 dark:text-white">to</div>}
                placeholder="input value filter"
              />
            </Space.Compact>
          </Space>
        </div>
        <div className="xl:mr-4">
          <p className="dark:text-white font-medium mb-1">
            Date created:
          </p>
          <div className="flex items-center mb-2">
            <div className="flex items-center dark:text-white h-[30px] w-16 text-sm justify-center border border-solid border-[#d9d9d9] rounded-md box-content rounded-r-none border-r-0">
              from
            </div>
            <Space direction="vertical" className="flex-1">
              <DatePicker
                className="border-rounded-left-none w-full"
                size={"middle"}
                onChange={onChange}
              />
            </Space>
          </div>
          <div className="flex items-center mt-3">
            <div className="flex items-center dark:text-white h-[30px] w-16 text-sm justify-center border border-solid border-[#d9d9d9] rounded-md box-content rounded-r-none border-r-0">
              to
            </div>
            <Space direction="vertical" className="flex-1">
              <DatePicker
                className="border-rounded-left-none w-full"
                size={"middle"}
                onChange={onChange}
              />
            </Space>
          </div>
        </div>
        <div className="mt-2 xl:mt-7">
          <div className="flex items-center"    >
            <p className="dark:text-white font-medium min-w-16 block">Title: </p>
            <Flex vertical className="flex-1">
              <Input className="h-[32px] w-full" placeholder="Title..." />
            </Flex>
          </div>
          <div className="flex items-center mt-3">
            <p className="dark:text-white font-medium min-w-16 block">
              Status:
            </p>
            <div className="flex-1 blog-status">
              <Selector
                defaultValue={"Select status ... "}
                options={BlogStatus}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-end mt-5">
          <div className="flex items-center text-white border border-stroke min-w-[110px] py-1.5 px-4 rounded bg-meta-1 opacity-80 hover:opacity-100 mr-2">
            <XMarkIcon className="w-5 h-5 mr-1" /> Cancel
          </div>
          <div className="flex items-center text-white border border-stroke min-w-[110px] py-1.5 px-4 rounded bg-meta-3 opacity-80 hover:opacity-100">
            <ArrowUturnRightIcon className="w-4 h-4 mr-1" /> Apply
          </div>
        </div>
      </div>
    </div>
  );
}
