import React, { useState, useEffect, useRef } from 'react';
import { Col, Input, Button } from 'antd';

import TaskOption from './TaskOption';

const TaskBox = (props) => {
  const { tab } = props;
  const taskRef = useRef();

  const [task, setTask] = useState({ group: tab });
  const [optionVisible, setOptionVisible] = useState(false);

  useEffect(() => {
    setTask((prevState) => {
      return { ...prevState, group: tab };
    });
  }, [tab]);

  useEffect(() => {
    console.log('### task => ', task);
  }, [task]);

  const taskChangeEvent = (type, value) => {
    setTask((prevState) => {
      return { ...prevState, [type]: value };
    });
  };

  const taskPressEnterEvent = () => {
    setOptionVisible(true);
  };

  return (
    <>
      <Col span={20}>
        <Input
          ref={taskRef}
          placeholder=" + add a new task"
          onChange={(e) => taskChangeEvent('content', e.target.value)}
          onPressEnter={taskPressEnterEvent}
        />
      </Col>
      <Col span={4}>
        <Button onClick={taskPressEnterEvent}>ADD</Button>
      </Col>

      <TaskOption
        optionVisible={optionVisible}
        setOptionVisible={setOptionVisible}
        taskChangeEvent={taskChangeEvent}
      />
    </>
  );
};

export default TaskBox;
