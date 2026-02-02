'use client'
import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import Link from 'next/link'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { TbBriefcase, TbChevronRight, TbHome, TbInfoCircle, TbMail, TbSettings, TbUser, TbUserCircle } from 'react-icons/tb'

type TabContentItem = {
  id: string
  title: string
  variant: string
  text: string
  icon: string
}

const text1 =
  'This dashboard provides a quick overview of your recent activity, performance metrics, and system status. You can easily monitor key indicators, recent logins, pending tasks, and overall user engagement.'
const text2 =
  'View your latest interactions and actions taken across the platform. This includes recent file uploads, comments, status updates, and notification history to keep you up to date with ongoing changes.'
const text3 =
  'Customize your account preferences including theme options, notification settings, and privacy controls. Adjust layout configurations to suit your workflow and manage integration with third-party services.'

const tabContents: TabContentItem[] = [
  { id: '1', title: 'Overview', text: text1, variant: 'info', icon: 'tabler:home' },
  { id: '2', title: 'Activity', text: text2, variant: 'danger', icon: 'tabler:user-circle' },
  { id: '3', title: 'Settings', text: text3, variant: 'secondary', icon: 'tabler:settings' },
]

const DefaultTabs = () => {
  return (
    <ComponentCard title="Default Tabs">
      <p className="text-muted">Simple widget of tabbable panes of local content.</p>
      <TabContainer defaultActiveKey="Overview">
        <Nav className="nav-tabs mb-3">
          {(tabContents || []).slice(0, 3).map((tab, idx) => {
            return (
              <NavItem as="li" role="presentation" key={idx}>
                <NavLink eventKey={tab.title}>
                  <span className="d-none d-md-block">{tab.title}</span>
                </NavLink>
              </NavItem>
            )
          })}
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          {(tabContents || []).map((tab, idx) => {
            return (
              <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">{tab.text}</Col>
                </Row>
              </TabPane>
            )
          })}
        </TabContent>
      </TabContainer>
    </ComponentCard>
  )
}

const TabsJustified = () => {
  return (
    <ComponentCard title="Tabs Justified">
      <p className="text-muted">
        Using class <code>.nav-justified</code>, you can force your
        <code>tab menu items</code> to use the full available width.
      </p>
      <TabContainer defaultActiveKey="Profile">
        <Nav className="nav-justified nav-tabs mb-3">
          <NavItem>
            <NavLink eventKey={'Overview'} href="#overview1">
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'Profile'} href="#profile1">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'Settings'} href="#settings1">
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'Projects'} href="#projects1">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'Support'} href="#support1">
              Support
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey={'Overview'} id="overview1">
            <p className="mb-0">
              Get a high-level summary of recent activity, key performance indicators, and important announcements. Stay informed and make quick
              decisions based on real-time insights.
            </p>
          </TabPane>
          <TabPane eventKey={'Profile'} id="profile1">
            <p className="mb-0">
              Customize your profile, update personal information, and manage security settings like passwords and 2FA. Keep your account secure and
              up to date with your latest details.
            </p>
          </TabPane>
          <TabPane eventKey={'Settings'} id="settings1">
            <p className="mb-0">
              Configure system preferences, theme options, and notification settings. Easily adapt the platform to fit your workflow and preferences.
            </p>
          </TabPane>
          <TabPane eventKey={'Projects'} id="projects1">
            <p className="mb-0">
              View and manage all ongoing projects, tasks, and milestones. Collaborate with your team and track progress in real-time.
            </p>
          </TabPane>
          <TabPane eventKey={'Support'} id="support1">
            <p className="mb-0">
              Need help? Reach out to our support team or browse the help center for common questions, guides, and documentation.
            </p>
          </TabPane>
        </TabContent>
      </TabContainer>
    </ComponentCard>
  )
}

