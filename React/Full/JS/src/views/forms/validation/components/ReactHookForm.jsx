import ComponentCard from '@/components/cards/ComponentCard';
import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';
import InputGroupText from 'react-bootstrap/InputGroupText';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { z } from 'zod';
const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();
  const onSubmit = data => {
    console.log('Form Data:', data);
  };
  return <ComponentCard title="React Hook Form Validation">
      <Form noValidate onSubmit={handleSubmit(onSubmit)} className="g-3">
        <Row>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>First name</FormLabel>
              <FormControl type="text" placeholder="First name" isInvalid={!!errors.firstName} {...register('firstName', {
              required: 'First name is required'
            })} />
              <Feedback type="invalid">{errors.firstName?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Last name</FormLabel>
              <FormControl type="text" placeholder="Last name" isInvalid={!!errors.lastName} {...register('lastName', {
              required: 'Last name is required'
            })} />
              <Feedback type="invalid">{errors.lastName?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Username</FormLabel>
              <InputGroup hasValidation>
                <InputGroupText id="inputGroupPrepend">@</InputGroupText>
                <FormControl type="text" placeholder="Username" aria-describedby="inputGroupPrepend" isInvalid={!!errors.username} {...register('username', {
                required: 'Username is required'
              })} />
                <Feedback type="invalid">{errors.username?.message}</Feedback>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>City</FormLabel>
              <FormControl type="text" placeholder="City" isInvalid={!!errors.city} {...register('city', {
              required: 'City is required'
            })} />
              <Feedback type="invalid">{errors.city?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>State</FormLabel>
              <FormControl type="text" placeholder="State" isInvalid={!!errors.state} {...register('state', {
              required: 'State is required'
            })} />
              <Feedback type="invalid">{errors.state?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>Zip</FormLabel>
              <FormControl type="text" placeholder="Zip" isInvalid={!!errors.zip} {...register('zip', {
              required: 'Zip is required'
            })} />
              <Feedback type="invalid">{errors.zip?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup className="my-3">
              <FormCheck type="checkbox" label="I agree to the terms and conditions" isInvalid={!!errors.terms} feedbackType="invalid" feedback={errors.terms?.message} {...register('terms', {
              required: 'You must agree before submitting.'
            })} />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentCard>;
};
const ReactHookFormWithYup = () => {
  const schema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zip: yup.string().required('Zip is required'),
    terms: yup.bool().oneOf([true], 'You must agree before submitting.').required()
  });
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    console.log('Form Data:', data);
  };
  return <ComponentCard title="React Hook Form Validation With Yup">
      <Form noValidate onSubmit={handleSubmit(onSubmit)} className="g-3">
        <Row>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>First name</FormLabel>
              <FormControl type="text" placeholder="First name" isInvalid={!!errors.firstName} {...register('firstName')} />
              <Feedback type="invalid">{errors.firstName?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Last name</FormLabel>
              <FormControl type="text" placeholder="Last name" isInvalid={!!errors.lastName} {...register('lastName')} />
              <Feedback type="invalid">{errors.lastName?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Username</FormLabel>
              <InputGroup hasValidation>
                <InputGroupText id="inputGroupPrepend">@</InputGroupText>
                <FormControl type="text" placeholder="Username" aria-describedby="inputGroupPrepend" isInvalid={!!errors.username} {...register('username')} />
                <Feedback type="invalid">{errors.username?.message}</Feedback>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>City</FormLabel>
              <FormControl type="text" placeholder="City" isInvalid={!!errors.city} {...register('city')} />
              <Feedback type="invalid">{errors.city?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>State</FormLabel>
              <FormControl type="text" placeholder="State" isInvalid={!!errors.state} {...register('state')} />
              <Feedback type="invalid">{errors.state?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>Zip</FormLabel>
              <FormControl type="text" placeholder="Zip" isInvalid={!!errors.zip} {...register('zip')} />
              <Feedback type="invalid">{errors.zip?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup className="my-3">
              <FormCheck type="checkbox" label="I agree to the terms and conditions" isInvalid={!!errors.terms} feedbackType="invalid" feedback={errors.terms?.message} {...register('terms')} />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentCard>;
};
const ReactHookFormWithZod = () => {
  const schema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    username: z.string().min(1, 'Username is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zip: z.string().min(1, 'Zip is required'),
    terms: z.literal(true, {
      errorMap: () => ({
        message: 'You must agree before submitting.'
      })
    })
  });
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(schema)
  });
  const onSubmit = data => {
    console.log('Form Data:', data);
  };
  return <ComponentCard title="React Hook Form Validation With Zod">
      <Form noValidate onSubmit={handleSubmit(onSubmit)} className="g-3">
        <Row>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>First name</FormLabel>
              <FormControl type="text" placeholder="First name" isInvalid={!!errors.firstName} {...register('firstName')} />
              <Feedback type="invalid">{errors.firstName?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Last name</FormLabel>
              <FormControl type="text" placeholder="Last name" isInvalid={!!errors.lastName} {...register('lastName')} />
              <Feedback type="invalid">{errors.lastName?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="mb-3">
              <FormLabel>Username</FormLabel>
              <InputGroup hasValidation>
                <InputGroupText id="inputGroupPrepend">@</InputGroupText>
                <FormControl type="text" placeholder="Username" aria-describedby="inputGroupPrepend" isInvalid={!!errors.username} {...register('username')} />
                <Feedback type="invalid">{errors.username?.message}</Feedback>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>City</FormLabel>
              <FormControl type="text" placeholder="City" isInvalid={!!errors.city} {...register('city')} />
              <Feedback type="invalid">{errors.city?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>State</FormLabel>
              <FormControl type="text" placeholder="State" isInvalid={!!errors.state} {...register('state')} />
              <Feedback type="invalid">{errors.state?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <FormLabel>Zip</FormLabel>
              <FormControl type="text" placeholder="Zip" isInvalid={!!errors.zip} {...register('zip')} />
              <Feedback type="invalid">{errors.zip?.message}</Feedback>
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup className="my-3">
              <FormCheck type="checkbox" label="I agree to the terms and conditions" isInvalid={!!errors.terms} feedbackType="invalid" feedback={errors.terms?.message} {...register('terms')} />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
          </Col>
        </Row>
      </Form>
    </ComponentCard>;
};
export { ReactHookForm, ReactHookFormWithYup, ReactHookFormWithZod };