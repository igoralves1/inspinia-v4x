import ComponentCard from '@/components/cards/ComponentCard'
import { Col, Form, Row } from 'react-bootstrap'

const ChecksRadiosSwitches = () => {
  return (
    <ComponentCard title="Checks, Radios and Switches">
      <Row>
        <Col lg={12}>
          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Checkboxes</label>
            </Col>
            <Col lg={5}>
              <Form.Check type="checkbox" label="Default Checkbox" className="mb-2" />

              <div className="mb-2">
                <Form.Check inline type="checkbox" label="Inline 1" />
                <Form.Check inline type="checkbox" label="Inline 2" />
              </div>

              <Form.Check type="checkbox" label="Disabled checked checkbox" checked disabled className="mb-2" onChange={() => {}} />

              <h5 className="mt-3">Sizes</h5>

              <Form.Check type="checkbox" label="I'm 16px Checkbox" className="fs-lg mb-2" />

              <Form.Check type="checkbox" label="I'm 20px Checkbox" className="fs-xxl mb-2" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Radios</label>
            </Col>
            <Col lg={5}>
              <Form.Check type="radio" name="group1" label="Option 1" className="mb-2" />

              <Form.Check type="radio" name="group1" label="Option 2" className="mb-2" />

              <div className="mb-2">
                <Form.Check type="radio" name="group2" inline label="Option 1" />
                <Form.Check type="radio" name="group2" inline label="Option 2" />
              </div>

              <Form.Check type="radio" checked disabled label="Disabled Checked Radio" className="mb-2" onChange={() => {}} />

              <h5 className="mt-3">Sizes</h5>

              <div className="mb-2">
                <Form.Check type="radio" label="Cash" name="group3" inline className="fs-lg" />
                <Form.Check type="radio" label="Card" name="group3" inline className="fs-lg" />
              </div>

              <div className="mb-2">
                <Form.Check type="radio" label="Pickup" name="group4" inline className="fs-xxl" />
                <Form.Check type="radio" label="Home Delivery" name="group4" inline className="fs-xxl" />
              </div>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Switches</label>
            </Col>
            <Col lg={5}>
              <Form.Check type="switch" label="Enabled Switch" className="mb-2" />

              <Form.Check type="switch" label="Disabled Switch" disabled className="mb-2" />

              <h5 className="mt-3">Sizes</h5>

              <Form.Check type="switch" label="I'm 16px Switch" className="fs-lg mb-2" />

              <Form.Check type="switch" label="I'm 20px Switch" className="fs-xxl mb-2" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Reverse</label>
            </Col>
            <Col lg={5}>
              <div className="w-lg-50">
                <Form.Check type="checkbox" reverse label="Reverse checkbox" className="mb-2" />
                <Form.Check type="radio" reverse label="Reverse radio" className="mb-2" />
                <Form.Check type="switch" reverse label="Reverse switch" className="mb-2" />
              </div>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Colored Checkboxes</label>
            </Col>
            <Col lg={5}>
              <div className="d-flex flex-wrap gap-4">
                <div>
                  <div className="form-check form-check-primary mb-2">
                    <Form.Check type="checkbox" id="checkPrimary" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkPrimary">
                      Primary
                    </label>
                  </div>
                  <div className="form-check form-check-secondary mb-2">
                    <Form.Check type="checkbox" id="checkSecondary" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkSecondary">
                      Secondary
                    </label>
                  </div>
                  <div className="form-check form-check-success mb-2">
                    <Form.Check type="checkbox" id="checkSuccess" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkSuccess">
                      Success
                    </label>
                  </div>
                  <div className="form-check form-check-info mb-2">
                    <Form.Check type="checkbox" id="checkInfo" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkInfo">
                      Info
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check form-check-warning mb-2">
                    <Form.Check type="checkbox" id="checkWarning" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkWarning">
                      Warning
                    </label>
                  </div>
                  <div className="form-check form-check-danger mb-2">
                    <Form.Check type="checkbox" id="checkDanger" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkDanger">
                      Danger
                    </label>
                  </div>
                  <div className="form-check form-check-purple mb-2">
                    <Form.Check type="checkbox" id="checkPurple" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkPurple">
                      Purple
                    </label>
                  </div>
                  <div className="form-check form-check-dark">
                    <Form.Check type="checkbox" id="checkDark" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="checkDark">
                      Dark
                    </label>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Colored Radios</label>
            </Col>
            <Col lg={5}>
              <div className="d-flex flex-wrap gap-4">
                <div>
                  <div className="form-check form-check-primary mb-2">
                    <Form.Check type="radio" name="radioPrimary" id="radioPrimary" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioPrimary">
                      Primary
                    </label>
                  </div>
                  <div className="form-check form-check-secondary mb-2">
                    <Form.Check type="radio" name="radioSecondary" id="radioSecondary" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioSecondary">
                      Secondary
                    </label>
                  </div>
                  <div className="form-check form-check-success mb-2">
                    <Form.Check type="radio" name="radioSuccess" id="radioSuccess" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioSuccess">
                      Success
                    </label>
                  </div>
                  <div className="form-check form-check-info mb-2">
                    <Form.Check type="radio" name="radioInfo" id="radioInfo" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioInfo">
                      Info
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check form-check-warning mb-2">
                    <Form.Check type="radio" name="radioWarning" id="radioWarning" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioWarning">
                      Warning
                    </label>
                  </div>
                  <div className="form-check form-check-danger mb-2">
                    <Form.Check type="radio" name="radioDanger" id="radioDanger" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioDanger">
                      Danger
                    </label>
                  </div>
                  <div className="form-check form-check-purple mb-2">
                    <Form.Check type="radio" name="radioPurple" id="radioPurple" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioPurple">
                      Purple
                    </label>
                  </div>
                  <div className="form-check form-check-dark">
                    <Form.Check type="radio" name="radioDark" id="radioDark" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="radioDark">
                      Dark
                    </label>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Colored Switches</label>
            </Col>
            <Col lg={5}>
              <div className="d-flex flex-wrap gap-4">
                <div>
                  <div className="form-check form-check-primary form-switch mb-2">
                    <input type="checkbox" className="form-check-input" id="switchPrimary" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchPrimary">
                      Primary
                    </label>
                  </div>
                  <div className="form-check form-check-secondary form-switch mb-2">
                    <input type="checkbox" className="form-check-input" id="switchSecondary" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchSecondary">
                      Secondary
                    </label>
                  </div>
                  <div className="form-check form-check-success form-switch mb-2">
                    <input type="checkbox" className="form-check-input" id="switchSuccess" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchSuccess">
                      Success
                    </label>
                  </div>
                  <div className="form-check form-check-info form-switch mb-2">
                    <input type="checkbox" className="form-check-input" id="switchInfo" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchInfo">
                      Info
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check form-check-warning form-switch mb-2">
                    <input type="checkbox" className="form-check-input" id="switchWarning" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchWarning">
                      Warning
                    </label>
                  </div>
                  <div className="form-check form-check-danger form-switch mb-2">
                    <input type="checkbox" className="form-check-input" id="switchDanger" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchDanger">
                      Danger
                    </label>
                  </div>
                  <div className="form-check form-check-purple form-switch mb-2">
                    <input type="checkbox" className="form-check-input" id="switchPurple" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchPurple">
                      Purple
                    </label>
                  </div>
                  <div className="form-check form-check-dark form-switch">
                    <input type="checkbox" className="form-check-input" id="switchDark" checked onChange={() => {}} />
                    <label className="form-check-label" htmlFor="switchDark">
                      Dark
                    </label>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Checkbox Toggle</label>
            </Col>

            <Col lg={5}>
              <div className="mb-2">
                <input type="checkbox" className="btn-check" id="btncheck1" />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  Single Toggle
                </label>
              </div>

              <div className="btn-group" role="group" aria-label="Checkbox toggle group">
                <input type="checkbox" className="btn-check" id="btncheck2" />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">
                  One
                </label>

                <input type="checkbox" className="btn-check" id="btncheck3" />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">
                  Two
                </label>

                <input type="checkbox" className="btn-check" id="btncheck4" />
                <label className="btn btn-outline-primary" htmlFor="btncheck4">
                  Three
                </label>
              </div>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <label className="col-form-label">Radio Toggle</label>
            </Col>

            <Col lg={5}>
              <div className="btn-group" role="group" aria-label="Radio toggle group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                <label className="btn btn-outline-secondary" htmlFor="btnradio1">
                  Left
                </label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                <label className="btn btn-outline-secondary" htmlFor="btnradio2">
                  Middle
                </label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                <label className="btn btn-outline-secondary" htmlFor="btnradio3">
                  Right
                </label>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentCard>
  )
}

export default ChecksRadiosSwitches
