import small1 from '@/assets/images/stock/small-1.jpg'
import small3 from '@/assets/images/stock/small-3.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const ColorAndBackground = () => {
  return (
    <ComponentCard title="Color & Background">
      <p className="text-muted">
        Color and background helpers combine the power of our
        <code>.text-*</code> utilities and <code>.bg-*</code> utilities in one class. Using our Sass <code>color-contrast()</code> function, we
        automatically determine a contrasting <code>color</code> for a particular <code>background-color</code>.
      </p>
      <div className="d-flex flex-column gap-2">
        <div className="text-bg-primary p-2">Primary with contrasting color (.text-bg-primary)</div>
        <div className="text-bg-secondary p-2">Secondary with contrasting color (.text-bg-secondary)</div>
        <div className="text-bg-success p-2">Success with contrasting color (.text-bg-success)</div>
        <div className="text-bg-danger p-2">Danger with contrasting color (.text-bg-danger)</div>
        <div className="text-bg-warning p-2">Warning with contrasting color (.text-bg-warning)</div>
        <div className="text-bg-info p-2">Info with contrasting color (.text-bg-info)</div>
        <div className="text-bg-light p-2">Light with contrasting color (.text-bg-light)</div>
        <div className="text-bg-dark p-2">Dark with contrasting color (.text-bg-dark)</div>
        <div className="text-bg-purple p-2">Purple with contrasting color (.text-bg-purple)</div>
      </div>
    </ComponentCard>
  )
}

const BackgroundOpacity = () => {
  return (
    <ComponentCard title="Background Opacity">
      <p className="text-muted">
        <code>background-color</code> utilities are generated with Sass using CSS variables. This allows for real-time color changes without
        compilation and dynamic alpha transparency changes.
      </p>
      <div className="bg-primary p-2 text-white">This is default primary background</div>
      <div className="bg-primary p-2 text-white bg-opacity-75">This is 75% opacity primary background</div>
      <div className="bg-primary p-2 text-dark bg-opacity-50">This is 50% opacity primary background</div>
      <div className="bg-primary p-2 text-dark bg-opacity-25">This is 25% opacity primary background</div>
      <div className="bg-primary p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
      <div className="bg-dark p-2 mt-4 text-white">This is default dark background</div>
      <div className="bg-dark p-2 text-white bg-opacity-75">This is 75% opacity dark background</div>
      <div className="bg-dark p-2 text-dark bg-opacity-50">This is 50% opacity dark background</div>
      <div className="bg-dark p-2 text-dark bg-opacity-25">This is 25% opacity dark background</div>
      <div className="bg-dark p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
    </ComponentCard>
  )
}

const TextOpacityColor = () => {
  return (
    <ComponentCard title="Text Opacity Color">
      <p className="text-muted">
        Text color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic
        alpha transparency changes.
      </p>
      <div className="text-primary">This is default primary text</div>
      <div className="text-primary text-opacity-75">This is 75% opacity primary text</div>
      <div className="text-primary text-opacity-50">This is 50% opacity primary text</div>
      <div className="text-primary text-opacity-25">This is 25% opacity primary text</div>
    </ComponentCard>
  )
}

const Opacity = () => {
  return (
    <ComponentCard title="Opacity">
      <p className="text-muted">
        The <code>opacity</code> property sets the opacity level for an element. The opacity level describes the transparency level, where
        <code>1</code> is not transparent at all, <code>.5</code> is 50% visible, and <code>0</code> is completely transparent. Set the
        <code>opacity</code> of an element using
        <code>
          .opacity-{'{'}value{'}'}
        </code>
        utilities.
      </p>

      <div className="d-flex flex-wrap gap-2">
        <div className="opacity-100 p-2 bg-primary text-light fw-bold rounded">100%</div>
        <div className="opacity-75 p-2 bg-primary text-light fw-bold rounded">75%</div>
        <div className="opacity-50 p-2 bg-primary text-light fw-bold rounded">50%</div>
        <div className="opacity-25 p-2 bg-primary text-light fw-bold rounded">25%</div>
      </div>
    </ComponentCard>
  )
}

const BorderRadius = () => {
  return (
    <ComponentCard title="Border Radius">
      <p className="text-muted">Add classes to an element to easily round its corners.</p>
      <div className="d-flex align-items-start flex-wrap gap-2">
        <img src={user2} className="avatar-lg rounded" alt="rounded" />
        <img src={user2} className="avatar-lg rounded-top" alt="rounded-top" />
        <img src={user2} className="avatar-lg rounded-end" alt="rounded-end" />
        <img src={user2} className="avatar-lg rounded-bottom" alt="rounded-bottom" />
        <img src={user2} className="avatar-lg rounded-start" alt="rounded-start" />
        <img src={user2} className="avatar-lg rounded-circle" alt="rounded-circle" />
        <img src={small3} className="w-auto rounded-pill" alt="rounded-pill" width={80} />
      </div>
    </ComponentCard>
  )
}

