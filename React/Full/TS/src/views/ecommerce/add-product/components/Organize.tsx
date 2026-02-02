import { Card, CardBody, CardHeader, FormControl, FormGroup, FormLabel, FormSelect, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { LuGrid3X3, LuLayers, LuList, LuTag, LuToggleLeft } from 'react-icons/lu'

const Organize = () => {
  return (
    <Card>
      <CardHeader className="d-block p-3">
        <h4 className="card-title mb-1">Organize</h4>
        <p className="text-muted mb-0">Organize your product by selecting the appropriate brand, category, sub-category, status, and tags.</p>
      </CardHeader>
      <CardBody>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="brand">Brand</FormLabel>
          <InputGroup>
            <FormControl type="text" id="brand" placeholder="Enter brand name" />
            <InputGroupText>
              <LuLayers className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="category">
            Category <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup>
            <FormSelect id="category">
              <option>Choose Category</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
            </FormSelect>
            <InputGroupText>
              <LuGrid3X3 className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="subCategory">
            Sub Category <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup>
            <FormSelect id="subCategory">
              <option>Choose Sub Category</option>
              <option value="Chairs">Chairs</option>
              <option value="Sofas">Sofas</option>
              <option value="Tables">Tables</option>
            </FormSelect>
            <InputGroupText>
              <LuList className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="statusOne">
            Status <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup>
            <FormSelect id="statusOne">
              <option>Choose Status</option>
              <option value="Published">Published</option>
              <option value="Inactive">Inactive</option>
              <option value="Schedule">Schedule</option>
              <option value="Draft">Draft</option>
            </FormSelect>
            <InputGroupText>
              <LuToggleLeft className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="tags">Tags</FormLabel>
          <InputGroup>
            <FormControl type="text" id="tags" placeholder="Enter tags separated by commas" />
            <InputGroupText>
              <LuTag className="text-muted" />
            </InputGroupText>
          </InputGroup>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

export default Organize
