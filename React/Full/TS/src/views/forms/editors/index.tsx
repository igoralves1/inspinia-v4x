import PageBreadcrumb from '@/components/PageBreadcrumb'
import { useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import CustomQuill from '@/components/CustomQuill.tsx'
import { Link } from 'react-router'
import { TbChevronRight } from 'react-icons/tb'

const modules = {
  toolbar: [
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
}

const Page = () => {
  const [value, setValue] = useState<string>(
    `<div>
      <h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3>
      <p>
        <br />
      </p>
      <ul>
        <li>Fully responsive layout with a sleek and modern design.</li>
        <li>Multiple pre-built pages such as login, registration, dashboard, charts, tables, and more.</li>
        <li>Includes various components like modals, alerts, navigation menus, etc.</li>
        <li>Easy to customize and extend to suit your project’s needs.</li>
        <li>Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.</li>
      </ul>
      <p>
        <br />
      </p>
      <p>Inspinia Admin is the perfect choice for your next admin project. Get started today and create a stunning interface for your application.</p>
    </div>`,
  )

  return (
    <>
      <Container fluid>
        <PageBreadcrumb title="Text Editors" subtitle="Forms" />
      </Container>
      <Container>
        <Row>
          <Col cols={12}>
            <Card>
              <CardHeader>
                <CardTitle as="h4">React Quill New</CardTitle>
              </CardHeader>

              <CardBody>
                <p className="text-muted mb-2">Quill is a modern WYSIWYG editor built for compatibility and extensibility</p>
                <Link className="btn btn-link p-0 fw-semibold" to="https://github.com/VaguelySerious/react-quill" target="_blank">
                  React Quill New
                  <TbChevronRight className="ms-1" />
                </Link>
              </CardBody>

              <div className="border-top border-dashed"></div>

              <CardBody>
                <CardTitle as="h5" className="mb-2">
                  Snow Editor
                </CardTitle>
                <p className="text-muted">Snow is a clean, flat toolbar theme.</p>

                <CustomQuill theme="snow" modules={modules} value={value} onChange={setValue} />
              </CardBody>

              <div className="border-top border-dashed"></div>

              <CardBody>
                <CardTitle as="h5" className="mb-2">
                  Bubble Editor
                </CardTitle>
                <p className="text-muted">Bubble is a simple tooltip based theme.</p>

                <CustomQuill theme="bubble" value={value} onChange={setValue} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
