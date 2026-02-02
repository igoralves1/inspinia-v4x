'use client';

import FileUploader from '@/components/FileUploader';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'react-bootstrap';
import { TbChevronRight } from 'react-icons/tb';
const Dropzone = () => {
  const [files, setFiles] = useState([]);
  return <Card>
      <CardHeader>
        <CardTitle as="h4">React Dropzone</CardTitle>
      </CardHeader>

      <CardBody>
        <p className="text-muted mb-2">Simple React hook and component to create a HTML5-compliant drag'n'drop zone for files.</p>

        <Link className="btn btn-link p-0 fw-semibold" href="https://github.com/react-dropzone/react-dropzone" target="_blank">
          React Dropzone
          <TbChevronRight className="ms-1" />
        </Link>
      </CardBody>

      <CardBody className="pt-0">
        <FileUploader files={files} setFiles={newFiles => setFiles(newFiles)} accept={{
        'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
      }} maxSize={1024 * 1024 * 10} maxFileCount={10} multiple />
      </CardBody>
    </Card>;
};
export default Dropzone;