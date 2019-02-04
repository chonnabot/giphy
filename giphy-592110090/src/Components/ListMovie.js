import React from 'react';
import ItemMovie from './ItemMovie';
import { List } from 'antd';

function ListMovie(props) {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={props.items}
      renderItem={item => (
        <List.Item>
          <ItemMovie item={item} />
        </List.Item>
      )}
      pagination = {{ pageSize: 40}}
    />
  );
}

export default ListMovie;