const TabsVerticalLeft = () => {
  return (
    <ComponentCard title="Tabs Vertical Left">
      <p className="text-muted">
        You can stack your navigation by changing the flex item direction with the
        <code>.flex-column</code> utility.
      </p>
      <Row>
        <TabContainer defaultActiveKey="Overview">
          <Col sm={3} mb={2} className="mb-sm-0">
            <Nav className="flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
              <NavLink eventKey="Overview" className="fw-semibold">
                Overview
              </NavLink>
              <NavLink eventKey="Profile" className="fw-semibold">
                Profile
              </NavLink>
              <NavLink eventKey="Settings" className="fw-semibold">
                Settings
              </NavLink>
              <NavLink eventKey="Projects" className="fw-semibold">
                Projects
              </NavLink>
              <NavLink eventKey="Support" className="fw-semibold">
                Support
              </NavLink>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent id="v-pills-tabContent">
              <TabPane eventKey={'Overview'} className="fade" id="v-pills-home">
                <p className="mb-2">
                  Welcome to your dashboard. Get an at-a-glance view of your recent activity, top stats, and personalized suggestions to enhance
                  productivity and stay on track.
                </p>
                <ul>
                  <li>View total project status</li>
                  <li>Quick links to recent files</li>
                  <li>Weekly performance charts</li>
                </ul>
                <p className="mb-0">Your dashboard is tailored to your activity and roles. Stay informed and always one step ahead.</p>
              </TabPane>
              <TabPane eventKey="Profile" className="fade" id="v-pills-profile">
                <p className="mb-2">Manage your personal details, change your profile photo, and update your contact information.</p>
                <ul>
                  <li>Name, Email, Phone</li>
                  <li>Change Password</li>
                  <li>Activity logs and preferences</li>
                </ul>
                <p className="mb-0">Keeping your profile up to date ensures a better and more secure experience.</p>
              </TabPane>
              <TabPane eventKey="Settings" className="fade" id="v-pills-settings">
                <p className="mb-2">Customize your preferences, notification options, and privacy settings.</p>
                <ul>
                  <li>Theme selection: Light / Dark mode</li>
                  <li>Email &amp; push notification toggles</li>
                  <li>Linked accounts and integrations</li>
                </ul>
                <p className="mb-0">Settings help personalize your interface and improve your workflow efficiency.</p>
              </TabPane>
              <TabPane eventKey={'Projects'} className="fade" id="v-pills-projects">
                <p className="mb-2">Track all your active, completed, and upcoming projects in one place.</p>
                <ul>
                  <li>Kanban board and Gantt charts</li>
                  <li>Task assignments and deadlines</li>
                  <li>Progress indicators and timelines</li>
                </ul>
                <p className="mb-0">Use collaboration tools, upload documents, and manage deliverables directly from here.</p>
              </TabPane>
              <TabPane eventKey="Support" className="fade" id="v-pills-support">
                <p className="mb-2">Need assistance? Access our help center or contact our support team directly.</p>
                <ul>
                  <li>Browse FAQs and tutorials</li>
                  <li>Submit a support ticket</li>
                  <li>Live chat with support agents</li>
                </ul>
                <p className="mb-0">We’re here 24/7 to assist you with anything you need—technical or account-related.</p>
              </TabPane>
            </TabContent>
          </Col>
        </TabContainer>
      </Row>
    </ComponentCard>
  )
}

