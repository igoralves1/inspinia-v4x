import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import ReactDOMServer from 'react-dom/server'

import ComponentCard from '@/components/cards/ComponentCard'
import { TbThumbDownFilled, TbThumbUpFilled } from 'react-icons/tb'
import Swal, { type SweetAlertOptions } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import landingCta from '@/assets/images/landing-cta.jpg'
import logoSm from '@/assets/images/logo-sm.png'

const ReactSwal = withReactContent(Swal)

const showAlert = (options: SweetAlertOptions) => {
  ReactSwal.fire({
    buttonsStyling: false,
    customClass: { confirmButton: 'btn btn-primary mt-2' },
    ...options,
  })
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="SweetAlert" subtitle="Miscellaneous" />

      <Row className="justify-content-center">
        <Col lg={8}>
          <ComponentCard title="Example">
            <Table responsive className="mb-0">
              <tbody>
                <tr>
                  <td>
                    <h5 className="mb-1">Basic</h5>
                    <p className="text-muted mb-0">Displays a simple SweetAlert popup.</p>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        showAlert({
                          title: 'Simple Alert',
                          text: 'This is a basic SweetAlert dialog.',
                        })
                      }>
                      Click me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">Title</h5>
                    <p className="text-muted mb-0">A popup with a title and supporting text.</p>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        showAlert({
                          title: 'Notice',
                          text: 'This is a titled alert with additional details.',
                          icon: 'question',
                          showCloseButton: true,
                        })
                      }>
                      Click Me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">HTML</h5>
                    <p className="text-muted mb-0">Shows a popup with custom HTML content.</p>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        showAlert({
                          title: '<i>HTML</i> <u>Alert</u>',
                          html: 'Use <b>bold</b>, <a to="#">links</a>, and other HTML here.',
                          icon: 'info',
                          showCloseButton: true,
                          showCancelButton: true,
                          confirmButtonText: ReactDOMServer.renderToStaticMarkup(
                            <>
                              <TbThumbUpFilled className="me-1" /> Like it!
                            </>,
                          ),
                          cancelButtonText: ReactDOMServer.renderToStaticMarkup(<TbThumbDownFilled />),
                          customClass: {
                            confirmButton: 'btn btn-success me-2',
                            cancelButton: 'btn btn-danger',
                          },
                        })
                      }>
                      Toggle HTML SweetAlert
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">All States</h5>
                    <p className="text-muted mb-0">Examples of SweetAlert in different alert states.</p>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() =>
                          showAlert({
                            text: 'This is an informational message to keep you updated.',
                            icon: 'info',
                            confirmButtonText: 'Understood',
                            customClass: { confirmButton: 'btn btn-info' },
                          })
                        }>
                        Toggle Info
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() =>
                          showAlert({
                            text: 'Heads up! Something might require your attention.',
                            icon: 'warning',
                            confirmButtonText: 'Got it',
                            customClass: { confirmButton: 'btn btn-warning' },
                          })
                        }>
                        Toggle Warning
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() =>
                          showAlert({
                            text: 'An unexpected error occurred. Please try again.',
                            icon: 'error',
                            confirmButtonText: 'Dismiss',
                            customClass: { confirmButton: 'btn btn-danger' },
                          })
                        }>
                        Toggle Error
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() =>
                          showAlert({
                            text: 'Action completed successfully!',
                            icon: 'success',
                            confirmButtonText: 'Great!',
                            customClass: { confirmButton: 'btn btn-success' },
                          })
                        }>
                        Toggle Success
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() =>
                          showAlert({
                            text: 'Do you need more information about this feature?',
                            icon: 'question',
                            confirmButtonText: 'Yes, please',
                          })
                        }>
                        Toggle Question
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">Long Content</h5>
                    <p className="text-muted mb-0">A popup with extended content for demonstration.</p>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        showAlert({
                          imageUrl: 'https://placehold.co/300x1000/1ab394/white',
                          imageHeight: 1000,
                          imageAlt: 'Very tall content image',
                          showCloseButton: true,
                          customClass: { confirmButton: 'btn btn-secondary mt-2' },
                        })
                      }>
                      Click Me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">With Confirm Button</h5>
                    <p className="text-muted mb-0">A confirmation dialog with an attached action.</p>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        ReactSwal.fire({
                          title: 'Confirm Deletion',
                          text: 'Are you sure you want to delete this item?',
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonText: 'Yes, delete it!',
                          showCloseButton: true,
                          buttonsStyling: false,
                          customClass: {
                            confirmButton: 'btn btn-primary me-2 mt-2',
                            cancelButton: 'btn btn-danger mt-2',
                          },
                        }).then((result) => {
                          if (result.isConfirmed) {
                            showAlert({
                              title: 'Deleted!',
                              text: 'Your item has been successfully removed.',
                              icon: 'success',
                            })
                          }
                        })
                      }>
                      Click Me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">With Cancel Button</h5>
                    <p className="text-muted mb-0">Includes cancel and confirm options with different actions.</p>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        ReactSwal.fire({
                          title: 'Delete File?',
                          text: 'This action cannot be undone!',
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonText: 'Delete',
                          cancelButtonText: 'Cancel',
                          showCloseButton: true,
                          buttonsStyling: false,
                          customClass: {
                            confirmButton: 'btn btn-primary mt-2 me-2',
                            cancelButton: 'btn btn-danger mt-2',
                          },
                        }).then((result) => {
                          if (result.isConfirmed) {
                            showAlert({
                              title: 'Deleted!',
                              text: 'The file has been deleted.',
                              icon: 'success',
                            })
                          } else if (result.dismiss === Swal.DismissReason.cancel) {
                            showAlert({
                              title: 'Action Cancelled',
                              text: 'Your file is safe.',
                              icon: 'error',
                            })
                          }
                        })
                      }>
                      Click Me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">With Image Header (Logo)</h5>
                    <p className="text-muted mb-0">Custom popup with a logo or image header.</p>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        showAlert({
                          title: 'Custom Branding',
                          text: 'This alert includes a logo.',
                          imageUrl: logoSm,
                          imageHeight: 40,
                          showCloseButton: true,
                        })
                      }>
                      Click Me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">Auto Close</h5>
                    <p className="text-muted mb-0">Displays a popup that closes automatically after a timeout.</p>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        showAlert({
                          title: 'Auto Dismiss',
                          html: 'Closing in <b></b> seconds...',
                          timer: 2000,
                          timerProgressBar: true,
                          showCloseButton: true,
                        })
                      }}>
                      Click Me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">Position</h5>
                    <p className="text-muted mb-0">Shows the alert in different screen positions.</p>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          showAlert({
                            icon: 'success',
                            text: 'Saved successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                            position: 'top-start',
                          })
                        }}>
                        Top Start
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          showAlert({
                            icon: 'success',
                            text: 'Saved successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                            position: 'top-end',
                          })
                        }}>
                        Top End
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          showAlert({
                            icon: 'success',
                            text: 'Saved successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                            position: 'bottom-start',
                          })
                        }}>
                        Bottom Start
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          showAlert({
                            icon: 'success',
                            text: 'Saved successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                            position: 'bottom-end',
                          })
                        }}>
                        Bottom End
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">With Custom Padding, Background</h5>
                    <p className="text-muted mb-0">Popup with custom dimensions, padding, and background style.</p>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        showAlert({
                          title: 'Custom Design',
                          html: '<p class="text-white">This alert has custom size, padding, and background.</p>',
                          width: 600,
                          padding: '100px',
                          color: '#fff',
                          background: `var(--ins-secondary-bg) url(${landingCta}) no-repeat center`,
                        })
                      }}>
                      Click Me
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-1">Ajax Request</h5>
                    <p className="text-muted mb-0">Demonstrates an alert with an Ajax request.</p>
                  </td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        ReactSwal.fire({
                          title: '<h4>Enter Your Email</h4>',
                          input: 'email',
                          inputPlaceholder: 'Enter your email address',
                          showCancelButton: true,
                          confirmButtonText: 'Submit',
                          showLoaderOnConfirm: true,
                          showCloseButton: true,
                          buttonsStyling: false,
                          customClass: {
                            confirmButton: 'btn btn-primary me-2',
                            cancelButton: 'btn btn-danger',
                          },
                          preConfirm: (email) => {
                            return new Promise((resolve, reject) => {
                              setTimeout(() => {
                                if (email === 'taken@example.com') {
                                  reject('This email is already registered.')
                                } else {
                                  resolve(email)
                                }
                              }, 1500)
                            })
                          },
                          allowOutsideClick: false,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            ReactSwal.fire({
                              icon: 'success',
                              title: 'Submitted!',
                              html: `Your email: ${result.value}`,
                              buttonsStyling: false,
                              customClass: {
                                confirmButton: 'btn btn-primary',
                              },
                            })
                          }
                        })
                      }}>
                      Click Me
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </ComponentCard>
        </Col>
      </Row>
    </Container>
  )
}

export default Page
