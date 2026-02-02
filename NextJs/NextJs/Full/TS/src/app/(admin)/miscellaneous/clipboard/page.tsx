'use client'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import ComponentCard from '@/components/cards/ComponentCard'
import { RefObject, useRef } from 'react'
import { Button, Col, Container, FormControl, Row, Table } from 'react-bootstrap'
import { TbCopy, TbCut } from 'react-icons/tb'
import { useCopyToClipboard } from 'usehooks-ts'

const Page = () => {
  const [copiedText, copy] = useCopyToClipboard()

  const inputRef = useRef<HTMLInputElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const cutToClipboard = async (inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>) => {
    const el = inputRef.current
    if (el) {
      const success = await copy(el.value)
      if (success) {
        el.value = ''
      }
    }
  }

  return (
    <Container fluid>
      <PageBreadcrumb title="Clipboard" subtitle="Miscellaneous" />

      <Row className="justify-content-center">
        <Col lg={8}>
          <ComponentCard title="Examples">
            <Table responsive className="mb-0">
              <tbody>
                <tr>
                  <td>
                    <h5 className="mb-1">Copy from Element</h5>
                    <p className="text-muted mb-0">
                      Use <code>copy</code> from useCopyToClipboard hook to copy text.
                    </p>
                  </td>
                  <td>
                    <p className="text-primary font-bold" id="copytext">
                      Click the button to copy this promotional text.
                    </p>
                    <Button variant="primary" size="sm" onClick={() => copy('Click the button to copy this promotional text.')}>
                      <TbCopy className="me-1" /> {copiedText ? 'Copied' : ' Copy Text'}
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h5 className="mb-1">Cut from Input</h5>
                    <p className="text-muted mb-0">This cuts the value from a single-line input field.</p>
                  </td>
                  <td>
                    <FormControl type="text" ref={inputRef} defaultValue="Temporary token: 8GDF-393K-L99Z" />
                    <Button variant="danger" size="sm" className="mt-2" onClick={() => cutToClipboard(inputRef)}>
                      <TbCut className="me-1" /> Cut Token
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h5 className="mb-1">Cut from Textarea</h5>
                    <p className="text-muted mb-0">This cuts the value from a textarea field.</p>
                  </td>
                  <td>
                    <FormControl as="textarea" ref={textareaRef} defaultValue="This content will be cut and removed from this textarea." />
                    <Button variant="primary" size="sm" className="mt-3" onClick={() => cutToClipboard(textareaRef)}>
                      <TbCut className="me-1" /> Cut Content
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
