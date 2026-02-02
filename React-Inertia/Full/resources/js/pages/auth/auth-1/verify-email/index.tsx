import checkmark from '@/images/checkmark.png'
import AppLogo from '@/components/AppLogo'
import { author, currentYear } from '@/helpers'
import { Head, Link, useForm } from '@inertiajs/react'

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import type { FormEventHandler } from 'react'

const VerifyEmail = () => {
        const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };
  return (
    <div className="auth-box overflow-hidden align-items-center d-flex">
      <Head title="Verify Email" />
      <Container>
        <Row className="justify-content-center">
          <Col xxl={4} md={6} sm={8}>
            <div className="auth-brand text-center mb-4">
              <AppLogo />
              <h4 className="fw-bold mt-3">Welcome to IN+</h4>
              <p className="text-muted w-lg-75 mx-auto">Awesome! You&apos;ve read the important message like a pro.</p>
            </div>

            <Card className="p-4 rounded-4">
              <Form onSubmit={submit}>
                <div className="mb-4">
                  <div className="avatar-xxl mx-auto mt-2">
                    <div className="avatar-title bg-light-subtle border border-light border-dashed rounded-circle">
                      <img src={checkmark} alt="checkmark" height="64" />
                    </div>
                  </div>
                </div>


                <div className="d-grid">
                  <Button type="submit" className="btn btn-primary fw-semibold py-2" disabled={processing}>
                    Resend verification email
                  </Button>
                  <Link method='post' type="submit" href={route('logout')} className="btn btn-danger mt-2 fw-semibold py-2" disabled={processing}>
                 Logout
                  </Link>
                </div>
              </Form>
            </Card>

            <p className="text-center text-muted mt-4 mb-0">
              © 2014 - {currentYear} INSPINIA — by <span className="fw-semibold">{author}</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VerifyEmail
