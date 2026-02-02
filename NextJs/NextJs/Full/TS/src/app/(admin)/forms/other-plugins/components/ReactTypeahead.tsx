'use client'
import { options, states } from '@/app/(admin)/forms/other-plugins/data'
import TypeaheadClient from '@/components/client-wrapper/TypeaheadClient'
import { groupBy } from 'lodash'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, FormControl, Row } from 'react-bootstrap'
import { Highlighter, Hint, Menu, MenuItem, Token } from 'react-bootstrap-typeahead'
import { Option } from 'react-bootstrap-typeahead/types/types'
import { TbChevronRight } from 'react-icons/tb'

const ReactTypeahead = () => {
  const [singleSelections, setSingleSelections] = useState<Option[]>([])

  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">React Bootstrap Typeahead</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">A flexible library that provides a strong foundation for building robust typeaheads</p>

        <Link className="btn btn-link p-0 fw-semibold" href="https://ericgio.github.io/react-bootstrap-typeahead/" target="_blank">
          React Bootstrap Typeahead
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <CardBody>
        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Basic</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient
              className="typeahead"
              labelKey="state"
              placeholder="Enter states from USA"
              options={options}
              selected={singleSelections}
              onChange={setSingleSelections}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Multiple Selection</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient className="typeahead" labelKey="state" placeholder="Enter states from USA" options={options} multiple />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Highlight The Only Result</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient className="typeahead" labelKey="state" placeholder="Enter states from USA" options={options} highlightOnlyResult />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Require Minimum Input</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient className="typeahead" labelKey="state" placeholder="Enter states from USA" options={options} minLength={3} />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Custom Input</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient
              className="typeahead"
              labelKey="state"
              placeholder="Enter states from USA"
              options={options}
              renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
                <Hint>
                  <FormControl
                    {...inputProps}
                    value={inputProps.value as string | number | string[] | undefined}
                    ref={(node) => {
                      inputRef(node)
                      referenceElementRef(node)
                    }}
                    size="lg"
                  />
                </Hint>
              )}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Custom Menu</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient
              className="typeahead"
              labelKey="name"
              placeholder="Enter states from USA"
              options={states}
              renderMenu={(results, { newSelectionPrefix, paginationText, renderMenuItemChildren, ...menuProps }, state) => {
                let index = 0
                const regions = groupBy(results, 'region')
                const items = Object.keys(regions)
                  .sort()
                  .map((region) => (
                    <Fragment key={region}>
                      {index !== 0 && <Menu.Divider />}
                      <Menu.Header>{region}</Menu.Header>
                      {regions[region].map((i: any) => {
                        const item = (
                          <MenuItem key={index} option={i} position={index}>
                            <Highlighter search={state.text}>{i.name}</Highlighter>
                          </MenuItem>
                        )
                        index += 1
                        return item
                      })}
                    </Fragment>
                  ))
                return <Menu {...menuProps}>{items}</Menu>
              }}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Custom Menu Item Contents</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient
              className="typeahead"
              labelKey="name"
              placeholder="Enter states from USA"
              options={states}
              renderMenuItemChildren={(option: any, { text }) => (
                <>
                  <Highlighter search={text}>{option.name}</Highlighter>,
                  <div>
                    <small>Population: {option.population.toLocaleString()}</small>
                  </div>
                </>
              )}
            />
          </Col>
        </Row>

        <div className="my-4 border-top border-dashed"></div>

        <Row className="g-3">
          <Col lg={6}>
            <h5 className="fw-semibold mb-1">Custom Token</h5>
          </Col>
          <Col lg={6}>
            <TypeaheadClient
              className="typeahead"
              labelKey="name"
              placeholder="Enter states from USA"
              options={states}
              multiple
              renderToken={(option: any, { onRemove }, index) => (
                <Token key={index} onRemove={onRemove} option={option}>
                  {`${option.name} (Pop: ${option.population.toLocaleString()})`}
                </Token>
              )}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ReactTypeahead
