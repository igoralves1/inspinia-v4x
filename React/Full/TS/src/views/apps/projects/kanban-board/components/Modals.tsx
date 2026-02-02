import { useKanbanContext } from '@/context/useKanbanContext'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap'
import { Controller } from 'react-hook-form'

export type CategoryOption = {
  name: string
  variant: string
}

const categoryOptions: CategoryOption[] = [
  { name: 'Design', variant: 'success' },
  { name: 'Development', variant: 'warning' },
  { name: 'UI/UX', variant: 'info' },
  { name: 'Marketing', variant: 'purple' },
  { name: 'Testing', variant: 'info' },
]

const Modals = () => {
  const { newTaskModal, taskForm, taskFormData, sectionFormData, sectionModal, sectionForm } = useKanbanContext()
  return (
    <>
      <Modal show={newTaskModal.open} aria-hidden={newTaskModal.open} onHide={newTaskModal.toggle} centered>
        <Form onSubmit={taskFormData ? taskForm.editRecord : taskForm.newRecord}>
          <ModalHeader closeButton>
            <ModalTitle>{taskFormData ? 'Edit Task' : 'Add New Task'}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <FormGroup className="mb-3" controlId="taskTitle">
              <FormLabel>Title</FormLabel>
              <Controller
                control={taskForm.control}
                name="title"
                rules={{ required: 'Task title is required' }}
                render={({ field }) => <FormControl {...field} value={field.value ?? ''} type="text" placeholder="Enter task title" />}
              />
            </FormGroup>

            <FormGroup className="mb-3" controlId="taskCategory">
              <FormLabel>Category</FormLabel>
              <Controller
                control={taskForm.control}
                name="category"
                rules={{ required: 'Select a category' }}
                render={({ field }) => (
                  <Form.Select
                    {...field}
                    value={field.value?.name || categoryOptions[0].name}
                    onChange={(e) => {
                      const idx = e.target.selectedIndex
                      field.onChange(categoryOptions[idx])
                    }}>
                    {categoryOptions.map((category, idx) => (
                      <option value={category.name} key={idx}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
            </FormGroup>
            <Form.Group className="mb-0" controlId="taskDate">
              <Form.Label>Date</Form.Label>
              <Controller
                control={taskForm.control}
                name="date"
                rules={{ required: 'Date is required' }}
                render={({ field }) => <FormControl {...field} value={field.value ?? ''} type="date" />}
              />
            </Form.Group>
          </ModalBody>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => newTaskModal.toggle()}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {taskFormData ? 'Edit Task' : 'Add Task'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={sectionModal.open} aria-hidden={sectionModal.open} onHide={sectionModal.toggle} tabIndex={-1} role="dialog">
        <form onSubmit={sectionFormData ? sectionForm.editRecord : sectionForm.newRecord}>
          <ModalHeader closeButton>
            <ModalTitle className="m-0">{sectionFormData ? 'Edit New Section' : 'Add New Section'}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col sm={12}>
                <FormLabel>Title</FormLabel>
                <Controller
                  control={sectionForm.control}
                  name="sectionTitle"
                  rules={{ required: 'Task title is required' }}
                  render={({ field }) => (
                    <>
                      <FormControl {...field} value={field.value ?? ''} type="text" placeholder="Enter task title" />
                    </>
                  )}
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" type="submit">
              {sectionFormData ? 'Update' : 'Save'}
            </Button>
            <Button variant="danger" onClick={() => sectionModal.toggle()} type="button">
              Close
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  )
}

export default Modals
