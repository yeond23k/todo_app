import React, { useState } from 'react';
import { Tabs, Button, Col } from 'antd';
import './Contents.css';

const { TabPane } = Tabs;

const Contents = (props) => {
  const { activeTab, setActiveTab } = props;
  const [tabGroups, setTabGroups] = useState([
    { key: 'default', title: '기본' },
    { key: '1', title: '개발' },
    { key: '2', title: '일상' },
  ]);

  const tabChangeEvent = (value) => {
    setActiveTab(value);
  };

  return (
    <div>
      <div className="content">
        <Tabs defaultActiveKey={activeTab} onChange={tabChangeEvent}>
          {tabGroups.map((tab) => {
            return <TabPane tab={tab.title} key={String(tab.key)} />;
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Contents;
