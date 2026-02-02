import { CardBody, ProgressBar } from 'react-bootstrap'
import { TbCircleFilled } from 'react-icons/tb'

import ComponentCard from '@/components/cards/ComponentCard'
import { projectStats } from '../data'

const ProjectPerformance = () => {
  return (
    <ComponentCard title="Project Performance" bodyClassName="p-0" isCollapsible isRefreshable isCloseable>
      <CardBody>
        <div>
          {projectStats.map((stat, index) => (
            <div key={stat.id}>
              <div className="d-flex justify-content-between mb-2">
                <h5 className="fs-base mb-0">{stat.title}</h5>
                <div>
                  <span>{stat.count}</span>
                  {stat.showPercentage && (
                    <span>
                      <TbCircleFilled className="text-light mx-3 fs-10" /> {stat.percentage}%
                    </span>
                  )}
                </div>
              </div>
              <ProgressBar
                variant={stat.variant}
                now={stat.percentage}
                className={index < projectStats.length - 1 ? 'mb-4' : ''}
                style={{ height: '4px' }}
              />
            </div>
          ))}
        </div>
      </CardBody>
    </ComponentCard>
  )
}

export default ProjectPerformance
