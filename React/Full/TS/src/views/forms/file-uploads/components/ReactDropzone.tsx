import FileUploader from '@/components/FileUploader'
import type { FileType } from '@/types'
import { Link } from 'react-router'
import { useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap'
import { TbChevronRight } from 'react-icons/tb'

const ReactDropzone = () => {
  const [files, setFiles] = useState<FileType[]>([])

  return (
    <Card>
      <CardHeader>
        <CardTitle as="h4">React Dropzone</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">Simple React hook and component to create a HTML5-compliant drag'n'drop zone for files.</p>

        <Link className="btn btn-link p-0 fw-semibold" to="https://github.com/react-dropzone/react-dropzone" target="_blank">
          React Dropzone
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <CardBody className="pt-0">
        <FileUploader
          files={files}
          setFiles={(newFiles) => setFiles(newFiles as FileType[])}
          accept={{
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
          }}
          maxSize={1024 * 1024 * 10}
          maxFileCount={10}
          multiple
        />
      </CardBody>
    </Card>
  )
}

export default ReactDropzone
