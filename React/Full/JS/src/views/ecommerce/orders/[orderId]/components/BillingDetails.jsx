import { Button, Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap';
import { TbPencil } from 'react-icons/tb';
import mastercard from '@/assets/images/cards/mastercard.svg';
const BillingDetails = () => {
  return <Card>
      <CardHeader className="justify-content-between border-dashed">
        <CardTitle as="h4">Billing Details</CardTitle>
        <Button size="sm" className="btn-default btn-icon rounded-circle">
          <TbPencil className="fs-lg" />
        </Button>
      </CardHeader>
      <CardBody>
        <div className="d-flex align-items-start mb-0">
          <div className="flex-grow-1">
            <h5 className="mb-2">John Doe</h5>
            <p className="text-muted mb-0">
              5678 Oak Avenue,
              <br />
              Suite 101,
              <br />
              Chicago, IL 60611,
              <br />
              United States
            </p>
          </div>
          <div className="ms-auto">
            <span className="badge bg-primary-subtle text-primary">Billing Address</span>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <div className="avatar-sm me-2">
            <img src={mastercard} alt="Mastercard" height={32} width={32} className="img-fluid rounded" />
          </div>
          <div>
            <h5 className="fs-xs mb-1">Mastercard Ending in 4242</h5>
            <p className="text-muted mb-0 fs-xs">Expiry: 08/26</p>
          </div>
          <div className="ms-auto">
            <span className="badge bg-success-subtle text-success">Paid</span>
          </div>
        </div>
      </CardBody>
    </Card>;
};
export default BillingDetails;