const PointerEvents = () => {
  return (
    <ComponentCard title="Pointer Events">
      <p className="text-muted">
        Bootstrap provides <code>.pe-none</code> and <code>.pe-auto</code>
        classes to prevent or add element interactions.
      </p>
      <p>
        <Link to="#" className="pe-none" tabIndex={-1}>
          This link
        </Link>
        can not be clicked.
      </p>
      <p>
        <Link to="#" className="pe-auto">
          This link
        </Link>
        can be clicked (this is default behavior).
      </p>
      <p className="pe-none">
        <Link to="#" tabIndex={-1}>
          This link
        </Link>
        can not be clicked because the
        <code>pointer-events</code> property is inherited from its parent. However,
        <Link to="#" className="pe-auto">
          this link
        </Link>
        has a <code>pe-auto</code> class and can be clicked.
      </p>
    </ComponentCard>
  )
}

const BorderRadiusSize = () => {
  return (
    <ComponentCard title="Border Radius Siz">
      <p className="text-muted">
        Use the scaling classes for larger or smaller rounded corners. Sizes range from <code>0</code> to <code>5</code>.
      </p>
      <div className="d-flex align-items-start flex-wrap gap-2">
        <img src={user4} className="avatar-lg rounded-0" alt="rounded-0" />
        <img src={user4} className="avatar-lg rounded-1" alt="rounded-1" />
        <img src={user4} className="avatar-lg rounded-2" alt="rounded-2" />
        <img src={user4} className="avatar-lg rounded-3" alt="rounded-3" />
        <img src={user4} className="avatar-lg rounded-4" alt="rounded-4" />
        <img src={user4} className="avatar-lg rounded-5" alt="rounded-5" />
      </div>
    </ComponentCard>
  )
}

const TextSelection = () => {
  return (
    <ComponentCard title="Text Selection">
      <p className="text-muted">
        Use <code>user-select-all</code>, <code>user-select-auto</code>, or
        <code>user-select-none</code> class to the content which is selected when the user interacts with it.
      </p>

      <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
      <p className="user-select-auto">This paragraph has default select behavior.</p>
      <p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
    </ComponentCard>
  )
}

const Overflow = () => {
  return (
    <ComponentCard title="Overflow">
      <p className="text-muted">
        Adjust the <code>overflow</code> property on the fly with four default values and classes. These classes are not responsive by default.
      </p>
      <div className="d-flex flex-wrap gap-4">
        <div className="overflow-auto p-3 bg-light" style={{ maxWidth: 260, maxHeight: 100 }}>
          This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will
          vertically scroll.
        </div>
        <div className="overflow-hidden p-3 bg-light" style={{ maxWidth: 260, maxHeight: 100 }}>
          This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
        </div>
        <div className="overflow-visible p-3 bg-light" style={{ maxWidth: 260, maxHeight: 100 }}>
          This is an example of using <code>.overflow-visible</code> on an element with set width and height add more text dimensions inspinia admin
          dashboard template.
        </div>
        <div className="overflow-scroll p-3 bg-light" style={{ maxWidth: 260, maxHeight: 100 }}>
          This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
        </div>
      </div>
    </ComponentCard>
  )
}

const PositionInArrange = () => {
  return (
    <ComponentCard title="Position in Arrange">
      <p className="text-muted">
        Arrange elements easily with the edge positioning utilities. The format is
        <code>
          {'{'}property{'}'}-{'{'}position{'}'}
        </code>
        .
      </p>
      <div className="position-relative p-5 bg-light bg-opacity-50 m-3 border rounded" style={{ height: 180 }}>
        <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded"> </div>
        <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
        <div className="position-absolute top-50 start-50 avatar-xs bg-dark rounded" />
        <div className="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"> </div>
        <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"> </div>
        <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"> </div>
      </div>
    </ComponentCard>
  )
}

const PositionInCenter = () => {
  return (
    <ComponentCard title="Position in Center">
      <p className="text-muted">
        In addition, you can also center the elements with the transform utility class <code>.translate-middle</code>.
      </p>
      <div className="position-relative m-3 bg-light bg-opacity-50 border rounded" style={{ height: 180 }}>
        <div className="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentCard>
  )
}

const PositionInAxis = () => {
  return (
    <ComponentCard title="Position in Axis">
      <p className="text-muted">
        By adding <code>.translate-middle-x</code> or
        <code>.translate-middle-y</code> classes, elements can be positioned only in horizontal or vertical direction.
      </p>
      <div className="position-relative m-3 bg-light border rounded" style={{ height: 180 }}>
        <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
        <div className="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
        <div className="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentCard>
  )
}

const Shadows = () => {
  return (
    <ComponentCard title="Shadows">
      <p className="text-muted">
        Width utilities are generated from the utility API in
        <code>_utilities.scss</code>. Includes support for
        <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and
        <code>auto</code> by default. Modify those values as you need to generate different utilities here.
      </p>
      <div className="shadow-none p-2 mb-2 bg-light rounded">No shadow</div>
      <div className="shadow-sm p-2 mb-2 rounded">Small shadow</div>
      <div className="shadow p-2 mb-2 rounded">Regular shadow</div>
      <div className="shadow-lg p-2 mb-2 rounded">Larger shadow</div>
    </ComponentCard>
  )
}

