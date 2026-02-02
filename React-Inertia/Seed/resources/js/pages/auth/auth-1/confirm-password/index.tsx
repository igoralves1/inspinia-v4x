import AppLogo from '@/components/AppLogo';
import { author, currentYear } from '@/helpers';
import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEventHandler } from 'react';
import { Button, Card, Col, Container, Form, FormControl, FormLabel, Row } from 'react-bootstrap';

const ConfirmPassword = () => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<{ password: string }>>({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm.store'), {
            onFinish: () => reset('password'),
        });
    };


    return (
        <div className="auth-box overflow-hidden align-items-center d-flex">
            <Head title="New Password" />
            <Container>
                <Row className="justify-content-center">
                    <Col xxl={4} md={6} sm={8}>
                        <div className="auth-brand text-center mb-4">
                            <AppLogo />
                            <h4 className="fw-bold mt-3">Confirm Password ! | IN+</h4>
                            <p className="text-muted w-lg-75 mx-auto">
                                We&apos;ve emailed you a 6-digit verification code. Please enter it below to confirm your email address
                            </p>
                        </div>

                        <Card className="p-4 rounded-4">
                            <Form onSubmit={submit} className='mb-2'>

                                <div className="mb-3 form-group">
                                    <FormLabel htmlFor="userNewPassword">
                                         Password <span className="text-danger">*</span>
                                    </FormLabel>
                                    <div className="input-group">
                                        <FormControl type="password" id="userNewPassword" placeholder="••••••••" 
                                          value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        required />
                                    </div>
                                            {errors.password && <p className="text-danger">{errors.password}</p>}
                                </div>

                               
                                <div className="d-grid">
                                    <Button type="submit" className="btn btn-primary fw-semibold py-2" disabled={processing}>
                                        Confirm  Password
                                    </Button>
                                </div>
                            </Form>


                            <p className="text-muted text-center mb-0">
                                Return to{' '}
                                <Link href={route('login')} className="text-decoration-underline link-offset-3 fw-semibold">
                                    Sign in
                                </Link>
                            </p>
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

export default ConfirmPassword
