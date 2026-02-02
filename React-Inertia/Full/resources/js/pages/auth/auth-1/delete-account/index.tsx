import deleteIcon from '@/images/delete.png'
import AppLogo from '@/components/AppLogo'
import { author, currentYear } from '@/helpers'
import BaseLayout from '@/layouts/BaseLayout'

import { Head } from '@inertiajs/react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Page = () => {
    return (
        <BaseLayout>
            <Head title="Delete Account" />
            <div className="auth-box overflow-hidden align-items-center d-flex">
                <Container>
                    <Row className="justify-content-center">
                        <Col xxl={4} md={6} sm={8}>
                            <div className="auth-brand text-center mb-4">
                                <AppLogo />
                            </div>

                            <Card className="p-4 rounded-4">
                                <div className="mb-4">
                                    <div className="avatar-xxl mx-auto mt-2">
                                        <div className="avatar-title bg-light-subtle border border-light border-dashed rounded-circle d-flex align-items-center justify-content-center">
                                            <img src={deleteIcon} alt="delete icon" height={64} />
                                        </div>
                                    </div>
                                </div>

                                <h4 className="fw-bold text-center mb-3">Account Deactivated</h4>
                                <p className="text-muted text-center mb-4">
                                    Your account is currently inactive. Reactivate now to regain access to all features and opportunities.
                                </p>

                                <div className="d-grid">
                                    <Button type="button" variant="primary" className="fw-semibold py-2">
                                        Reactivate Now
                                    </Button>
                                </div>
                            </Card>

                            <p className="text-center text-muted mt-4 mb-0">
                                © 2014 - {currentYear} INSPINIA — by <span className="fw-semibold">{author}</span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>
    )
}

export default Page
