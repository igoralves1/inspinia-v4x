import ComponentCard from '@/components/cards/ComponentCard'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { Col, ProgressBar, Row, Table } from 'react-bootstrap'
import { TbCaretRightFilled, TbLink } from 'react-icons/tb'

type TrafficSource = {
  url: string
  views: string
  uniques: string
}

const trafficSources: TrafficSource[] = [
  { url: '/dashboard', views: '9.8k', uniques: '8.5k' },
  { url: '/ecommerce-index', views: '8.2k', uniques: '7.1k' },
  { url: '/apps/projects-overview', views: '7.6k', uniques: '6.2k' },
  { url: '/pages/contact', views: '5.9k', uniques: '4.8k' },
  { url: '/support/faq', views: '5.2k', uniques: '4.3k' },
  { url: '/login', views: '4.7k', uniques: '3.9k' },
]

const TrafficSources = () => {
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const LiveViews = () => {
    const [currentVisitors, setCurrentVisitors] = useState(() => getRandomNumber(500, 800))

    const updateLiveVisitors = () => {
      const change = getRandomNumber(-20, 20)
      setCurrentVisitors((prev) => Math.max(100, prev + change))
    }

    useEffect(() => {
      const interval = setInterval(updateLiveVisitors, 1000)
      return () => clearInterval(interval)
    }, [])

    return (
      <Col lg>
        <h3 className="mb-2 fw-bold" id="live-visitors">
          {currentVisitors.toLocaleString()}
        </h3>
        <p className="mb-2 fw-semibold text-muted">Right Now</p>
      </Col>
    )
  }
  return (
    <ComponentCard title="Traffic Sources" isCloseable isCollapsible isRefreshable>
      <Row className="mb-2">
        <LiveViews />
        <Col lg="auto" className="align-self-center">
          <ul className="list-unstyled mb-0 lh-lg">
            <li>
              <TbCaretRightFilled className="align-middle text-primary me-1" />
              <span className="text-muted">Organic</span>
            </li>
            <li>
              <TbCaretRightFilled className="align-middle text-success me-1" />
              <span className="text-muted">Direct</span>
            </li>
            <li>
              <TbCaretRightFilled className="align-middle me-1" />
              <span className="text-muted">Campaign</span>
            </li>
          </ul>
        </Col>
      </Row>

      <ProgressBar style={{ height: 20 }} className="mb-3">
        <ProgressBar now={25} key={1} />
        <ProgressBar variant="success" now={50} key={2} />

        <ProgressBar variant="info" now={15} key={3} />
      </ProgressBar>

      <div className="table-responsive">
        <Table size="sm" className="table-custom table-nowrap table-hover table-centered mb-0">
          <thead className="bg-light align-middle bg-opacity-25 thead-sm">
            <tr className="text-uppercase fs-xxs">
              <th className="text-muted">URL</th>
              <th className="text-muted text-end">Views</th>
              <th className="text-muted text-end">Uniques</th>
            </tr>
          </thead>
          <tbody>
            {trafficSources.map((source, index) => (
              <tr key={index}>
                <td className="text-decoration-underline">{source.url}</td>
                <td className="text-end">{source.views}</td>
                <td className="text-end">{source.uniques}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="text-end mt-3">
        <Link to="/chat" className="link-reset text-decoration-underline fw-semibold link-offset-3">
          View all Links <TbLink size={13} />
        </Link>
      </div>
    </ComponentCard>
  )
}

export default TrafficSources
