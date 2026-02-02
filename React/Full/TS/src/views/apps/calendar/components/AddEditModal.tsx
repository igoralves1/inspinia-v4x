import type { CalendarFormType, SubmitEventType } from '@/types/calendar'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Modal, ModalBody, ModalHeader, ModalTitle, Row } from 'react-bootstrap'
import Feedback from 'react-bootstrap/Feedback'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const AddEditModal = ({ eventData, isEditable, onAddEvent, onRemoveEvent, onUpdateEvent, open, toggle }: CalendarFormType) => {
  const schema = yup.object({
    title: yup.string().required('Please provide a valid event name'),
    category: yup.string().required('Please select a valid event category'),
  })

  type FormValues = yup.InferType<typeof schema>

  const {
    handleSubmit,
    setValue,
    reset,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmitEvent = (data: SubmitEventType) => {
    if (isEditable) {
      onUpdateEvent(data)
    } else {
      onAddEvent(data)
    }
  }

  useEffect(() => {
    if (eventData?.title) {
      setValue('title', String(eventData.title))
      setValue('category', String(eventData.className))
      console.log(eventData.className)
    }
  }, [eventData])

  useEffect(() => {
    if (!open) reset()
  }, [open])

  return (
    <Modal show={open} onHide={toggle} centered>
      <Form onSubmit={handleSubmit(onSubmitEvent)}>
        <ModalHeader>
          <ModalTitle as="h4">{isEditable ? 'Edit' : 'Create'} Event</ModalTitle>
          <button type="button" className="btn-close" onClick={toggle}></button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col sm={12}>
              <FormGroup className="mb-2">
                <FormLabel>Event Name</FormLabel>
                <FormControl type="text" placeholder="Insert Event Name" isInvalid={!!errors.title} {...register('title')} />
                <Feedback type="invalid">{errors.title?.message}</Feedback>
              </FormGroup>
            </Col>
            <Col sm={12}>
              <FormGroup className="mb-2">
                <FormLabel>Category</FormLabel>
                <FormSelect isInvalid={!!errors.category} {...register('category')}>
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="bg-primary-subtle text-primary border-start border-3 border-primary">Primary</option>
                  <option value="bg-secondary-subtle text-secondary border-start border-3 border-secondary">Secondary</option>
                  <option value="bg-success-subtle text-success border-start border-3 border-success">Success</option>
                  <option value="bg-info-subtle text-info border-start border-3 border-info">Info</option>
                  <option value="bg-warning-subtle text-warning border-start border-3 border-warning">Warning</option>
                  <option value="bg-danger-subtle text-danger border-start border-3 border-danger">Danger</option>
                  <option value="bg-dark-subtle text-dark border-start border-3 border-dark">Dark</option>
                  <option value="bg-purple-subtle text-purple border-start border-3 border-purple">Purple</option>
                </FormSelect>
                <Feedback type="invalid">{errors.category?.message}</Feedback>
              </FormGroup>
            </Col>
          </Row>

          <div className="d-flex flex-wrap align-items-center gap-2">
            {isEditable && (
              <Button variant="danger" type="button" onClick={onRemoveEvent}>
                Delete
              </Button>
            )}

            <Button variant="light" type="button" className="ms-auto" onClick={toggle}>
              Close
            </Button>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default AddEditModal
