import PageBreadcrumb from '@/components/PageBreadcrumb'
import clsx from 'clsx'
import { Masonry } from 'masonic'
import { Card, CardBody, CardFooter, CardTitle, Container } from 'react-bootstrap'
import { Link } from 'react-router'
import { TbArrowRight, TbCalendar, TbEye, TbMessageCircle } from 'react-icons/tb'
import { type MasonryCardType, masonryItems } from './data'

const MasonryCard = ({ data }: { data: MasonryCardType }) => {
  return (
    <Card className={clsx(data.variant && `bg-${data.variant} bg-gradient`, 'mb-0')}>
      {data.image && data.category && <div className="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3">{data.category}</div>}

      {data.image && <img className="card-img-top" src={data.image} alt="" />}

      {data.title && data.description && (
        <CardBody>
          {!data.image && data.category && <div className="badge bg-white text-white bg-opacity-25 badge-label mb-3">{data.category}</div>}

          <CardTitle as="h6" className="fs-lg lh-base mb-2">
            <Link to="" className={data.variant ? 'text-white' : 'link-reset'}>
              {data.title}
            </Link>
          </CardTitle>
          <p className={`mb-3 ${data.variant ? 'text-white-50' : 'text-muted'}`}>{data.description}</p>

          {data.tags && (
            <div>
              {data.tags.map((tag, idx) => (
                <Link key={idx} to="#" className={`badge badge-label badge-default ${idx != data.tags!.length - 1 ? 'me-1' : ''}`}>
                  {tag}
                </Link>
              ))}
            </div>
          )}
          {data.date && data.comments && data.views && (
            <p className={`d-flex flex-wrap gap-3 mb-0 mt-3 align-items-center fs-base ${data.variant ? 'text-white-50' : 'text-muted'}`}>
              <span className="d-flex align-items-center gap-1">
                <TbCalendar className="fs-md" />
                <span>{data.date}</span>
              </span>
              <span className="d-flex align-items-center gap-1">
                <TbMessageCircle className="fs-md" />
                <Link to="#" className="link-reset">
                  {data.comments}
                </Link>
              </span>
              <span className="d-flex align-items-center gap-1">
                <TbEye className="fs-md" />
                <span>{data.views}</span>
              </span>
            </p>
          )}
        </CardBody>
      )}

      <CardFooter className={`bg-transparent d-flex justify-content-between ${data.variant && 'border-light border-opacity-25'}`}>
        <div className="d-flex justify-content-start align-items-center gap-2">
          <div className="avatar avatar-xs">
            <img src={data.user.avatar} height={24} width={24} alt="" className="img-fluid rounded-circle" />
          </div>
          <div>
            <h5 className="text-nowrap fs-sm mb-0 lh-base">
              <Link to="#" className={data.variant ? 'text-white' : 'link-reset'}>
                {data.user.name}
              </Link>
            </h5>
          </div>
        </div>
        <Link to="" className={`fw-semibold ${data.variant ? 'text-white' : 'link-primary'}`}>
          Read more <TbArrowRight />
        </Link>
      </CardFooter>
    </Card>
  )
}

const Page = () => {
  return (
    <Container fluid>
      <PageBreadcrumb title="Masonry" subtitle="Miscellaneous" />

      <div style={{ width: '100%' }}>
        <Masonry items={masonryItems} columnGutter={20} columnWidth={350} overscanBy={2} render={({ data }) => <MasonryCard data={data} />} />
      </div>
    </Container>
  )
}

export default Page
