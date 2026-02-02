'use client'
import FlatpickrClient from '@/components/client-wrapper/FlatpickrClient'
import Link from 'next/link'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'

const FlatPicker = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">React Flatpickr</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">Lightweight, powerful javascript datetimepicker with no dependencies</p>

        <Link className="btn btn-link p-0 fw-semibold" href="https://github.com/haoxins/react-flatpickr" target="_blank">
          React Flatpickr
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <div className="border-top border-dashed"></div>

      <CardBody>
        <CardTitle as="h4" className="fs-sm fw-bold mb-4">
          Examples
        </CardTitle>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Basic</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;dateFormat: "d M, Y"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient className="form-control" options={{ dateFormat: 'd M, Y', defaultDate: 'today' }} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>DateTime</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;dateFormat: "d M, Y", enableTime: true&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              options={{
                dateFormat: 'd.m.y',
                enableTime: true,
                defaultDate: 'today',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Human-Friendly Dates</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;altFormat: "F j, Y", dateFormat: "Y-m-d"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              options={{
                altInput: true,
                altFormat: 'F j, Y',
                dateFormat: 'Y-m-d',
                defaultDate: 'today',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>MinDate and MaxDate</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;minDate: "25 12, 2021", maxDate: "29 12,2021"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Date"
              options={{
                dateFormat: 'd M, Y',
                minDate: '25 12, 2021',
                maxDate: '29 12,2021',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Default Date</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;defaultDate: "today"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Date"
              options={{
                dateFormat: 'd M, Y',
                defaultDate: 'today',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Disabling Dates</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;disable: ["15 12,2025"]&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Date"
              options={{
                dateFormat: 'd M, Y',
                defaultDate: '20 12,2025',
                disable: ['15 12,2025', '17 12,2025', '19 12,2025', '21 12,2025'],
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Selecting Multiple Dates</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;mode: "multiple"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              options={{
                dateFormat: 'd M, Y',
                defaultDate: 'today',
                mode: 'multiple',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Range</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;mode: "range"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              options={{
                dateFormat: 'd M, Y',
                mode: 'range',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Week Numbers</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;weekNumbers: true&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              options={{
                dateFormat: 'd M, Y',
                defaultDate: 'today',
                weekNumbers: true,
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Inline</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;inline: true&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              options={{
                dateFormat: 'd M, Y',
                defaultDate: 'today',
                inline: true,
              }}
            />
          </Col>
        </Row>
      </CardBody>

      <div className="border-top border-dashed"></div>

      <CardBody>
        <h4 className="card-title fs-sm fw-bold mb-4">Timepicker</h4>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Timepicker</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;enableTime: true, noCalendar: true, dateFormat: "H:i"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Time"
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>24-hour Time Picker</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;time_24hr: true&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Time"
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                time_24hr: true,
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Time Picker w/ Limits</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;minTime: "16:00", maxTime: "22:30"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Time"
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                minTime: '16:00',
                maxTime: '22:30',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Preloading Time</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;defaultDate: "16:45"&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Time"
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                defaultDate: '16:45',
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-4">
          <Col lg={6}>
            <h5>Inline</h5>
            <p className="text-muted mb-0">
              Set options <code>&#123;inline: true&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <FlatpickrClient
              className="form-control"
              placeholder="Select Time"
              options={{
                enableTime: true,
                noCalendar: true,
                inline: true,
              }}
            />
            <input type="text" className="form-control" data-provider="timepickr" data-time-inline="11:42" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default FlatPicker
