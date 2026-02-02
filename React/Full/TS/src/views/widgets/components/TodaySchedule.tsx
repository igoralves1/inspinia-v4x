import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import { TbBrandFigma, TbCalendar, TbCalendarEvent } from 'react-icons/tb'

import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user7 from '@/assets/images/users/user-7.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import user9 from '@/assets/images/users/user-9.jpg'
import { Link } from 'react-router'

const TodaySchedule = () => {
  return (
    <Card>
      <CardHeader className="justify-content-between">
        <h4 className="card-title">Today's Schedule</h4>
        <Link to="" className="link-primary fw-semibold">
          <TbCalendar className="me-1" />
          <span>Invite</span>
        </Link>
      </CardHeader>

      <CardBody>
        <div className="pb-2 border-bottom border-light border-dashed">
          <div className="mb-2">
            <p className="mb-1 text-truncate fs-sm fw-medium">Design Review Meeting</p>
            <span className="text-warning fs-xs">30 minute session with UI/UX team</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="avatar-group avatar-group-xs">
              <div className="avatar">
                <img src={user5} alt="Liam Carter" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar">
                <img src={user6} alt="Zoe Miles" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar avatar-xs">
                <span className="avatar-title bg-primary-subtle text-primary rounded-circle fw-bold">D</span>
              </div>
            </div>
            <Button variant="soft-secondary" type="button" size={'sm'} className="rounded-circle btn-icon">
              <TbBrandFigma className="fs-lg" />
            </Button>
          </div>
        </div>

        <div className="py-2 border-bottom border-light border-dashed">
          <div className="mb-2">
            <p className="mb-1 text-truncate fs-sm fw-medium">Sprint Planning Session</p>
            <span className="text-success fs-xs">1 hour agile team meeting</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="avatar-group avatar-group-xs">
              <div className="avatar">
                <img src={user7} alt="Ava Lee" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar">
                <img src={user8} alt="Ethan King" className="avatar-xs rounded-circle" />
              </div>
              <div className="avatar">
                <img src={user9} alt="Lucas White" className="avatar-xs rounded-circle" />
              </div>
            </div>
            <Button variant="soft-secondary" type="button" size={'sm'} className="rounded-circle btn-icon">
              <TbCalendarEvent className="fs-lg" />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default TodaySchedule
