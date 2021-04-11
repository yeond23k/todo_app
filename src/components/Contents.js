import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('### content render');

    getJsonData();
  }, []);

  const tabChangeEvent = (value) => {
    setActiveTab(value);
  };

  const getJsonData = async () => {
    let result = null;
    await fetch('../data/todoList.json')
      .then((response) => {
        console.log('### response => ', response);
        return response.json();
      })
      .then((json) => {
        console.log('### json => ', json);
        result = json;
      });
    // const result = await fetch('../data/todoList.json').then((data) => {
    //   return data;
    //   // console.log('### data => ', data.json());
    // });
    console.log('### result => ', result);
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
