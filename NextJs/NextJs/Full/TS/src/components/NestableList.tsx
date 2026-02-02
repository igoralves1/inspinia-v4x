'use client'
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useState } from 'react'

const Item = ({ id, depth = 0 }: { id: UniqueIdentifier; depth?: number }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '8px 12px',
    marginLeft: depth * 20,
    background: isDragging ? '#e0e0e0' : '#fff',
    border: '1px solid #ccc',
    borderRadius: 4,
    marginBottom: 4,
    cursor: 'grab',
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  )
}

export default function NestableList() {
  const [items, setItems] = useState<{ id: string; depth: number }[]>([
    { id: 'Item 1', depth: 0 },
    { id: 'Item 2', depth: 0 },
    { id: 'Item 2.1', depth: 1 },
    { id: 'Item 2.2', depth: 1 },
    { id: 'Item 3', depth: 0 },
  ])
  const [activeId, setActiveId] = useState<number | string | null>(null)
  const [activeItem, setActiveItem] = useState<{ id: string; depth: number } | undefined>(undefined)
  const [shadowDepth, setShadowDepth] = useState<number | undefined>(0)

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragStart = (event: DragStartEvent) => {
    const item = items.find((i) => i.id === event.active.id)
    setActiveId(event.active.id)
    if (item) setActiveItem(item)
    setShadowDepth(item?.depth)
  }

  const handleDragMove = (event: DragMoveEvent) => {
    if (!activeItem) return
    const offsetX = event.delta.x
    const newDepth = Math.max(0, Math.min(5, activeItem?.depth + Math.round(offsetX / 20)))
    setShadowDepth(newDepth)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) {
      resetDrag()
      return
    }

    const oldIndex = items.findIndex((i) => i.id === active.id)
    const newIndex = items.findIndex((i) => i.id === over.id)

    const reordered = arrayMove(items, oldIndex, newIndex).map((item) =>
      item.id === active.id
        ? {
            ...item,
            depth: shadowDepth,
          }
        : item,
    )
    setItems(reordered as { id: string; depth: number }[])
    resetDrag()
  }

  const resetDrag = () => {
    setActiveId(null)
    setActiveItem(undefined)
    setShadowDepth(0)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <Item key={item.id} id={item.id} depth={item.id === activeId ? shadowDepth : item.depth} />
        ))}
      </SortableContext>

      <DragOverlay>
        {activeItem && (
          <div
            style={{
              padding: 8,
              background: '#f8f9fa',
              border: '1px dashed #888',
              borderRadius: 4,
            }}>
            {activeItem.id}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}
