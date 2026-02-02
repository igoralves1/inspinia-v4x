import { Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { TbActivity, TbListCheck, TbMessageCircle } from 'react-icons/tb'
import Comments from '@/views/apps/projects/projects/[projectId]/components/Comments.tsx'
import TaskList from '@/views/apps/projects/projects/[projectId]/components/TaskList.tsx'
import Activity from '@/views/apps/projects/projects/[projectId]/components/Activity.tsx'

const ProjectTabs = () => {
  return (
    <TabContainer defaultActiveKey="0">
      <Nav as="ul" className="nav nav-tabs nav-bordered mb-3" role="tablist">
        <NavItem>
          <NavLink eventKey="0" role="tab">
            <TbMessageCircle className="fs-lg me-md-1 align-middle" />
            <span className="d-none d-md-inline-block align-middle">Comments</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'1'} role="tab">
            <TbListCheck className="fs-lg me-md-1 align-middle" />
            <span className="d-none d-md-inline-block align-middle">Task List</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'2'} role="tab">
            <TbActivity className="fs-lg me-md-1 align-middle" />
            <span className="d-none d-md-inline-block align-middle">Activity</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane eventKey="0" className="fade" id="comments" role="tabpanel">
          <Comments />
        </TabPane>

        <TabPane eventKey="1" className="fade" id="tasks" role="tabpanel">
          <TaskList />
        </TabPane>

        <TabPane eventKey="2" className="fade" id="activity" role="tabpanel">
          <Activity />
        </TabPane>
      </TabContent>
    </TabContainer>
  )
}

export default ProjectTabs
