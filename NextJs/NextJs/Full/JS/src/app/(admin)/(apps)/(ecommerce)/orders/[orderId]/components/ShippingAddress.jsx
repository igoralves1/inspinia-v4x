import { Alert, Button, Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap';
import { TbPencil } from 'react-icons/tb';
const ShippingAddress = () => {
  return <Card>
      <CardHeader className="justify-content-between border-dashed">
        <CardTitle as="h4">Shipping Address</CardTitle>
        <Button size="sm" className="btn-default btn-icon rounded-circle">
          <TbPencil className="fs-lg" />
        </Button>
      </CardHeader>
      <CardBody>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=New+York+University&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4" style={{
        width: '100%',
        height: 180,
        overflow: 'hidden',
        border: 0
      }} />
        <div className="d-flex align-items-start my-3">
          <div className="flex-grow-1">
            <h5 className="mb-2">John Doe</h5>
            <p className="text-muted mb-1">
              1234 Elm Street,
              <br />
              Apt 567,
              <br />
              Springfield, IL 62704,
              <br />
              United States
            </p>
            <p className="mb-0 text-muted">
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Email:</strong> john.doe@example.com
            </p>
          </div>
          <div className="ms-auto">
            <span className="badge bg-success-subtle text-success">Primary Address</span>
          </div>
        </div>
        <Alert variant="warning" className="mb-0">
          <h6 className="mb-2">Delivery Instructions:</h6>
          <p className="fst-italic mb-0">Please leave the package at the front door if no one is home. Call upon arrival.</p>
        </Alert>
      </CardBody>
    </Card>;
};
export default ShippingAddress;