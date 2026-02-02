'use client'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import dynamic from 'next/dynamic'
import { registerPlugin } from 'react-filepond'

const FilePondClient = dynamic(() => import('react-filepond').then((mod) => mod.FilePond), { ssr: false })

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default FilePondClient