const TabsVerticalRight = () => {
  return (
    <ComponentCard title="Tabs with Colored Navs">
      <p className="text-muted">
        You can add the <code>.nav-pills-*</code> class to the <code>.nav</code> element to apply colored pill styles.
      </p>
      <Row>
        <TabContainer defaultActiveKey="Overview">
          <Col sm={9}>
            <TabContent id="v-pills-tabContent">
              <TabPane eventKey={'Overview'} className="fade" id="v-pills-home">
                <p className="mb-2">
                  Welcome to your dashboard. Get an at-a-glance view of your recent activity, top stats, and personalized suggestions to enhance
                  productivity and stay on track.
                </p>
                <ul>
                  <li>View total project status</li>
                  <li>Quick links to recent files</li>
                  <li>Weekly performance charts</li>
                </ul>
                <p className="mb-0">Your dashboard is tailored to your activity and roles. Stay informed and always one step ahead.</p>
              </TabPane>
              <TabPane eventKey="Profile" className="fade" id="v-pills-profile">
                <p className="mb-2">Manage your personal details, change your profile photo, and update your contact information.</p>
                <ul>
                  <li>Name, Email, Phone</li>
                  <li>Change Password</li>
                  <li>Activity logs and preferences</li>
                </ul>
                <p className="mb-0">Keeping your profile up to date ensures a better and more secure experience.</p>
              </TabPane>
              <TabPane eventKey="Settings" className="fade" id="v-pills-settings">
                <p className="mb-2">Customize your preferences, notification options, and privacy settings.</p>
                <ul>
                  <li>Theme selection: Light / Dark mode</li>
                  <li>Email &amp; push notification toggles</li>
                  <li>Linked accounts and integrations</li>
                </ul>
                <p className="mb-0">Settings help personalize your interface and improve your workflow efficiency.</p>
              </TabPane>
              <TabPane eventKey={'Projects'} className="fade" id="v-pills-projects">
                <p className="mb-2">Track all your active, completed, and upcoming projects in one place.</p>
                <ul>
                  <li>Kanban board and Gantt charts</li>
                  <li>Task assignments and deadlines</li>
                  <li>Progress indicators and timelines</li>
                </ul>
                <p className="mb-0">Use collaboration tools, upload documents, and manage deliverables directly from here.</p>
              </TabPane>
              <TabPane eventKey="Support" className="fade" id="v-pills-support">
                <p className="mb-2">Need assistance? Access our help center or contact our support team directly.</p>
                <ul>
                  <li>Browse FAQs and tutorials</li>
                  <li>Submit a support ticket</li>
                  <li>Live chat with support agents</li>
                </ul>
                <p className="mb-0">We’re here 24/7 to assist you with anything you need—technical or account-related.</p>
              </TabPane>
            </TabContent>
          </Col>
          <Col sm={3} mb={2} className="mb-sm-0">
            <Nav className="flex-column nav-pills nav-pills-secondary" id="v-pills-tab1">
              <NavLink eventKey="Overview" className="fw-semibold">
                Overview
              </NavLink>
              <NavLink eventKey="Profile" className="fw-semibold">
                Profile
              </NavLink>
              <NavLink eventKey="Settings" className="fw-semibold">
                Settings
              </NavLink>
              <NavLink eventKey="Projects" className="fw-semibold">
                Projects
              </NavLink>
              <NavLink eventKey="Support" className="fw-semibold">
                Support
              </NavLink>
            </Nav>
          </Col>
        </TabContainer>
      </Row>
    </ComponentCard>
  )
}

const TabsBordered = () => {
  return (
    <ComponentCard title="Tabs Justified">
      <p className="text-muted">
        The navigation item can have a simple bottom border as well. Just specify the class
        <code>.nav-bordered</code>.
      </p>
      <TabContainer defaultActiveKey="Profile">
        <Nav className="nav-tabs nav-bordered mb-3">
          <NavItem>
            <NavLink eventKey="Home" href="#home-b1">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="Profile" href="#profile-b1">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="Settings" href="#settings-b1">
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="About" href="#about-b1">
              About
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey="Home" id="home-b1">
            <p className="mb-0">
              Welcome to our online platform! Here, we strive to offer the best products and services tailored to your lifestyle. Whether you're
              redecorating your home or looking for expert advice on the latest trends, we've got you covered.
            </p>
          </TabPane>
          <TabPane eventKey="Profile" id="profile-b1">
            <p className="mb-0">
              Hi! I am an avid explorer, constantly seeking new adventures and insights. My passions include technology, literature, travel, fitness,
              and self-development. I enjoy learning new skills and sharing knowledge with others to foster personal growth.
            </p>
          </TabPane>
          <TabPane eventKey="Settings" id="settings-b1">
            <p className="mb-0">
              Nestled in the heart of the city, a charming cafe offers a peaceful retreat from the urban hustle. Its inviting ambiance, with its cozy
              decor and warm lighting, provides the perfect setting for relaxation or a productive meeting.
            </p>
          </TabPane>
          <TabPane eventKey="About" id="about-b1">
            <p className="mb-0">
              Our company is dedicated to offering high-quality services and products designed to enrich your life. With a focus on sustainability and
              innovation, we aim to create lasting value for our customers. Join us on our journey to make everyday living better!
            </p>
          </TabPane>
        </TabContent>
      </TabContainer>
    </ComponentCard>
  )
}

