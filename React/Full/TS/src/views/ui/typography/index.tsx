import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router'

const DisplayHeadings = () => {
  return (
    <ComponentCard title="Display Headings">
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
    </ComponentCard>
  )
}

const Headings = () => {
  return (
    <ComponentCard title="Headings">
      <h1>
        Heading 1 <small>Sub Heading</small>
      </h1>
      <h2>
        Heading 2 <small>Sub Heading</small>
      </h2>
      <h3>
        Heading 3 <small>Sub Heading</small>
      </h3>
      <h4>
        Heading 4 <small>Sub Heading</small>
      </h4>
      <h5>
        Heading 5 <small>Sub Heading</small>
      </h5>
      <h6>
        Heading 6 <small>Sub Heading</small>
      </h6>
    </ComponentCard>
  )
}

const NamingASource = () => {
  return (
    <ComponentCard title="Naming a Source">
      <p className="text-muted">A well-known quote, contained in a blockquote element. </p>
      <figure>
        <blockquote className="blockquote">
          <p>"Design is not just what it looks like and feels like. Design is how it works."</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Steve Jobs in <cite title="Design Philosophy">Design Philosophy</cite>
        </figcaption>
      </figure>
    </ComponentCard>
  )
}

const InlineTextElements = () => {
  return (
    <ComponentCard title="Naming a Source">
      <p className="text-muted">Styling for common inline HTML5 elements.</p>
      <p className="lead">Your title goes here</p>
      <p>
        You can use the mark tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>This line of text is meant to be treated as an addition to thedocument.</ins>
      </p>
      <p>
        <u>This line of text will render as underlined</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as italicized text.</em>
      </p>
      <p className="mb-0">
        Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
      </p>
    </ComponentCard>
  )
}

const Unordered = () => {
  return (
    <ComponentCard title="Unordered">
      <p className="text-muted">A list of items in which the order does not explicitly matter.</p>
      <ul>
        <li>Fully responsive design</li>
        <li>Built with Bootstrap 5 framework</li>
        <li>Clean and modern UI components</li>
        <li>Cross-browser compatibility</li>
        <li>
          Multiple form elements and validations
          <ul>
            <li>Rich input controls</li>
            <li>Step-based form wizards</li>
            <li>Real-time validation</li>
            <li>Customizable styles</li>
          </ul>
        </li>
        <li>Advanced chart and graph libraries</li>
        <li>Integrated data tables and sorting</li>
        <li>Developer-friendly code structure</li>
      </ul>
    </ComponentCard>
  )
}

const Ordered = () => {
  return (
    <ComponentCard title="Ordered">
      <p className="text-muted">A list of items in which the order does explicitly matter.</p>
      <ol>
        <li>Install all dependencies</li>
        <li>Configure project environment settings</li>
        <li>Set up folder structure and routing</li>
        <li>Integrate UI components and layout</li>
        <li>
          Implement core modules
          <ol>
            <li>Authentication &amp; Authorization</li>
            <li>Dashboard widgets and metrics</li>
            <li>User profile management</li>
            <li>Notification &amp; messaging systems</li>
          </ol>
        </li>
        <li>Connect backend APIs and test data flow</li>
        <li>Optimize performance and responsive design</li>
        <li>Final testing and deployment</li>
      </ol>
    </ComponentCard>
  )
}

const Unstyled = () => {
  return (
    <ComponentCard title="Unstyled">
      <p className="text-muted">
        <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.
      </p>
      <ul className="list-unstyled">
        <li>Install project dependencies</li>
        <li>
          Configure build settings
          <ul>
            <li>Update environment variables</li>
          </ul>
        </li>
        <li>Setup project structure and routes</li>
        <li>Launch local development server</li>
      </ul>
      <h5>Inline List</h5>
      <p className="text-muted m-b-15">
        Display list items horizontally using <code>display: inline-block;</code> and appropriate spacing.
      </p>
      <ul className="list-inline">
        <li className="list-inline-item">HTML</li>
        <li className="list-inline-item">CSS</li>
        <li className="list-inline-item">JavaScript</li>
      </ul>
    </ComponentCard>
  )
}

const Abbreviations = () => {
  return (
    <Card className="card-h-100">
      <CardHeader>
        <div className="flex-grow-1">
          <CardTitle as={'h4'}>Abbreviations </CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-muted">Add .initialism to an abbreviation for a slightly smaller font-size.</p>
        <p>
          <abbr title="attribute">attr</abbr>
        </p>
        <p>
          <abbr title="HyperText Markup Language" className="initialism">
            HTML
          </abbr>
        </p>
      </CardBody>
    </Card>
  )
}

