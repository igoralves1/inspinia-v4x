import { Link } from 'react-router'
import { useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import CreatableSelect from 'react-select/creatable'
import Select from 'react-select'

type OptionType = {
  label: string
  value: string
}

const basicOptions: OptionType[] = [
  { value: 'Choice 1', label: 'Choice 1' },
  { value: 'Choice 2', label: 'Choice 2' },
  { value: 'Choice 3', label: 'Choice 3' },
]

const groupedOptions = [
  {
    label: 'UK',
    options: [
      { label: 'London', value: 'London' },
      { label: 'Manchester', value: 'Manchester' },
      { label: 'Liverpool', value: 'Liverpool' },
    ],
  },
  {
    label: 'FR',
    options: [
      { label: 'Paris', value: 'Paris' },
      { label: 'Lyon', value: 'Lyon' },
      { label: 'Marseille', value: 'Marseille' },
    ],
  },
  {
    label: 'DE',
    options: [
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' },
      { label: 'Berlin', value: 'Berlin' },
    ],
    isDisabled: true,
  },
  {
    label: 'US',
    options: [
      { label: 'New York', value: 'New York' },
      { label: 'Washington', value: 'Washington', isDisabled: true },
      { label: 'Michigan', value: 'Michigan' },
    ],
  },
  {
    label: 'SP',
    options: [
      { label: 'Madrid', value: 'Madrid' },
      { label: 'Barcelona', value: 'Barcelona' },
      { label: 'Malaga', value: 'Malaga' },
    ],
  },
  {
    label: 'CA',
    options: [
      { label: 'Montreal', value: 'Montreal' },
      { label: 'Toronto', value: 'Toronto' },
      { label: 'Vancouver', value: 'Vancouver' },
    ],
  },
]

const ReactSelect = () => {
  const [singleDefault, setSingleDefault] = useState<OptionType | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">React Select</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">
          A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.
        </p>

        <Link className="btn btn-link p-0 fw-semibold" to="https://react-select.com/" target="_blank">
          React Select
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <CardBody>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Basic Select</h5>
            <p className="text-muted mb-0">Basic single select using react-select</p>
          </Col>
          <Col lg={6}>
            <Select
              className="react-select"
              classNamePrefix={'react-select'}
              placeholder="This is a placeholder"
              options={basicOptions}
              value={singleDefault}
              onChange={(val) => setSingleDefault(val as OptionType)}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Option Groups</h5>
            <p className="text-muted mb-0">Option groups using react-select</p>
          </Col>
          <Col lg={6}>
            <Select className="react-select" classNamePrefix={'react-select'} placeholder="Select City" options={groupedOptions} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">No Search</h5>
            <p className="text-muted mb-0">
              Disable search box using <code>isSearchable=&#123;false&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <Select className="react-select" classNamePrefix={'react-select'} isSearchable={false} options={basicOptions} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">No Sorting</h5>
            <p className="text-muted mb-0">Options shown in provided order</p>
          </Col>
          <Col lg={6}>
            <Select className="react-select" classNamePrefix={'react-select'} options={groupedOptions.flatMap((g) => g.options)} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Keep Menu Open on Select</h5>
            <p className="text-muted mb-0">
              Open the menu when an option is selected using <code>closeMenuOnSelect=&#123;false&#125;</code>
            </p>
          </Col>
          <Col lg={6}>
            <Select className="react-select" classNamePrefix={'react-select'} closeMenuOnSelect={false} options={basicOptions} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Multiple Select</h5>
            <p className="text-muted mb-0">Select multiple values</p>
          </Col>
          <Col lg={6}>
            <Select className="react-select" classNamePrefix={'react-select'} isMulti options={basicOptions} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Multiple Select With Option Groups</h5>
            <p className="text-muted mb-0">Select multiple using grouped options</p>
          </Col>
          <Col lg={6}>
            <Select className="react-select" classNamePrefix={'react-select'} isMulti options={groupedOptions} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Creatable Select</h5>
            <p className="text-muted mb-0">Creates new options along with choosing existing options</p>
          </Col>
          <Col lg={6}>
            <CreatableSelect className="react-select" classNamePrefix={'react-select'} isClearable options={basicOptions} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Multiple Creatable Select</h5>
            <p className="text-muted mb-0">Creates new options along with choosing existing options</p>
          </Col>
          <Col lg={6}>
            <CreatableSelect className="react-select" classNamePrefix={'react-select'} isClearable isMulti options={basicOptions} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ReactSelect
