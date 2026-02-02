import { ReactNode } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap'

type DeleteConfirmationModalProps = {
  show: boolean
  onHide: () => void
  onConfirm: () => void
  selectedCount: number
  itemName?: string
  confirmButtonVariant?: string
  cancelButtonVariant?: string
  modalTitle?: string
  confirmButtonText?: string
  cancelButtonText?: string
  children?: ReactNode
}

const DeleteConfirmationModal = ({
  show,
  onHide,
  onConfirm,
  selectedCount,
  itemName = 'row',
  confirmButtonVariant = 'danger',
  cancelButtonVariant = 'light',
  modalTitle = 'Confirm Deletion',
  confirmButtonText = 'Delete',
  cancelButtonText = 'Cancel',
  children,
}: DeleteConfirmationModalProps) => {
  const getConfirmationMessage = () => {
    if (children) return children

    if (selectedCount > 1) {
      return `Are you sure you want to delete these ${selectedCount} ${itemName}s?`
    }
    return `Are you sure you want to delete this ${itemName}?`
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <ModalHeader closeButton>
        <ModalTitle>{modalTitle}</ModalTitle>
      </ModalHeader>
      <ModalBody>{getConfirmationMessage()}</ModalBody>
      <ModalFooter>
        <Button variant={cancelButtonVariant} onClick={onHide}>
          {cancelButtonText}
        </Button>
        <Button variant={confirmButtonVariant} onClick={onConfirm}>
          {confirmButtonText}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default DeleteConfirmationModal
