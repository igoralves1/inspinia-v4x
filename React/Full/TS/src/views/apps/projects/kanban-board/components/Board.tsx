import SimpleBar from 'simplebar-react'
import { useKanbanContext } from '@/context/useKanbanContext'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { Button, CardBody } from 'react-bootstrap'
import { TbPlus } from 'react-icons/tb'
import TaskItem from '@/views/apps/projects/kanban-board/components/TaskItem.tsx'

const Board = () => {
  const { onDragEnd, sections, getAllTasksPerSection, newTaskModal } = useKanbanContext()

  return (
    <CardBody className="p-0">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-content bg-light bg-opacity-40">
          {sections.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div className="kanban-board" ref={provided.innerRef}>
                  <div className="kanban-item py-2 px-3 d-flex align-items-center">
                    <h5 className="m-0">
                      {section.title} ({getAllTasksPerSection(section.id).length})
                    </h5>
                    <Button className="ms-auto btn btn-sm btn-icon rounded-circle btn-primary" onClick={() => newTaskModal.toggle(section.id)}>
                      <TbPlus />
                    </Button>
                  </div>
                  <SimpleBar className="kanban-board-group px-3">
                    <ul>
                      {getAllTasksPerSection(section.id).map((task, idx) => (
                        <Draggable draggableId={task.id} index={idx} key={task.id}>
                          {(provided) => (
                            <li className="kanban-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <TaskItem item={task} />
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  </SimpleBar>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </CardBody>
  )
}

export default Board
