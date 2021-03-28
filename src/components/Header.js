import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import moment from 'moment';
import './Header.css';

import TaskBox from './TaskBox';

const todoItem = {
  id: '',
  color: '',
  content: '',
  dueDate: '',
  pinned: '',
  group: '',
  creDate: '',
  udtDate: '',
};

const Header = (props) => {
  const { activeTab } = props;
  const [today, setToday] = useState([]);

  useEffect(() => {
    setToday(moment().format('LLLL').split(','));
  }, []);

  return (
    <div className="header">
      <Row className="header_content">
        <Col span={18}>
          <span className="day">{today[0]}</span>
          <span className="date">{today[1]}</span>
        </Col>
        <Col span={6}>
          <Button icon={<SearchOutlined />} />
          <Button icon={<SettingOutlined />} />
        </Col>
      </Row>
      <Row className="header_content" gutter={1}>
        <TaskBox tab={activeTab} />
      </Row>
    </div>
  );
};

export default Header;
