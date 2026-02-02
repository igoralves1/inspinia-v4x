import { useKanbanContext } from '@/context/useKanbanContext'
import type { KanbanTaskType } from '@/types/kanban'
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbBan, TbCalendarTime, TbDotsVertical, TbEdit, TbPointFilled, TbShare, TbTrash } from 'react-icons/tb'

const TaskItem = ({ item }: { item: KanbanTaskType }) => {
  const { newTaskModal, taskForm } = useKanbanContext()
  return (
    <>
      <Card className="shadow border-light mb-2">
        <CardBody>
          <div className="d-flex align-items-center mb-2">
            <span className={`badge p-1 badge-soft-${item.category.variant} d-flex align-items-center justify-content-center`}>
              <TbPointFilled className="me-1" />
              {item.category.name}
            </span>
            <Dropdown className="ms-auto">
              <DropdownToggle className="btn btn-icon btn-sm drop-arrow-none btn-ghost-light text-muted" type="button">
                <TbDotsVertical className="fs-xl" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem>
                  <TbShare className="me-2" />
                  Share
                </DropdownItem>
                <DropdownItem onClick={() => newTaskModal.toggle(item.sectionId, item.id)}>
                  <TbEdit className="me-2" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <TbBan className="me-2" />
                  Block
                </DropdownItem>
                <DropdownItem className="text-danger" onClick={() => taskForm.deleteRecord(item.id)}>
                  <TbTrash className="me-2" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <h5 className="mb-3">
            <Link to="#" className="link-reset">
              {item.title}
            </Link>
          </h5>
          {item.image && (
            <div className="mb-3">
              <img src={item.image} alt="user" className="rounded img-fluid" />
            </div>
          )}

          <div className="d-flex justify-content-between">
            <div className="avatar-group avatar-group-xs d-flex">
              {item.users.map((user, i) => (
                <div className="avatar" key={i}>
                  <img src={user} alt="user" className="rounded-circle avatar-xs" />
                </div>
              ))}
            </div>
            <div className="d-flex align-items-center gap-2">
              <TbCalendarTime className="text-muted fs-lg" />
              <h5 className="fs-base mb-0 fw-medium">{item.date}</h5>
            </div>
          </div>

          {item.progress && (
            <div className="mt-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="mb-0 text-muted fw-semibold fs-xxs">Progress</p>
                <p className="fw-semibold mb-0">{item.progress}%</p>
              </div>
              <ProgressBar now={item.progress} variant={item.category.variant} style={{ height: 5 }} />
            </div>
          )}
        </CardBody>
      </Card>
    </>
  )
}

export default TaskItem
