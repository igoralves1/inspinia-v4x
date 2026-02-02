import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row, Table } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

type ColorType = {
  label: string
  className: string
  opacity?: string
}
const colors: ColorType[] = [
  { label: 'Primary', className: 'bg-primary', opacity: 'bg-opacity-25' },
  { label: 'Secondary', className: 'bg-secondary', opacity: 'bg-opacity-50' },
  { label: 'Success', className: 'bg-success', opacity: 'bg-opacity-75' },
  { label: 'Info', className: 'bg-info', opacity: 'bg-opacity-10' },
  { label: 'Warning', className: 'bg-warning', opacity: 'bg-opacity-25' },
  { label: 'Danger', className: 'bg-danger', opacity: 'bg-opacity-50' },
  { label: 'Purple', className: 'bg-purple', opacity: 'bg-opacity-10' },
  { label: 'Dark', className: 'bg-dark', opacity: 'bg-opacity-10' },
  { label: 'Light', className: 'bg-light', opacity: 'bg-opacity-75' },
]
const ColorCard = ({ label, className }: ColorType) => {
  return (
    <Col md={4} xl={2}>
      <Card>
        <CardBody>
          <div className={`${className} rounded`} style={{ height: 100 }}></div>
          <div className="mt-3 text-center">
            <h6 className="fs-sm mb-0">{label}</h6>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

const BackgroundColors = () => {
  return (
    <ComponentCard title="Background Colors">
      <div className="table-responsive ">
        <Table className="table-bordered table-striped align-middle mb-0">
          <thead>
            <tr className="text-center">
              <th scope="col" className="align-middle">
                Name
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Background <br /> Color
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Background <br /> Subtle
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Background <br /> Gradient
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Background <br /> Opacity
              </th>
            </tr>
          </thead>
          <tbody>
            {colors.map((item, index) => (
              <tr key={index}>
                <th>{item.label}</th>
                <td style={{ width: 180 }}>
                  <code>.{item.className}</code>
                </td>
                <td style={{ width: 180 }}>
                  <div className={`${item.className} p-2`} />
                </td>
                <td style={{ width: 180 }}>
                  <code>.{item.className}-subtle</code>
                </td>
                <td style={{ width: 180 }}>
                  <div className={`${item.className}-subtle p-2`} />
                </td>
                <td style={{ width: 180 }}>
                  <code>
                    .{item.className} <br />
                    .bg-gradient
                  </code>
                </td>
                <td style={{ width: 180 }}>
                  <div className={`${item.className} bg-gradient p-2`} />
                </td>
                <td style={{ width: 180 }}>
                  <code>
                    .{item.className} <br />.{item.opacity}
                  </code>
                </td>
                <td style={{ width: 180 }}>
                  <div className={`${item.className} ${item.opacity} p-2`} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </ComponentCard>
  )
}

const TextColorsAndLinkColors = () => {
  return (
    <ComponentCard title="Text Colors & Link Colors">
      <div className=" table-responsive">
        <Table className="table-bordered align-middle table-striped mb-0">
          <thead>
            <tr className="text-center">
              <th scope="col" className="align-middle">
                Name
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Text Color
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Text Emphasis
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Text Opacity
              </th>
              <th scope="col" colSpan={2} className="align-middle">
                Link Color
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Primary</th>
              <td>
                <code>.text-primary</code>
              </td>
              <td>
                <div className="text-primary">Primary Color Text</div>
              </td>
              <td>
                <code>.text-primary-emphasis</code>
              </td>
              <td>
                <div className="text-primary-emphasis">Primary Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-primary <br /> .text-opacity-50
                </code>
              </td>
              <td>
                <div className="text-primary text-opacity-50">Primary Color Text</div>
              </td>
              <td>
                <code>.link-primary</code>
              </td>
              <td>
                <a href="#!" className="link-primary">
                  Primary Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Secondary</th>
              <td>
                <code>.text-secondary</code>
              </td>
              <td>
                <div className="text-secondary">Secondary Color Text</div>
              </td>
              <td>
                <code>.text-secondary-emphasis</code>
              </td>
              <td>
                <div className="text-primary-emphasis">Secondary Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-secondary <br /> .text-opacity-75
                </code>
              </td>
              <td>
                <div className="text-secondary text-opacity-75">Secondary Color Text</div>
              </td>
              <td>
                <code>.link-secondary</code>
              </td>
              <td>
                <a href="#!" className="link-secondary">
                  Secondary Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Success</th>
              <td>
                <code>.text-success</code>
              </td>
              <td>
                <div className="text-success">Success Color Text</div>
              </td>
              <td>
                <code>.text-success-emphasis</code>
              </td>
              <td>
                <div className="text-success-emphasis">Success Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-success <br /> .text-opacity-25
                </code>
              </td>
              <td>
                <div className="text-success text-opacity-25">Success Color Text</div>
              </td>
              <td>
                <code>.link-success</code>
              </td>
              <td>
                <a href="#!" className="link-success">
                  Success Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Info</th>
              <td>
                <code>.text-info</code>
              </td>
              <td>
                <div className="text-info">Info Color Text</div>
              </td>
              <td>
                <code>.text-info-emphasis</code>
              </td>
              <td>
                <div className="text-info-emphasis">Info Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-info <br /> .text-opacity-50
                </code>
              </td>
              <td>
                <div className="text-info text-opacity-50">Info Color Text</div>
              </td>
              <td>
                <code>.link-info</code>
              </td>
              <td>
                <a href="#!" className="link-info">
                  Info Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Danger</th>
              <td>
                <code>.text-danger</code>
              </td>
              <td>
                <div className="text-danger">Danger Color Text</div>
              </td>
              <td>
                <code>.text-danger-emphasis</code>
              </td>
              <td>
                <div className="text-danger-emphasis">Danger Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-danger <br /> .text-opacity-25
                </code>
              </td>
              <td>
                <div className="text-danger text-opacity-25">Danger Color Text</div>
              </td>
              <td>
                <code>.link-danger</code>
              </td>
              <td>
                <a href="#!" className="link-danger">
                  Danger Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Warning</th>
              <td>
                <code>.text-warning</code>
              </td>
              <td>
                <div className="text-warning">Warning Color Text</div>
              </td>
              <td>
                <code>.text-warning-emphasis</code>
              </td>
              <td>
                <div className="text-warning-emphasis">Warning Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-warning <br /> .text-opacity-75
                </code>
              </td>
              <td>
                <div className="text-warning text-opacity-75">Warning Color Text</div>
              </td>
              <td>
                <code>.link-warning</code>
              </td>
              <td>
                <a href="#!" className="link-warning">
                  Warning Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Purple</th>
              <td>
                <code>.text-purple</code>
              </td>
              <td>
                <div className="text-purple">Purple Color Text</div>
              </td>
              <td>
                <code>.text-purple-emphasis</code>
              </td>
              <td>
                <div className="text-purple-emphasis">Purple Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-purple <br /> .text-opacity-25
                </code>
              </td>
              <td>
                <div className="text-purple text-opacity-25">Purple Color Text</div>
              </td>
              <td>
                <code>.link-purple</code>
              </td>
              <td>
                <a href="#!" className="link-purple">
                  Purple Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Dark</th>
              <td>
                <code>.text-dark</code>
              </td>
              <td>
                <div className="text-dark">Dark Color Text</div>
              </td>
              <td>
                <code>.text-dark-emphasis</code>
              </td>
              <td>
                <div className="text-dark-emphasis">Dark Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-dark <br /> .text-opacity-25
                </code>
              </td>
              <td>
                <div className="text-dark text-opacity-25">Dark Color Text</div>
              </td>
              <td>
                <code>.link-dark</code>
              </td>
              <td>
                <a href="#!" className="link-dark">
                  Dark Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Light</th>
              <td>
                <code>.text-light</code>
              </td>
              <td>
                <div className="text-light bg-dark">Light Color Text</div>
              </td>
              <td>
                <code>.text-light-emphasis</code>
              </td>
              <td>
                <div className="text-light-emphasis">Light Emphasis Text</div>
              </td>
              <td>
                <code>
                  .text-light <br /> .text-opacity-50
                </code>
              </td>
              <td>
                <div className="text-light text-opacity-50 bg-dark">Light Color Text</div>
              </td>
              <td>
                <code>.link-light</code>
              </td>
              <td>
                <a href="#!" className="link-light bg-dark">
                  Light Link
                </a>
              </td>
            </tr>
            <tr>
              <th>Body</th>
              <td>
                <code>.text-body</code>
              </td>
              <td>
                <div className="text-body">Body Color Text</div>
              </td>
              <td>
                <code>.text-body-emphasis</code>
              </td>
              <td>
                <div className="text-body-emphasis">Body Emphasis Text</div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>
                <code>.text-body-secondary</code>
              </td>
              <td>
                <div className="text-body-secondary">Body Secondary Color</div>
              </td>
              <td>
                <code>.text-body-tertiary</code>
              </td>
              <td>
                <div className="text-body-tertiary">Body Tertiary Text</div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th>Black</th>
              <td>
                <code>.text-black</code>
              </td>
              <td>
                <div className="text-black">Black Color Text</div>
              </td>
              <td>
                <code>.text-black-50</code>
              </td>
              <td>
                <div className="text-black-50">Black 50% Text</div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th>White</th>
              <td>
                <code>.text-white</code>
              </td>
              <td>
                <div className="text-white bg-dark">White Color Text</div>
              </td>
              <td>
                <code>.text-white-50</code>
              </td>
              <td>
                <div className="text-white-50 bg-dark">White 50% Text</div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </ComponentCard>
  )
}

const AdditiveBorder = () => {
  return (
    <ComponentCard title="Additive(Add) Border">
      <p className="text-muted">
        Use border utilities to <b>add</b> an element’s borders. Choose from all borders or one at a time.
      </p>
      <div className="d-flex align-items-start flex-wrap gap-4">
        <div className="text-center">
          <div className="border avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-top avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-end avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-bottom avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-start avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentCard>
  )
}

const SubtractiveBorder = () => {
  return (
    <ComponentCard title="Subtractive(Remove) Border">
      <p className="text-muted">
        Use border utilities to <b>remove</b> an element’s borders. Choose from all borders or one at a time.
      </p>
      <div className="d-flex align-items-start flex-wrap gap-4">
        <div className="text-center">
          <div className="border-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-top-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-end-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-bottom-0 avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-start-0 avatar-md bg-light bg-opacity-50"></div>
        </div>
      </div>
    </ComponentCard>
  )
}

const BorderColor = () => {
  return (
    <ComponentCard title="Border Color">
      <p className="text-muted">Change the border color using utilities built on our theme colors.</p>
      <div className="d-flex align-items-start flex-wrap gap-2">
        <div className="text-center">
          <div className="border border-primary avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-primary avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-secondary avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-success avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-danger avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-warning avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-info avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-light avatar-md" />
        </div>
        <div className="text-center">
          <div className="border border-dark avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentCard>
  )
}

const BorderWidthSize = () => {
  return (
    <ComponentCard title="Border Width Size">
      <div className="d-flex align-items-start flex-wrap gap-2 ">
        <div className="text-center">
          <div className="border-1 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-2 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-3 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-4 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-5 avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentCard>
  )
}

const BorderSubtleColor = () => {
  return (
    <ComponentCard title="Border Subtle Color">
      <p className="text-muted">Change the border color using utilities built on our theme colors.</p>
      <div className="d-flex align-items-start flex-wrap gap-2">
        <div className="text-center">
          <div className="border border-primary-subtle avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-primary-subtle avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-secondary-subtle avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-success-subtle avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-danger-subtle avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-warning-subtle avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-info-subtle avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-light-subtle avatar-md" />
        </div>
        <div className="text-center">
          <div className="border border-dark-subtle avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentCard>
  )
}

const BorderOpacity = () => {
  return (
    <ComponentCard title="Border Opacity">
      <p className="text-muted">
        choose from any of the <code>.border-opacity</code> utilities:
      </p>
      <div className="border border-primary p-2 mb-2">This is default accent border</div>
      <div className="border border-primary p-2 mb-2 border-opacity-75">This is 75% opacity accent border</div>
      <div className="border border-primary p-2 mb-2 border-opacity-50">This is 50% opacity accent border</div>
      <div className="border border-primary p-2 mb-2 border-opacity-25">This is 25% opacity accent border</div>
      <div className="border border-primary p-2 border-opacity-10">This is 10% opacity accent border</div>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Colors" subtitle="UI" />
        <Card>
          <CardHeader>
            <CardTitle as={'h4'}>Examples</CardTitle>
          </CardHeader>
          <CardBody>
            <p className="text-muted mb-2">
              Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
            </p>
            <Link className="btn btn-link p-0 fw-semibold" to="https://getbootstrap.com/docs/5.3/utilities/colors/" target="_blank">
              Colors on Bootstrap
              <TbChevronRight className="ms-1" />
            </Link>
          </CardBody>
        </Card>
        <Row>
          {colors.map((color, index) => (
            <ColorCard key={index} label={color.label} className={color.className} />
          ))}
        </Row>
        <Row>
          <Col xs={12}>
            <BackgroundColors />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextColorsAndLinkColors />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4 className="my-4 fw-bold">Border Colors</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <AdditiveBorder />
          </Col>
          <Col xs={6}>
            <SubtractiveBorder />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <BorderColor />
            <BorderWidthSize />
            <BorderSubtleColor />
          </Col>
          <Col xs={6}>
            <BorderOpacity />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
