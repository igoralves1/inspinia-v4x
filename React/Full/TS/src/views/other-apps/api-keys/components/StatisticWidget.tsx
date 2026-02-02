import { Card, CardBody } from 'react-bootstrap'
import type { StatisticsWidgetType } from '@/views/other-apps/api-keys/data.ts'
import CustomApexChart from '@/components/CustomApexChart.tsx'

const StatisticWidget = ({ item }: { item: StatisticsWidgetType }) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center gap-3">
          <div className={`avatar-xl bg-light text-${item.variant} rounded-circle`}>
            <span className="avatar-title">
              <item.icon size={18} className="fs-xxl" />
            </span>
          </div>
          <div className="flex-grow-1">
            <h6 className="mb-2 text-muted text-uppercase fs-xs">{item.title}</h6>
            <h4 className="mb-0 fw-bold">{item.value}</h4>
          </div>
        </div>
        {item.chartOptions && (
          <div className="mt-3">
            <CustomApexChart getOptions={item.chartOptions} series={item.chartOptions().series} type="area" height={60} />
          </div>
        )}
      </CardBody>
    </Card>
  )
}

export default StatisticWidget
