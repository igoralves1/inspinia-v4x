import ComponentCard from '@/components/cards/ComponentCard'
import { Button, Col, DropdownButton, DropdownItem, Form, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/InputGroupText'

const InputGroups = () => {
  return (
    <ComponentCard title="Input Group">
      <Row>
        <Col lg={12}>
          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Username</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <InputGroupText id="basic-addon1">@</InputGroupText>
                <FormControl type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Recipient</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <FormControl type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <InputGroupText id="basic-addon2">@example.com</InputGroupText>
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Amount</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <InputGroupText>$</InputGroupText>
                <FormControl type="text" aria-label="Amount (to the nearest dollar)" />
                <InputGroupText>.00</InputGroupText>
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Email Login</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <FormControl type="text" placeholder="Username" aria-label="Username" />
                <InputGroupText>@</InputGroupText>
                <FormControl type="text" placeholder="Server" aria-label="Server" />
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Textarea</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <InputGroupText>With textarea</InputGroupText>
                <FormControl as="textarea" aria-label="With textarea" rows={2}></FormControl>
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="basic-url">Vanity URL</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <InputGroupText id="basic-addon3">https://example.com/users/</InputGroupText>
                <FormControl type="text" id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Wrapping</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup className="flex-nowrap">
                <InputGroupText id="addon-wrapping">@</InputGroupText>
                <FormControl type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Dropdown + Input</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <DropdownButton variant="primary" title="Dropdown">
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownButton>
                <FormControl type="text" placeholder="" aria-label="" aria-describedby="basic-addon1" />
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel>Input + Button</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <FormControl type="text" placeholder="Recipient's username" aria-label="Recipient's username" />
                <Button variant="dark">Button</Button>
              </InputGroup>
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="inputGroupFile04">File Input</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl type="file" id="inputGroupFile04" />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="formFileMultiple01">Multiple Files</FormLabel>
            </Col>
            <Col lg={5}>
              <FormControl type="file" id="formFileMultiple01" multiple />
            </Col>
          </Row>

          <div className="border-top border-dashed my-3"></div>

          <Row className="g-lg-4 g-2">
            <Col lg={2}>
              <FormLabel htmlFor="inputGroupSelect01">Input Group Select</FormLabel>
            </Col>
            <Col lg={5}>
              <InputGroup>
                <InputGroupText>Options</InputGroupText>
                <Form.Select id="inputGroupSelect01">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentCard>
  )
}

export default InputGroups
