/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem } from 'react-bootstrap';
import { TbGripHorizontal } from 'react-icons/tb';
import { ReactSortable } from 'react-sortablejs';
import { nestedListWithHandleData } from '../data';
const sortableOptions = {
  handle: '.sort-handle',
  ghostClass: 'sortable-item-ghost',
  group: 'nested',
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65
};
const NestableBlock = ({
  item,
  setList: setNewList,
  index
}) => {
  return item.children ? <ListGroupItem key={item.id}>
      <span className="d-flex align-items-center">
        <TbGripHorizontal className="align-middle sort-handle p-0 me-2" /> {item.title}
      </span>
      <ListGroup className="nested-sortable">
        <ReactSortable key={item.id} list={item.children} group="nested-icon-group" setList={currentList => {
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
    </ListGroupItem> : <ListGroupItem key={item.id} className="d-flex align-items-center">
      <TbGripHorizontal className="align-middle sort-handle p-0 me-2" /> {item.title}
    </ListGroupItem>;
};
const NestedListWithHandle = () => {
  const [list, setList] = useState(nestedListWithHandleData);
  return <Card>
      <CardHeader>
        <CardTitle>Nested Sortables List with Handle</CardTitle>
      </CardHeader>
      <CardBody>
        <ListGroup className="fw-medium nested-sortable-handle">
          <ReactSortable list={list} setList={setList} group="nested-icon-group" {...sortableOptions}>
            {list.map((item, index) => {
            return <NestableBlock key={item.id} item={item} setList={setList} index={[index]} />;
          })}
          </ReactSortable>
        </ListGroup>
      </CardBody>
    </Card>;
};
export default NestedListWithHandle;