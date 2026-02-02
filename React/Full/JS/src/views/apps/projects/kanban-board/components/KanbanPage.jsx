import { Card } from 'react-bootstrap';
import KanbanHeader from '@/views/apps/projects/kanban-board/components/KanbanHeader';
import Board from '@/views/apps/projects/kanban-board/components/Board';
import Modals from '@/views/apps/projects/kanban-board/components/Modals';
import { KanbanProvider } from '@/context/useKanbanContext';
import { kanbanSectionsData, KanbanTaskData } from '@/views/apps/projects/kanban-board/data';
const KanbanPage = () => {
  return <KanbanProvider sectionsData={kanbanSectionsData} tasksData={KanbanTaskData}>
      <div className="outlook-box kanban-app">
        <Card className="h-100 mb-0 flex-grow-1">
          <KanbanHeader />
          <Board />
          <Modals />
        </Card>
      </div>
    </KanbanProvider>;
};
export default KanbanPage;