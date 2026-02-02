import Link from 'next/link';
import { BreadcrumbItem } from 'react-bootstrap';
import { TbChevronRight } from 'react-icons/tb';
import { BreadcrumbItem } from 'react-bootstrap'
const PageBreadcrumb = ({
  title,
  subtitle
}) => {
  return <div className="page-title-head d-flex align-items-center">
      <div className="flex-grow-1">
        <h4 className="fs-sm text-uppercase fw-bold m-0">{title}</h4>
      </div>
      <div className="text-end">
        <div className="breadcrumb m-0 py-0 d-flex align-items-center gap-1">
          <BreadcrumbItem href="">
            Inspinia
          </BreadcrumbItem>
          <TbChevronRight />
          {subtitle && <>
              <BreadcrumbItem href="">
                {subtitle}
              </BreadcrumbItem>
              <TbChevronRight />
            </>}
          <BreadcrumbItem active>{title}</BreadcrumbItem>
        </div>
      </div>
    </div>;
};
export default PageBreadcrumb;