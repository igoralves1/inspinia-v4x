import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicSlopeChart, getMultiSlopeChart } from './data'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Slope Apexchart" subtitle="Charts" />
                <Row>
                    <Col xl={6}>
                        <ComponentCard title="Basic Slope">
                            <CustomApexChart getOptions={getBasicSlopeChart} series={getBasicSlopeChart().series} type="line" height={350} />
                        </ComponentCard>
                    </Col>
                    <Col xl={6}>
                        <ComponentCard title="Multi Slope">
                            <CustomApexChart getOptions={getMultiSlopeChart} series={getMultiSlopeChart().series} type="line" height={350} />
                        </ComponentCard>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
