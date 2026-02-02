import PageBreadcrumb from '@/components/PageBreadcrumb'
import { useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { TbTrash } from 'react-icons/tb'
import { pinNotes, type PinNoteType } from '@/views/other-apps/pin-board/data.ts'

const Page = () => {
  const [notes, setNotes] = useState<PinNoteType[]>(pinNotes)

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <Container fluid>
      <PageBreadcrumb title="Pin Board" subtitle="Apps" />

      <Row>
        <Col cols={12}>
          <Card className="bg-transparent">
            <CardHeader className="justify-content-between">
              <CardTitle as="h5">Manage Your Notes</CardTitle>
              <Button variant="success" className="rounded-pill">
                Add New
              </Button>
            </CardHeader>

            <CardBody>
              <div className="pin-board d-flex flex-wrap">
                {notes.map((note) => (
                  <div key={note.id} className={`pin-board-item bg-${note.variant}-subtle`}>
                    <p className="text-end fs-10">{note.timestamp}</p>
                    <h4 className="fs-md">{note.title}</h4>
                    <p>{note.content}</p>
                    <button className="pin-board-delete fs-lg" onClick={() => deleteNote(note.id)}>
                      <TbTrash />
                    </button>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
