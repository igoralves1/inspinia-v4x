import { useKanbanContext } from '@/context/useKanbanContext'
import { CardHeader } from 'react-bootstrap'
import { LuBriefcase, LuCalendarClock, LuSearch } from 'react-icons/lu'
import { TbPlus } from 'react-icons/tb'

const KanbanBoard = () => {
  const { sectionModal } = useKanbanContext()
  return (
    <CardHeader className="border-light align-items-center gap-2">
      <div className="app-search">
        <input type="search" className="form-control" placeholder="Search tasks..." />
        <LuSearch className="app-search-icon text-muted" />
      </div>

      <div className="d-flex flex-wrap align-items-center gap-2">
        <div className="app-search">
          <select className="form-select form-control">
            <option>Department</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="QA">QA</option>
          </select>
          <LuBriefcase className="app-search-icon text-muted" />
        </div>

        <div className="app-search">
          <select className="form-select form-control">
            <option>Due Date</option>
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
          <LuCalendarClock className="app-search-icon text-muted" />
        </div>
      </div>

      <button type="submit" className="btn btn-secondary ms-lg-auto" onClick={() => sectionModal.toggle()}>
        <TbPlus className="me-1" /> Add New Section
      </button>
    </CardHeader>
  )
}

export default KanbanBoard
