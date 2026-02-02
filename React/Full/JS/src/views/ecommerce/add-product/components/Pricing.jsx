import { Card, CardBody, CardHeader, FormControl, FormGroup, FormLabel, FormSelect, InputGroup } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { LuDollarSign, LuPercent, LuTag } from 'react-icons/lu';
const Pricing = () => {
  return <Card>
      <CardHeader className="d-block p-3">
        <h4 className="card-title mb-1">Pricing</h4>
        <p className="text-muted mb-0">Set the base price and applicable discount for the product using the options below.</p>
      </CardHeader>
      <CardBody>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="basePrice">
            Base Price <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup>
            <FormControl type="number" id="basePrice" placeholder="Enter base price (e.g., 199.99)" />
            <InputGroupText>
              <LuDollarSign className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="discount">
            Discount Type <span className="text-muted">(Optional)</span>
          </FormLabel>
          <InputGroup>
            <FormSelect id="discount">
              <option>Choose Discount</option>
              <option value="No Discount">No Discount</option>
              <option value="Flat Discount">Flat Discount</option>
              <option value="Percentage Discount">Percentage Discount</option>
            </FormSelect>
            <InputGroupText>
              <LuPercent className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="discountValue">
            Discount Value <span className="text-muted">(Optional)</span>
          </FormLabel>
          <InputGroup>
            <FormControl type="number" id="discountValue" placeholder="Enter discount amount or percentage" />
            <InputGroupText>
              <LuTag className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
      </CardBody>
    </Card>;
};
export default Pricing;