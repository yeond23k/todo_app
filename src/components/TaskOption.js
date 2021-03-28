import React, { useState, useEffect } from 'react';
import { Drawer, Row, Col, Button, Calendar } from 'antd';
import { CalendarOutlined, PushpinOutlined } from '@ant-design/icons';
import moment from 'moment';

const Buttons = ['Calendar', 'Today', 'Tomorrow', 'None'];

const TaskOption = (props) => {
  const { optionVisible, setOptionVisible, taskChangeEvent } = props;

  const [selectBtn, setSelectedBtn] = useState('None');
  const [calVisible, setCalVisible] = useState(false);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    taskChangeEvent('pinned', pinned);
  }, [pinned]);

  const onClickEvent = (type) => {
    setSelectedBtn(type);

    if (type === 'Calendar') {
      setCalVisible(true);
    } else if (type === 'Today') {
      taskChangeEvent('dueDate', moment().format('YYYY-MM-DD'));
    } else if (type === 'Tomorrow') {
      taskChangeEvent('dueDate', moment().add(1, 'days').format('YYYY-MM-DD'));
    } else if (type === 'None') {
      taskChangeEvent('dueDate', '');
    }
  };

  const onSelectCalendar = (date) => {
    taskChangeEvent('dueDate', moment(date).format('YYYY-MM-DD'));
    setCalVisible(false);
  };

  return (
    <Drawer
      visible={optionVisible}
      placement="bottom"
      maskClosable={false}
      onClose={() => setOptionVisible(false)}
    >
      <Row>
        <Col>
          {Buttons.map((btn) => {
            return (
              <Button
                key={btn}
                size={btn === 'Calendar' ? 'middle' : 'small'}
                icon={btn === 'Calendar' && <CalendarOutlined />}
                type={selectBtn === btn ? 'link' : 'text'}
                onClick={() => onClickEvent(btn)}
              >
                {btn !== 'Calendar' && btn}
              </Button>
            );
          })}
        </Col>
        <Col>
          <Button
            size="middle"
            icon={<PushpinOutlined />}
            type={pinned ? 'link' : 'text'}
            onClick={() => setPinned(!pinned)}
          />
        </Col>
      </Row>
      <Row>
        <Button>ADD</Button>
      </Row>
      <Row>
        <Drawer
          visible={calVisible}
          placement="bottom"
          onClose={() => setCalVisible(false)}
        >
          <Calendar fullscreen={false} onSelect={onSelectCalendar} />
        </Drawer>
      </Row>
    </Drawer>
  );
};

export default TaskOption;
