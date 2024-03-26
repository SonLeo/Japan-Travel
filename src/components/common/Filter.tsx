"use client"
import React, { useState } from 'react';
import { DatePicker, Flex, Input, Space } from 'antd';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const Filter = () => {
  const [value, setValue] = useState<RangeValue>(null);

  return (
    <>
      <Space direction="vertical" size="middle">
        <Space.Compact size="large">
          <Input addonBefore={<div className='w-10 dark:text-white'>from</div>} placeholder="input value filter" />
        </Space.Compact>
        <Space.Compact size="large">
          <Input addonBefore={<div className='w-10 dark:text-white'>to</div>} placeholder="input value filter" />
        </Space.Compact>
      </Space>

      <RangePicker className="h-10" value={value} onChange={setValue} />;

      <Flex vertical gap={12}>
        <Input className='h-10 w-[288px]' placeholder="Title..." />
      </Flex>
    </>
  )
};

export default Filter;