const BorderedTabswithColoredBorder = () => {
  return (
    <ComponentCard title="Bordered Tabs with Colored Border">
      <p className="text-muted">
        You can add the <code>.nav-bordered-*</code> class to the <code>.nav</code> element to apply colored border styles.
      </p>
      <TabContainer defaultActiveKey="Profile">
        <Nav className="nav-tabs nav-justified nav-bordered nav-bordered-danger mb-3">
          <NavItem>
            <NavLink eventKey="Home" href="#home-b1">
              <TbHome className="fs-lg me-md-1 align-middle" />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="Profile" href="#profile-b1">
              <TbUserCircle className="fs-lg me-md-1 align-middle" />
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="Settings" href="#settings-b1">
              <TbSettings className="fs-lg me-md-1 align-middle" />
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="About" href="#about-b1">
              <TbInfoCircle className="fs-lg me-md-1 align-middle" />
              About
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey="Home" id="home-b1">
            <p className="mb-0">
              Welcome to our online platform! Here, we strive to offer the best products and services tailored to your lifestyle. Whether you're
              redecorating your home or looking for expert advice on the latest trends, we've got you covered.
            </p>
          </TabPane>
          <TabPane eventKey="Profile" id="profile-b1">
            <p className="mb-0">
              Hi! I am an avid explorer, constantly seeking new adventures and insights. My passions include technology, literature, travel, fitness,
              and self-development. I enjoy learning new skills and sharing knowledge with others to foster personal growth.
            </p>
          </TabPane>
          <TabPane eventKey="Settings">
            <p className="mb-0">
              Nestled in the heart of the city, a charming cafe offers a peaceful retreat from the urban hustle. Its inviting ambiance, with its cozy
              decor and warm lighting, provides the perfect setting for relaxation or a productive meeting.
            </p>
          </TabPane>
          <TabPane eventKey="About" id="about-b1">
            <p className="mb-0">
              Our company is dedicated to offering high-quality services and products designed to enrich your life. With a focus on sustainability and
              innovation, we aim to create lasting value for our customers. Join us on our journey to make everyday living better!
            </p>
          </TabPane>
        </TabContent>
      </TabContainer>
    </ComponentCard>
  )
}

