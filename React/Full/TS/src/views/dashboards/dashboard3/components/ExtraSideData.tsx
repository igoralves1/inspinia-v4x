import { CardBody, Nav, NavItem, NavLink, Offcanvas, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { TbAdjustmentsHorizontal, TbBrandFigma, TbCalendarEvent, TbCards, TbCircleFilled, TbMessage, TbTruckDelivery } from 'react-icons/tb'
import { Link } from 'react-router'
import SimpleBar from 'simplebar-react'
import { useToggle } from 'usehooks-ts'

import { chatItems, type ChatItemType } from '../data'
import { OrdersChart, PostsChart } from './charts'

import user5Img from '@/assets/images/users/user-5.jpg'
import user6Img from '@/assets/images/users/user-6.jpg'
import user7Img from '@/assets/images/users/user-7.jpg'
import user8Img from '@/assets/images/users/user-8.jpg'
import user9Img from '@/assets/images/users/user-9.jpg'

const ChatItem = ({ item }: { item: ChatItemType }) => {
  const avatar = item.avatar ? (
    <img src={item.avatar} alt={item.name} className="avatar-sm rounded-circle" />
  ) : (
    <span className="avatar avatar-sm d-block">
      <span className={`avatar-title bg-${item.avatarColor}-subtle text-${item.avatarColor} rounded-circle fw-bold`}>{item.avatarText}</span>
    </span>
  )

  return (
    <Link to="" key={item.id} className="d-block py-2">
      {item.badge ? (
        <span className="badge text-bg-danger rounded-circle float-end">{item.badge}</span>
      ) : item.time ? (
        <span className="text-muted float-end fs-10">{item.time}</span>
      ) : null}
      <span className="d-flex align-items-center">
        <span className="flex-shrink-0">{avatar}</span>
        <span className="flex-grow-1 ms-2 text-truncate">
          <span className="mb-0 lh-base d-block fw-medium text-body fs-base">{item.name}</span>
          <span className={`fs-xxs mb-0 ${item.status === 'active' ? 'text-success' : 'text-muted'}`}>{item.message}</span>
        </span>
      </span>
    </Link>
  )
}

const SidebarContent = () => {
  return (
    <div className="d-block">
      <div className="p-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="mb-0 fw-semibold fs-sm">Quick Message</p>
          <p className="fw-semibold text-success mb-0 fs-xs">
            <TbCircleFilled size={12} /> Online
          </p>
        </div>

        {chatItems.map((item) => (
          <ChatItem key={item.id} item={item} />
        ))}

        <div className="text-center mt-2">
          <Link to="/chat" className="link-reset text-decoration-underline fw-semibold link-offset-3">
            Go to Chat <TbMessage size={13} className="fs-lg" />
          </Link>
        </div>
      </div>
      <div className="border-bottom">
        <TabContainer defaultActiveKey="Orders">
          <Nav variant="tabs" className="nav-justified nav-bordered nav-bordered-secondary mb-0">
            <NavItem>
              <NavLink eventKey="Posts">
                <TbCards className="fs-xl me-md-1" />
                <span className="d-none d-md-inline-block">Posts</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="Orders">
                <TbTruckDelivery className="fs-xl me-md-1" />
                <span className="d-none d-md-inline-block">Orders</span>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="p-3">
            <TabPane eventKey="Posts">
              <h4 className="mb-2">
                260<span className="text-muted ms-1 fs-sm">Posts</span>
              </h4>
              <p className="fs-xs mb-0">You have published 260 posts this month, showing strong content activity across all categories.</p>
              <CardBody>
                <PostsChart />
              </CardBody>
            </TabPane>
            <TabPane eventKey="Orders">
              <h4 className="mb-2">
                421<span className="text-muted ms-1 fs-sm">Orders</span>
              </h4>
              <p className="fs-xs mb-0">A total of 421 orders have been placed, reflecting consistent demand for your products.</p>
              <CardBody>
                <OrdersChart />
              </CardBody>
            </TabPane>
          </TabContent>
        </TabContainer>
      </div>
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="mb-0 fw-semibold fs-sm">Today's Schedule </p>
          <Link to="" className="text-muted d-flex align-items-center fs-xs fw-semibold">
            <TbCalendarEvent className="me-1" />
            <span>Invite</span>
          </Link>
        </div>
        <div className="pb-2 border-bottom border-light border-dashed">
          <div className="mb-2">
            <p className="mb-0 text-truncate fs-base fw-medium">Design Review Meeting</p>
            <span className="text-warning fs-xs">30 minute session with UI/UX team</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="avatar-group avatar-group-xs">
              <div className="avatar">
                <img src={user5Img} alt="Liam Carter" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar">
                <img src={user6Img} alt="Zoe Miles" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar avatar-xs">
                <span className="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold">D</span>
              </div>
            </div>
            <Link to="" className="btn btn-sm btn-soft-secondary rounded-circle btn-icon">
              <TbBrandFigma className="fs-lg" />
            </Link>
          </div>
        </div>
        <div className="py-2 border-bottom border-light border-dashed">
          <div className="mb-2">
            <p className="mb-0 text-truncate fs-base fw-medium">Sprint Planning Session</p>
            <span className="text-success fs-xs">1 hour agile team meeting</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="avatar-group avatar-group-xs">
              <div className="avatar">
                <img src={user7Img} alt="Ava Lee" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar">
                <img src={user8Img} alt="Ethan King" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar">
                <img src={user9Img} alt="Lucas White" className="avatar-xs rounded-circle" />
              </div>
            </div>
            <button type="button" className="btn btn-sm btn-soft-secondary rounded-circle btn-icon">
              <TbCalendarEvent className="fs-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExtraSideData = () => {
  const [show, toggle] = useToggle(false)

  return (
    <>

        <div className="asidebar-button d-xl-none d-flex">
          <button className="btn btn-danger btn-icon rounded-end-0" onClick={toggle}>
            <TbAdjustmentsHorizontal className="fs-xl" />
          </button>
        </div>

        <Offcanvas responsive='xl' show={show} onHide={toggle} placement="end" className={`asidebar border-start offcanvas-xl overflow-hidden`} tabIndex={-1}>
          <SimpleBar className="offcanvas-body p-0 h-100">
            <SidebarContent />
          </SimpleBar>
        </Offcanvas>
    </>
  )
}

export default ExtraSideData
