import { Link } from 'react-router'
import { useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import DatePicker from 'react-datepicker'

const BasicDatePicker = () => {
  const [selected, setSelected] = useState<Date | null>(new Date())

  return (
    <Row className="g-4">
      <Col lg={6}>
        <h5>Basic DatePicker</h5>
      </Col>
      <Col lg={6}>
        <DatePicker className="form-control" selected={selected} onChange={(date) => setSelected(date)} />
      </Col>
    </Row>
  )
}

const MultipleMonthsDatePicker = () => {
  const [selected, setSelected] = useState<Date | null>(new Date())

  return (
    <Row className="g-4">
      <Col lg={6}>
        <h5>Single Date with multiple months</h5>
        Set prop <code>monthsShown=&#123;2&#125;</code>
      </Col>
      <Col lg={6}>
        <DatePicker className="form-control" selected={selected} onChange={(date) => setSelected(date)} monthsShown={2} />
      </Col>
    </Row>
  )
}

const DatePickerDateFormat = () => {
  const [selected, setSelected] = useState<Date | null>(new Date())

  return (
    <Row className="g-4">
      <Col lg={6}>
        <h5>Custom date format</h5>
        <p className="text-muted mb-0">
          Set prop <code>dateFormat="yyyy-MM-dd"</code>
        </p>
      </Col>
      <Col lg={6}>
        <DatePicker className="form-control" selected={selected} onChange={(date) => setSelected(date)} dateFormat="yyyy-MM-dd" />
      </Col>
    </Row>
  )
}

const DatePickerSpecificRange = () => {
  const [selected, setSelected] = useState<Date | null>(new Date())

  return (
    <Row className="g-4">
      <Col lg={6}>
        <h5>Specific date range</h5>
        Set prop <code>minDate</code> and <code>maxDate</code>
      </Col>
      <Col lg={6}>
        <DatePicker
          className="form-control"
          selected={selected}
          onChange={(date) => setSelected(date)}
          minDate={new Date()}
          maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
        />
      </Col>
    </Row>
  )
}

const DatePickerWithTime = () => {
  const [selected, setSelected] = useState<Date | null>(new Date())

  return (
    <Row className="g-4">
      <Col lg={6}>
        <h5>With Time</h5>
        Set prop <code>showTimeSelect</code> and <code>dateFormat="MMMM d, yyyy h:mm aa"</code>
      </Col>
      <Col lg={6}>
        <DatePicker
          className="form-control"
          selected={selected}
          onChange={(date) => setSelected(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </Col>
    </Row>
  )
}

const TimeOnlyDatePicker = () => {
  const [selected, setSelected] = useState<Date | null>(new Date())

  return (
    <Row className="g-4">
      <Col lg={6}>
        <h5>Time Only</h5>
        Set prop <code>showTimeSelect</code>, <code>showTimeSelectOnly</code> and <code>dateFormat="h:mm aa"</code>
      </Col>
      <Col lg={6}>
        <DatePicker
          className="form-control"
          selected={selected}
          onChange={(date) => setSelected(date)}
          showTimeSelect
          showTimeSelectOnly
          dateFormat="h:mm aa"
        />
      </Col>
    </Row>
  )
}

const ReactDatePicker = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">React DatePicker</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">A simple and reusable datepicker component for React.</p>

        <Link className="btn btn-link p-0 fw-semibold" to="https://reactdatepicker.com/" target="_blank">
          React DatePicker
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <div className="border-top border-dashed"></div>

      <CardBody>
        <CardTitle as="h4" className="fs-sm fw-bold mb-4">
          Examples
        </CardTitle>

        <BasicDatePicker />

        <div className="my-4 border-top border-dashed"></div>

        <MultipleMonthsDatePicker />

        <div className="my-4 border-top border-dashed"></div>

        <DatePickerDateFormat />

        <div className="my-4 border-top border-dashed"></div>

        <DatePickerSpecificRange />

        <div className="my-4 border-top border-dashed"></div>

        <DatePickerWithTime />

        <div className="my-4 border-top border-dashed"></div>

        <TimeOnlyDatePicker />
      </CardBody>
    </Card>
  )
}

export default ReactDatePicker
