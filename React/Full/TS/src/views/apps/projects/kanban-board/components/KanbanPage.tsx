import { Card } from 'react-bootstrap'

import KanbanHeader from '@/views/apps/projects/kanban-board/components/KanbanHeader.tsx'
import Board from '@/views/apps/projects/kanban-board/components/Board.tsx'
import Modals from '@/views/apps/projects/kanban-board/components/Modals.tsx'
import { KanbanProvider } from '@/context/useKanbanContext'
import { kanbanSectionsData, KanbanTaskData } from '@/views/apps/projects/kanban-board/data.ts'

const KanbanPage = () => {
  return (
    <KanbanProvider sectionsData={kanbanSectionsData} tasksData={KanbanTaskData}>
      <div className="outlook-box kanban-app">
        <Card className="h-100 mb-0 flex-grow-1">
          <KanbanHeader />
          <Board />
          <Modals />
        </Card>
      </div>
    </KanbanProvider>
  )
}

export default KanbanPage
