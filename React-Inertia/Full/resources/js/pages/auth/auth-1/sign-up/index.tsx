import AppLogo from '@/components/AppLogo';
import PasswordInputWithStrength from '@/components/PasswordInputWithStrength';
import { author, currentYear } from '@/helpers';
import { Head, Link, useForm } from '@inertiajs/react';
import { type FormEventHandler } from 'react';
import { Button, Card, Col, Container, Form, FormControl, FormLabel, Row } from 'react-bootstrap';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const Page = () => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    }
    return (
        <div className="auth-box overflow-hidden align-items-center d-flex">
            <Head title="Sign Up" />
            <Container>
                <Row className="justify-content-center">
                    <Col xxl={4} md={6} sm={8}>
                        <div className="auth-brand text-center mb-4">
                            <AppLogo />
                            <h4 className="fw-bold mt-3">Register to IN+</h4>
                            <p className="text-muted w-lg-75 mx-auto">Let’s get you started. Create your account by entering your details below.</p>
                        </div>

                        <Card className="p-4 rounded-4">
                            <Form onSubmit={submit}>
                                <div className="mb-3 form-group">
                                    <FormLabel>
                                        Name <span className="text-danger">*</span>
                                    </FormLabel>
                                    <FormControl type="text" placeholder="Damian D." value={data.name}
                                        onChange={(e) => setData('name', e.target.value)} required />
                                    {errors.name && <p className="text-danger">{errors.name}</p>}
                                </div>

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

                                <div className="mb-3">
                                    <PasswordInputWithStrength
                                        id="password"
                                        label="Password"
                                        name="password"
                                        password={data.password}
                                        setPassword={(e) => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                    />
                                </div>

                                  <div className="mb-3 form-group">
                                    <FormLabel>
                                        Confirm password <span className="text-danger">*</span>
                                    </FormLabel>
                                    <FormControl type="password" placeholder="confirm your password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required />
                                    {errors.password_confirmation && <p className="text-danger">{errors.password_confirmation}</p>}
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input form-check-input-light fs-14" type="checkbox" id="termAndPolicy" />
                                        <label className="form-check-label" htmlFor="termAndPolicy">
                                            Agree the Terms & Policy
                                        </label>
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <Button type="submit" className="btn btn-primary fw-semibold py-2" disabled={processing}>
                                        Create Account
                                    </Button>
                                </div>
                            </Form>

                            <p className="text-muted text-center mt-4 mb-0">
                                Already have an account?{' '}
                                <Link href={route('login')} className="text-decoration-underline link-offset-3 fw-semibold">
                                    Login
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

export default Page
