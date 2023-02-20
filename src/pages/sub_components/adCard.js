import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const ABCard = ({ image, category, title }) => (
  <div className="column">
    <Card
      style={{ width: "100%" }}
      cover={
        <img
          className="card-img"
          alt="example"
          src={image}
        />
      }
    >
      <Meta
        title={
          <div class="card-title">
            <span style={{ color: 'lightgrey' }}>{`${category}`}</span>
          </div>
        }
        description={
          <div class="card-desc">
            <span style={{ 'fontWeight': 'bold', color: 'black' }}>{`${title}`}</span>
          </div>
        }
      />
      <div class="card-button">
          <button class="orange-circle-btn">
            <span class="arrow">&#10148;</span>
          </button>
      </div>
    </Card>
  </div>
);

export default ABCard;