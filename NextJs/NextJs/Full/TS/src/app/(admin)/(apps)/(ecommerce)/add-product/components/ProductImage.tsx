'use client'

import { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'

import FileUploader from '@/components/FileUploader'
import { FileType } from '@/types'

const ProductImage = () => {
  const [files, setFiles] = useState<FileType[]>([])

  return (
    <Card>
      <CardHeader className="d-block p-3">
        <h4 className="card-title mb-1">Product Image</h4>
        <p className="text-muted mb-0">To upload a product image, please use the option below to select and upload the relevant file.</p>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs={12}>
            <FileUploader
              files={files}
              setFiles={(newFiles) => setFiles(newFiles as FileType[])}
              accept={{
                'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
              }}
              maxSize={1024 * 1024 * 10}
              maxFileCount={10}
              multiple
              className="mb-3"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ProductImage
