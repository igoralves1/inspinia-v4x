'use client'
import DayPickerClient from '@/components/client-wrapper/DayPickerClient'
import Link from 'next/link'
import { forwardRef, useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownMenu, DropdownToggle, FormControl, Row } from 'react-bootstrap'
import { arTN, gu } from 'react-day-picker/locale'
import { TbChevronRight } from 'react-icons/tb'

const BasicDayPicker = () => {
  const [selected, setSelected] = useState<Date>()

  return (
    <>
      <h5 className="fw-semibold mb-1">Basic DayPicker</h5>
      <p className="text-muted">
        Set props <code>animate=&#123;true&#125; mode="single"</code>
      </p>
      <DayPickerClient
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={selected ? `Selected: ${selected.toLocaleDateString()}` : 'Pick a day.'}
      />
    </>
  )
}

const CaptionLayout = () => {
  return (
    <>
      <h5 className="fw-semibold mb-1">Caption Layout</h5>
      <p className="text-muted">
        Set props <code>captionLayout="dropdown"</code>
      </p>
      <DayPickerClient animate mode="single" captionLayout="dropdown" />
    </>
  )
}

const MultipleDayPicker = () => {
  return (
    <>
      <h5 className="fw-semibold mb-1">Multiple DayPicker</h5>
      <p className="text-muted">
        Set props <code>mode="multiple"</code>
      </p>
      <DayPickerClient animate mode="multiple" />
    </>
  )
}

const RangeDayPicker = () => {
  return (
    <>
      <h5 className="fw-semibold mb-1">Range DayPicker</h5>
      <p className="text-muted">
        Set props <code>mode="range"</code>
      </p>
      <DayPickerClient animate mode="range" />
    </>
  )
}

const TimeZoneAndLocale = () => {
  return (
    <>
      <h5 className="fw-semibold mb-1">Time Zone and Locale</h5>
      <p className="text-muted">
        Set props <code>timeZone="Asia/Kolkata" locale=&#123;gu&#125;</code>
      </p>
      <DayPickerClient animate mode="single" timeZone="Asia/Kolkata" locale={gu} />
    </>
  )
}

const RtlDayPicker = () => {
  return (
    <>
      <h5 className="fw-semibold mb-1">RTL DayPicker</h5>
      <p className="text-muted">
        Set props <code>dir="rtl"</code>
      </p>
      <DayPickerClient animate mode="single" timeZone="Europe/Berlin" locale={arTN} dir="rtl" />
    </>
  )
}

const InputWithDayPicker = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date())

  const CustomToggle = forwardRef<HTMLInputElement, { onClick: () => void }>(({ onClick }, ref) => (
    <FormControl type="text" ref={ref} value={selected?.toDateString()} readOnly onClick={onClick} />
  ))
  CustomToggle.displayName = 'CustomToggle'

  return (
    <>
      <h5 className="fw-semibold mb-3">Input with DayPicker</h5>

      <Dropdown>
        <DropdownToggle as={CustomToggle} />
        <DropdownMenu className="p-3">
          <DayPickerClient animate mode="single" selected={selected} onSelect={setSelected} />
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

const DayPicker = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">React DayPicker</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">DayPicker is a React component for creating date pickers, calendars, and date inputs for web applications.</p>

        <Link className="btn btn-link p-0 fw-semibold" href="https://daypicker.dev/" target="_blank">
          React DayPicker
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <div className="border-top border-dashed"></div>

      <CardBody>
        <CardTitle as="h4" className="mb-3">
          Examples
        </CardTitle>

        <Row className="align-items-center g-4">
          <Col lg={4}>
            <BasicDayPicker />
          </Col>
          <Col lg={4}>
            <CaptionLayout />
          </Col>

          <Col lg={4}>
            <MultipleDayPicker />
          </Col>

          <Col lg={4}>
            <RangeDayPicker />
          </Col>

          <Col lg={4}>
            <TimeZoneAndLocale />
          </Col>

          <Col lg={4}>
            <RtlDayPicker />
          </Col>

          <Col lg={4}>
            <InputWithDayPicker />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DayPicker
