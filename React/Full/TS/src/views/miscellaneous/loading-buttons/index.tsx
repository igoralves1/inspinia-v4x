import PageBreadcrumb from '@/components/PageBreadcrumb'
import ComponentCard from '@/components/cards/ComponentCard'
import * as Ladda from 'ladda'
import { type ButtonHTMLAttributes, type ReactNode, useRef } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import type { ButtonVariant } from 'react-bootstrap/types'

type LaddaButtonProps = {
  variant?: ButtonVariant | undefined
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const LaddaButton = ({ variant, children, className = '', ...props }: LaddaButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (!buttonRef.current) return

    const instance = Ladda.create(buttonRef.current)
    instance.start()

    let progress = 0
    const interval = setInterval(() => {
      progress = Math.min(progress + Math.random() * 0.1, 1)
      instance.setProgress(progress)

      if (progress === 1) {
        instance.stop()
        clearInterval(interval)
      }
    }, 200)
  }

  return (
    <Button ref={buttonRef} variant={variant} className={`ladda-button ${className}`} {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Loading Button" subtitle="Miscellaneous" />

      <Row className="justify-content-center">
        <Col lg={8}>
          <ComponentCard title="Ladda">
            <Table responsive className="mb-0">
              <tbody>
                <tr>
                  <td style={{ width: '50%' }}>
                    <h5 className="mb-0">Expand Left</h5>
                  </td>
                  <td>
                    <LaddaButton variant="primary" data-style="expand-left">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Expand Right</h5>
                  </td>
                  <td>
                    <LaddaButton variant="primary" data-style="expand-right">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Expand Up</h5>
                  </td>
                  <td>
                    <LaddaButton variant="primary" data-style="expand-up">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Expand Down</h5>
                  </td>
                  <td>
                    <LaddaButton variant="primary" data-style="expand-down">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Contract</h5>
                  </td>
                  <td>
                    <LaddaButton variant="warning" data-style="contract">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Zoom In</h5>
                  </td>
                  <td>
                    <LaddaButton variant="warning" data-style="zoom-in">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Zoom Out</h5>
                  </td>
                  <td>
                    <LaddaButton variant="warning" data-style="zoom-out">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Slide Left</h5>
                  </td>
                  <td>
                    <LaddaButton variant="info" data-style="slide-left">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Slide Right</h5>
                  </td>
                  <td>
                    <LaddaButton variant="info" data-style="slide-right">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Slide Up</h5>
                  </td>
                  <td>
                    <LaddaButton variant="info" data-style="slide-up">
                      Submit
                    </LaddaButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0">Slide Down</h5>
                  </td>
                  <td>
                    <LaddaButton variant="info" data-style="slide-down">
                      Submit
                    </LaddaButton>
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
