'use client'
import { Card } from 'react-bootstrap'

import Board from '@/app/(admin)/(apps)/(projects)/kanban-board/components/Board'
import KanbanHeader from '@/app/(admin)/(apps)/(projects)/kanban-board/components/KanbanHeader'
import Modals from '@/app/(admin)/(apps)/(projects)/kanban-board/components/Modals'
import { kanbanSectionsData, KanbanTaskData } from '@/app/(admin)/(apps)/(projects)/kanban-board/data'
import { KanbanProvider } from '@/context/useKanbanContext'

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
