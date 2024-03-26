"use client"
import React from 'react';
import { Button, Input, Select, Space } from 'antd';

const { Search } = Input;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

const Filter = () => (
  <Space direction="vertical" size="middle">
    <Space.Compact>
      <Search addonBefore="From: " placeholder="input search text" allowClear />
    </Space.Compact>
  </Space>
);

export default Filter;