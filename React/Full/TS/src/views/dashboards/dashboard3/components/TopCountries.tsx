import clsx from 'clsx'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbWorld } from 'react-icons/tb'

import ComponentCard from '@/components/cards/ComponentCard'
import { countriesData } from '../data'

const TopCountries = () => {
  return (
    <Col xxl={4} lg={6}>
      <ComponentCard title="Top 10 Countries" isCloseable isCollapsible isRefreshable>
        {countriesData.map((country, idx) => (
          <div key={country.code} className={clsx('d-flex align-items-center gap-2', countriesData.length - 1 !== idx && 'mb-3')}>
            <span className="fs-sm fw-medium fst-italic text-muted">{String(country.rank).padStart(2, '0')}.</span>
            <img src={country.flag} alt={country.name} className="avatar-xxs rounded" height={16} width={16} />
            <h5 className="mb-0 fw-medium">
              <Link to="" className="link-reset">
                {country.name}
              </Link>
            </h5>
            <div className="ms-auto">
              <div className="d-flex align-items-center gap-3">
                <p className="mb-0 fw-medium">{country.visitors.toLocaleString()}</p>
                <p className={`badge badge-label fs-xxs mb-0 badge-soft-${country.trend.type}`}>
                  {country.trend.type === 'danger' ? '-' : country.trend.type === 'success' ? '+' : ''}
                  {country.trend.value}%
                </p>
              </div>
            </div>
          </div>    
        ))}

        <div className="text-center mt-2">
          <Link to="/chat" className="link-reset text-decoration-underline fw-semibold link-offset-3">
            View all Countries <TbWorld size={13} />
          </Link>
        </div>
      </ComponentCard>
    </Col>
  )
}

export default TopCountries