const IconsTabs = () => {
  return (
    <ComponentCard title="Icons Tabs">
      <p className="text-muted">
        The navigation item can have a simple bottom border as well. Just specify the class
        <code>.nav-bordered</code>.
      </p>
      <TabContainer defaultActiveKey="2">
        <Nav className="nav-tabs nav-bordered nav-bordered-success mb-3">
          <NavItem>
            <NavLink eventKey={'1'} href="#home-i1">
              <TbHome className="fs-22 align-middle" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'2'} href="#profile-i1">
              <TbUser className="fs-22 align-middle" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'3'} href="#settings-i1">
              <TbSettings className="fs-22 align-middle" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'4'} href="#about-i1">
              <TbInfoCircle className=" fs-22 align-middle" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'5'} href="#projects-i1">
              <TbBriefcase className="fs-22 align-middle" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'6'} href="#contact-i1">
              <TbMail className="fs-22 align-middle" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey={'1'} id="home-i1">
            <p className="mb-0">
              Discover our platform designed to make your daily life easier. From modern interiors to smart home gadgets, our curated selection is
              tailored for comfort, functionality, and style.
            </p>
          </TabPane>
          <TabPane eventKey={'2'} id="profile-i1">
            <p className="mb-0">
              Hello! I’m a creative thinker who thrives on innovation and meaningful connections. I enjoy exploring tech trends, reading insightful
              books, and traveling to experience new cultures and cuisines.
            </p>
          </TabPane>
          <TabPane eventKey={'3'} id="settings-i1">
            <p className="mb-0">
              A peaceful workspace can make all the difference. That’s why we offer customizable setups, soundproofing tips, and productivity tools to
              help you stay focused and inspired every day.
            </p>
          </TabPane>
          <TabPane eventKey={'4'} id="about-i1">
            <p className="mb-0">
              We’re a team of innovators passionate about creating seamless experiences. Our mission is to deliver solutions that merge design,
              functionality, and purpose in every project we undertake.
            </p>
          </TabPane>
          <TabPane eventKey={'5'} id="projects-i1">
            <p className="mb-0">
              Our recent projects range from mobile app development to full-scale branding initiatives. We believe in data-driven strategies paired
              with creative storytelling to drive results.
            </p>
          </TabPane>
          <TabPane eventKey={'6'} id="contact-i1">
            <p className="mb-0">
              Have questions or ideas? We'd love to hear from you! Reach out through our contact form, social media, or drop by our office for a chat
              over coffee.
            </p>
          </TabPane>
        </TabContent>
      </TabContainer>
    </ComponentCard>
  )
}

const CardWithTabs = () => {
  return (
    <TabContainer defaultActiveKey={'Summary'}>
      <Card>
        <CardHeader className="card-tabs d-flex align-items-center">
          <div className="flex-grow-1">
            <CardTitle as={'h4'}>Card with Tabs</CardTitle>
          </div>
          <Nav className="nav-tabs nav-justified card-header-tabs nav-bordered">
            <NavItem>
              <NavLink eventKey="Summary" href="#home-ct">
                <TbHome className="d-md-none d-block" />
                <span className="d-none d-md-block">Summary</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="Accounts" href="#profile-ct">
                <TbUserCircle className="d-md-none d-block" />
                <span className="d-none d-md-block">Accounts</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="Settings" href="#settings-ct">
                <TbSettings className="d-md-none d-block" />
                <span className="d-none d-md-block">Settings</span>
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent>
            <TabPane eventKey="Summary" id="home-ct">
              <p className="mb-0">
                Welcome to your financial dashboard. Here, you can monitor real-time updates on your income, expenses, savings, and investments. Our
                tools are designed to help you make informed decisions and achieve your financial goals faster.
              </p>
            </TabPane>
            <TabPane eventKey="Accounts" id="profile-ct">
              <p className="mb-0">
                View and manage all your bank accounts, credit cards, and loan details in one place. Link your financial institutions securely and
                keep track of balances, transactions, and payment schedules with ease.
              </p>
            </TabPane>
            <TabPane eventKey="Settings" id="settings-ct">
              <p className="mb-0">
                Customize your preferences including budgeting alerts, currency format, report frequency, and security settings. Enable multi-factor
                authentication and choose how you'd like to receive account activity notifications.
              </p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </TabContainer>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Tabs" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">Documentation and examples on how to use Bootstrap’s tab components.</p>
                  <Link className="btn btn-link p-0 fw-semibold" href="https://react-bootstrap.netlify.app/docs/components/tabs" target="_blank">
                    Tabs on React Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xxl={6}>
              <DefaultTabs />
            </Col>
            <Col xxl={6}>
              <TabsJustified />
            </Col>
            <Col xxl={6}>
              <TabsVerticalLeft />
            </Col>
            <Col xxl={6}>
              <TabsVerticalRight />
            </Col>
            <Col xxl={6}>
              <TabsBordered />
            </Col>
            <Col xxl={6}>
              <BorderedTabswithColoredBorder />
            </Col>
            <Col xxl={6}>
              <IconsTabs />
            </Col>
            <Col xxl={6}>
              <CardWithTabs />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
