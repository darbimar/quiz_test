import React from 'react';
import { Col, Row, Statistic } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 5;

type TimerProps = {
  finishQuiz: () => void;
};

const Timer: React.FC<TimerProps> = ({ finishQuiz }) => (
  <Row gutter={16}>
    <Col span={12}>
      <Countdown
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FieldTimeOutlined /> Таймер
          </div>
        }
        value={deadline}
        valueStyle={{ color: 'red' }}
        onFinish={finishQuiz}
      />
    </Col>
  </Row>
);

export default Timer;
