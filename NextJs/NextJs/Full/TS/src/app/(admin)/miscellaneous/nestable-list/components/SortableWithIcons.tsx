'use client'
import { useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem } from 'react-bootstrap'
import { ReactSortable, Sortable } from 'react-sortablejs'

import { groupedSortableData } from '../data'

const sortableOptions: Partial<Sortable.Options> = {
  group: 'grouped-sortable',
  animation: 150,
  ghostClass: 'sortable-item-ghost',
  fallbackOnBody: true,
  swapThreshold: 0.65,
}

const SortableGroup = ({ item }: { item: (typeof groupedSortableData)[number] }) => {
  const [list, setList] = useState(item.children)
  const Icon = item.icon

  return (
    <ListGroupItem key={item.id}>
      <div className="d-flex align-items-center gap-2 mb-2">
        <div className="avatar-xs flex-shrink-0">
          <span className="avatar-title text-bg-light rounded-circle">
            <Icon className="fs-sm text-primary" />
          </span>
        </div>
        <div>
          <h5 className="mb-0">{item.title}</h5>
        </div>
      </div>
      <ListGroup className="nested-sortable border-0">
        <ReactSortable list={list} setList={setList} {...sortableOptions}>
          {list.map((child) => {
            const Icon = child.icon
            return (
              <ListGroupItem key={child.id}>
                <Icon className="fs-sm me-2 text-muted" />
                {child.title}
              </ListGroupItem>
            )
          })}
        </ReactSortable>
      </ListGroup>
    </ListGroupItem>
  )
}

const SortableWithIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sortable with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <ListGroup className="border-dashed">
          {groupedSortableData.map((item) => {
            return <SortableGroup key={item.id} item={item} />
          })}
        </ListGroup>
      </CardBody>
    </Card>
  )
}

export default SortableWithIcons
