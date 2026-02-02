import AppLogo from '@/components/AppLogo'
import { author, currentYear } from '@/helpers'
import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEventHandler } from 'react';
import { Button, Card, Col, Container, Form, FormControl, FormLabel, Row } from 'react-bootstrap'

type SignInForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface SignInProps {
    status?: string;
    canResetPassword: boolean;
}

const SignInPage = ({ canResetPassword }: SignInProps) => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<SignInForm>>({
        email: 'demo@user.com',
        password: 'password',
        remember: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };


    return (
        <>
            <Head title="Sign In" />
            <div className="auth-box overflow-hidden align-items-center d-flex" style={{ minHeight: '100vh' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xxl={4} md={6} sm={8}>
                            <div className="auth-brand text-center mb-4">
                                <AppLogo />
                                <h4 className="fw-bold mt-3">Welcome to IN+</h4>
                                <p className="text-muted w-lg-75 mx-auto">Let’s get you signed in. Enter your email and password to continue.</p>
                            </div>

                            <Card className="p-4 rounded-4">
                                <Form onSubmit={submit}>
                                    <div className="mb-3 form-group">
                                        <FormLabel>
                                            Email address <span className="text-danger">*</span>
                                        </FormLabel>
                                        <FormControl type="email" placeholder="you@example.com"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required />
                                                {errors.email && <p className="text-danger">{errors.email}</p>}
                                    </div>

                                    <div className="mb-3 form-group">
                                        <FormLabel>
                                            Password <span className="text-danger">*</span>
                                        </FormLabel>
                                        <FormControl type="password" placeholder="••••••••" 
                                          value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        required />
                                          {errors.password && <p className="text-danger">{errors.password}</p>}
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input form-check-input-light fs-14" type="checkbox" id="rememberMe" checked={data.remember} onChange={() => setData('remember', !data.remember)}/>
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Keep me signed in
                                            </label>
                                        </div>
                                            {canResetPassword && (
                                        <Link href={route('password.request')} className="text-decoration-underline link-offset-3 text-muted">
                                            Forgot Password?
                                        </Link>)}
                                    </div>

                                    <div className="d-grid">
                                        <Button type="submit" className="btn-primary fw-semibold py-2" disabled={processing}>
                                            Sign In
                                        </Button>
                                    </div>
                                </Form>

                                <p className="text-muted text-center mt-4 mb-0">
                                    New here?{' '}
                                    <Link href={route('register')} className="text-decoration-underline link-offset-3 fw-semibold">
                                        Create an account
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
        </>
    )
}

export default SignInPage
