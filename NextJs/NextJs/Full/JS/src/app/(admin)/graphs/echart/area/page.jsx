'use client';

import DynamicAreaChart from '@/app/(admin)/graphs/echart/area/components/DynamicAreaChart';
import ComponentCard from '@/components/cards/ComponentCard';
import EChartClient from '@/components/client-wrapper/EChartClient';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Col, Container, Row } from 'react-bootstrap';
import { getAreaChart, getAreawithMarkerChart, getStackedAreaChart, getStepAreaChart } from './data';
const Page = () => {
  return <Container fluid>
      <PageBreadcrumb title="Area Echart" subtitle="Charts" />
      <Row>
        <Col xl={6}>
          <ComponentCard title="Area Chart">
            <EChartClient extensions={[LineChart, CanvasRenderer]} getOptions={getAreaChart} style={{
            height: '300px'
          }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Stacked Area Chart">
            <EChartClient extensions={[LineChart, CanvasRenderer]} getOptions={getStackedAreaChart} style={{
            height: '300px'
          }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <ComponentCard title="Area with Marker">
            <EChartClient extensions={[LineChart, CanvasRenderer]} getOptions={getAreawithMarkerChart} style={{
            height: '300px'
          }} />
          </ComponentCard>
        </Col>
        <Col xl={6}>
          <DynamicAreaChart />
        </Col>
        <Col xl={6}>
          <ComponentCard title="Step Area">
            <EChartClient extensions={[LineChart, CanvasRenderer]} getOptions={getStepAreaChart} style={{
            height: '300px'
          }} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>;
};
export default Page;