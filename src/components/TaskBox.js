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

  const onTaskChangeEvent = (type, value) => {
    setTask((prevState) => {
      return { ...prevState, [type]: value };
    });
  };

  const onTaskPressEnterEvent = () => {
    setOptionVisible(true);
  };

  const onTaskSaveEvent = () => {
    console.log('### onTaskSaveEvent => ', task);
  };

  return (
    <>
      <Col span={20}>
        <Input
          ref={taskRef}
          placeholder=" + add a new task"
          onChange={(e) => onTaskChangeEvent('content', e.target.value)}
          onPressEnter={onTaskPressEnterEvent}
        />
      </Col>
      <Col span={4}>
        <Button onClick={onTaskPressEnterEvent}>ADD</Button>
      </Col>

      <TaskOption
        optionVisible={optionVisible}
        setOptionVisible={setOptionVisible}
        onTaskChangeEvent={onTaskChangeEvent}
        onTaskSaveEvent={onTaskSaveEvent}
      />
    </>
  );
};

export default TaskBox;
