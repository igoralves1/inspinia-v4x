import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import PasswordInputWithStrength from '@/components/PasswordInputWithStrength'
import { useState } from 'react'
import { Col, Collapse, Container, FormControl, FormLabel, FormText, Row } from 'react-bootstrap'
import PasswordChecklist from 'react-password-checklist'

const Page = () => {
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  return (
    <Container fluid>
      <PageBreadcrumb title="Password Meter" subtitle="Miscellaneous" />

      <Row className="justify-content-center">
        <Col lg={4}>
          <ComponentCard title="With Progress Bar">
            <PasswordInputWithStrength password={password} setPassword={setPassword} />
          </ComponentCard>
        </Col>

        <Col lg={4}>
          <ComponentCard title="With Password Condition">
            <FormLabel>Magic Password ✨ (Type Here)</FormLabel>
            <FormControl type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
            <FormText>Use 8 or more characters with a mix of letters, numbers & symbols.</FormText>

            <Collapse in={password2.length > 0}>
              <div className="password-box bg-light-subtle border border-light mt-2 rounded">
                <PasswordChecklist
                  rules={['minLength', 'specialChar', 'number', 'capital', 'lowercase']}
                  minLength={8}
                  value={password2}
                  iconSize={8}
                  className="m-2"
                />
              </div>
            </Collapse>
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
