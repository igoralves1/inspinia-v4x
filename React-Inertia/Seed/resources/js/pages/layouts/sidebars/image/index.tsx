import { useEffect } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { useLayoutContext } from '@/context/useLayoutContext'
import { TbInfoCircle } from 'react-icons/tb'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    const { changeSideNavColor, reset } = useLayoutContext()

    useEffect(() => {
        changeSideNavColor('image')

        return () => reset()
    }, [])

    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Image Menu" />

                <Row>
                    <Col sm={12}>
                        <Alert variant="info" className="alert-bordered border-start border-info d-flex align-items-start gap-2">
                            <TbInfoCircle className="fs-xxl" />
                            <div>
                                To switch to a image sidebar, add <code>data-menu-color="image"</code> to the <code>&lt;html&gt;</code> tag. To apply this dynamically,
                                use <code>changeSideNavColor('image')</code> from the <code>LayoutContext</code>.
                            </div>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