const Alignment = () => {
  return (
    <ComponentCard title="Alignment">
      <p className="text-muted">Use text utilities as needed to change the alignment of your blockquote.</p>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>"Design is not just what it looks like and feels like. Design is how it works."</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Steve Jobs in <cite title="Steve Jobs Biography">Steve Jobs Biography</cite>
        </figcaption>
      </figure>
      <figure className="text-end">
        <blockquote className="blockquote">
          <p>"Simplicity is the ultimate sophistication."</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Leonardo da Vinci in <cite title="Design Philosophy">Design Philosophy</cite>
        </figcaption>
      </figure>
    </ComponentCard>
  )
}

const Inline = () => {
  return (
    <Card className="card-h-100">
      <CardHeader>
        <div className="flex-grow-1">
          <CardTitle as={'h4'}>Inline </CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-muted">
          Remove a list's bullets and apply some light margin with a combination of two classes, .list-inline and .list-inline-item.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">This is a list item.</li>
          <li className="list-inline-item">And another one.</li>
          <li className="list-inline-item">But they're displayed inline.</li>
        </ul>
      </CardBody>
    </Card>
  )
}

const Blockquotes = () => {
  return (
    <ComponentCard title="Blockquotes">
      <p className="text-muted">
        For quoting blocks of content from another source within your document. Wrap
        <code>&lt;blockquote class="blockquote"&gt;</code> around any
        <abbr title="HyperText Markup Language">HTML</abbr> as the quote.
      </p>
      <blockquote className="blockquote">
        <p className="mb-0">"Good design is obvious. Great design is transparent."</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Joe Sparano in <cite title="Design Principles">Design Principles</cite>
      </figcaption>
      <p className="text-muted m-b-15">Use text utilities as needed to change the alignment of your blockquote.</p>
      <blockquote className="blockquote text-center">
        <p className="mb-0">"First, solve the problem. Then, write the code."</p>
      </blockquote>
      <figcaption className="blockquote-footer text-center">
        John Johnson in <cite title="Developer Wisdom">Developer Wisdom</cite>
      </figcaption>
      <blockquote className="blockquote text-end">
        <p className="mb-0">"Simplicity is the soul of efficiency."</p>
      </blockquote>
      <figcaption className="blockquote-footer text-end">
        Austin Freeman in <cite title="Efficiency in Design">Efficiency in Design</cite>
      </figcaption>
    </ComponentCard>
  )
}

const DescriptionListAlignment = () => {
  return (
    <ComponentCard title="Description List Alignment">
      <p className="text-muted">
        Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can
        optionally add a<code>.text-truncate</code> class to truncate the text with an ellipsis.
      </p>
      <dl className="row mb-0">
        <dt className="col-sm-3">Dashboard</dt>
        <dd className="col-sm-9">An overview panel that displays key metrics and activity summaries.</dd>
        <dt className="col-sm-3">Form Validation</dt>
        <dd className="col-sm-9">
          <p>Includes validation for all major input types with real-time feedback.</p>
          <p>Built-in support for custom rules and error messages.</p>
        </dd>
        <dt className="col-sm-3">Responsive Grid</dt>
        <dd className="col-sm-9">Utilizes Bootstrap’s flexible grid layout for consistent responsiveness across devices.</dd>
        <dt className="col-sm-3 text-truncate">User Management Module</dt>
        <dd className="col-sm-9">Easily manage roles, permissions, and user profiles from a single interface.</dd>
        <dt className="col-sm-3">Nested Features</dt>
        <dd className="col-sm-9">
          <dl className="row mb-0">
            <dt className="col-sm-4">Email Notifications</dt>
            <dd className="col-sm-8">Customizable alerts and triggers integrated into app workflows.</dd>
          </dl>
        </dd>
      </dl>
    </ComponentCard>
  )
}

const page = () => {
  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="typography" subtitle="UI" />
      </Container>
      <Container fluid="xl">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <CardTitle as={'h4'}>Examples</CardTitle>
              </CardHeader>
              <CardBody>
                <p className="text-muted mb-2">
                  Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.
                </p>
                <Link className="btn btn-link p-0 fw-semibold" to="https://getbootstrap.com/docs/5.3/content/typography/" target="_blank">
                  Typography on Bootstrap
                  <TbChevronRight className="ms-1" />
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <DisplayHeadings />
          </Col>
          <Col lg={4}>
            <Headings />
            <NamingASource />
          </Col>
          <Col lg={4}>
            <InlineTextElements />
          </Col>
          <Col xl={4}>
            <Unordered />
          </Col>
          <Col xl={4}>
            <Ordered />
          </Col>
          <Col xl={4}>
            <Unstyled />
          </Col>
          <Col xl={4}>
            <Abbreviations />
          </Col>
          <Col lg={4}>
            <Alignment />
          </Col>
          <Col lg={4}>
            <Inline />
          </Col>
          <Col lg={6}>
            <Blockquotes />
          </Col>
          <Col lg={6}>
            <DescriptionListAlignment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