const Width = () => {
  return (
    <ComponentCard title="Width">
      <p className="text-muted">
        While shadows on components are disabled by default in Bootstrap and can be enabled via
        <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our
        <code>box-shadow</code> utility classes. Includes support for <code>.shadow-none</code> and three default sizes (which have associated
        variables to match).
      </p>
      <div className="w-25 p-2 bg-light">Width 25%</div>
      <div className="w-50 p-2 bg-light">Width 50%</div>
      <div className="w-75 p-2 bg-light">Width 75%</div>
      <div className="w-100 p-2 bg-light">Width 100%</div>
      <div className="w-auto p-2 bg-light">Width auto</div>
    </ComponentCard>
  )
}

const Height = () => {
  return (
    <ComponentCard title="Height">
      <p className="text-muted">
        Height utilities are generated from the utility API in
        <code>_utilities.scss</code>. Includes support for
        <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and
        <code>auto</code> by default. Modify those values as you need to generate different utilities here.
      </p>
      <div className="d-flex flex-wrap gap-3 align-items-start" style={{ height: 255 }}>
        <div className="h-25 p-2 bg-light">Height25%</div>
        <div className="h-50 p-2 bg-light">Height50%</div>
        <div className="h-75 p-2 bg-light">Height75%</div>
        <div className="h-100 p-2 bg-light">Height100%</div>
        <div className="h-auto p-2 bg-light">Height auto</div>
      </div>
    </ComponentCard>
  )
}

const ObjectFit = () => {
  return (
    <ComponentCard title="Object Fit">
      <p className="text-muted">
        Change the value of the
        <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">
          <code>object-fit</code>
          property
        </Link>
        with our responsive <code>object-fit</code> utility classes. This property tells the content to fill the parent container in a variety of
        ways, such as preserving the aspect ratio or stretching to take up as much space as possible.
      </p>
      <div className="d-flex align-items-start flex-wrap gap-3 text-center">
        <div>
          <img src={small1} className="object-fit-contain border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-contain</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-cover border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-cover</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-fill border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-fill</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-scale border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-scale</code>
          </p>
        </div>
        <div>
          <img src={small1} className="object-fit-none border rounded avatar-xl" alt="..." />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-none</code>
          </p>
        </div>
      </div>
    </ComponentCard>
  )
}

const Zindex = () => {
  return (
    <ComponentCard title="Z-index">
      <p className="text-muted">
        Use <code>z-index</code> utilities to stack elements on top of one another. Requires a <code>position</code> value other than
        <code>static</code>, which can be set with custom styles or using our
        <Link to="https://getbootstrap.com/docs/5.3/utilities/position/" target="_blank">
          position utilities
        </Link>
        .
      </p>
      <div className="position-relative" style={{ height: 220, zIndex: 1 }}>
        <div className="z-3 position-absolute p-5 rounded-3 bg-primary-subtle" />
        <div className="z-2 position-absolute p-5 m-2 rounded-3 bg-success-subtle"></div>
        <div className="z-1 position-absolute p-5 m-3 rounded-3 bg-secondary-subtle"></div>
        <div className="z-0 position-absolute p-5 m-4 rounded-3 bg-danger-subtle" />
        <div className="z-n1 position-absolute p-5 m-5 rounded-3 bg-info-subtle" />
      </div>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="utilities" subtitle="UI" />
        <Container fluid="xl">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle as={'h4'}>Examples</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-muted mb-2">The utility API is a Sass-based tool to generate utility classes.</p>
                  <Link className="btn btn-link p-0 fw-semibold" to="https://getbootstrap.com/docs/5.3/utilities/background/" target="_blank">
                    Utilities on Bootstrap
                    <TbChevronRight className="ms-1" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <ColorAndBackground />
            </Col>
            <Col xl={4}>
              <BackgroundOpacity />
            </Col>
            <Col xl={4}>
              <TextOpacityColor />
              <Opacity />
            </Col>
            <Col xl={4}>
              <BorderRadius />
              <PointerEvents />
            </Col>
            <Col xl={4}>
              <BorderRadiusSize />
            </Col>
            <Col xl={4}>
              <TextSelection />
            </Col>
            <Col xl={12}>
              <Overflow />
            </Col>
            <Col xl={4}>
              <PositionInArrange />
            </Col>
            <Col xl={4}>
              <PositionInCenter />
            </Col>
            <Col xl={4}>
              <PositionInAxis />
            </Col>
            <Col xl={4}>
              <Shadows />
            </Col>
            <Col xl={4}>
              <Width />
            </Col>
            <Col xl={6}>
              <Height />
            </Col>
            <Col xl={6}>
              <ObjectFit />
            </Col>
            <Col xl={4}>
              <Zindex />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default page
