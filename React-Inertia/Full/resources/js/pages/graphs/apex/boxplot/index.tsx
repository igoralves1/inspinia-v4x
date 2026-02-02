import ComponentCard from '@/components/cards/ComponentCard'
import CustomApexChart from '@/components/CustomApexChart'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import { getBasicBoxplotChart, getHorizontalBoxplotChart, getScatterBoxplotChart } from './data'
import MainLayout from '@/layouts/MainLayout'

const Page = () => {
    return (
        <MainLayout>
            <Container fluid>
                <PageBreadcrumb title="Boxplot Apexchart" subtitle="Charts" />
                <Row>
                    <Col xl={6}>
                        <ComponentCard title="Basic Boxplot">
                            <CustomApexChart getOptions={getBasicBoxplotChart} series={getBasicBoxplotChart().series} type="boxPlot" height={350} />
                        </ComponentCard>
                    </Col>
                    <Col xl={6}>
                        <ComponentCard title="Scatter Boxplot">
                            <CustomApexChart getOptions={getScatterBoxplotChart} series={getScatterBoxplotChart().series} type="boxPlot" height={350} />
                        </ComponentCard>
                    </Col>
                    <Col xl={6}>
                        <ComponentCard title="Horizontal BoxPlot">
                            <CustomApexChart getOptions={getHorizontalBoxplotChart} series={getHorizontalBoxplotChart().series} type="boxPlot" height={350} />
                        </ComponentCard>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}

export default Page
