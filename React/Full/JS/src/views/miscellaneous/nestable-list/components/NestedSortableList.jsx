/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ReactSortable } from 'react-sortablejs';
import { nestedListInitialData } from '../data';
const sortableOptions = {
  group: 'nested',
  animation: 150,
  ghostClass: 'sortable-item-ghost',
  fallbackOnBody: true,
  swapThreshold: 0.65,
  onStart: event => {
    event.item.classList.add('sortable-drag');
  },
  onEnd: event => {
    event.item.classList.remove('sortable-drag');
  }
};
const NestableBlock = ({
  item,
  setList: setNewList,
  index
}) => {
  return item.children ? <ListGroupItem key={item.id}>
      {' '}
      {item.title}
      <ListGroup className="nested-sortable">
        <ReactSortable key={item.id} list={item.children} group="nested-group" setList={currentList => {
        // @ts-ignore
        setNewList(sourceList => {
          const tempList = [...sourceList];
          const indexes = [...index];
          const lastIndex = indexes.pop();
          // @ts-ignore
          const lastArr = indexes.reduce((arr, i) => arr[i]['children'], tempList);
          // @ts-ignore
          lastArr[lastIndex]['children'] = currentList;
          return tempList;
        });
      }} {...sortableOptions}>
          {item.children.map((child, idx) => <NestableBlock key={child.id} item={child} setList={setNewList} index={[...index, idx]} />)}
        </ReactSortable>
      </ListGroup>
    </ListGroupItem> : <ListGroupItem key={item.id}>{item.title}</ListGroupItem>;
};
const NestedSortableList = () => {
  const [list, setList] = useState(nestedListInitialData);
  return <Card>
      <CardHeader>
        <CardTitle>Nested Sortables List</CardTitle>
      </CardHeader>
      <CardBody>
        <ListGroup className="fw-medium nested-sortable">
          <ReactSortable list={list} setList={setList} group="nested-group" {...sortableOptions}>
            {list.map((item, index) => {
            return <NestableBlock key={item.id} item={item} setList={setList} index={[index]} />;
          })}
          </ReactSortable>
        </ListGroup>
      </CardBody>
    </Card>;
};
export default NestedSortableList;