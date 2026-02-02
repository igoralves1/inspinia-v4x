import { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Collapse } from 'react-bootstrap';
import { TbChevronDown, TbRefresh, TbX } from 'react-icons/tb';
import clsx from 'clsx';
const ComponentCard = ({
  title,
  isCloseable,
  isCollapsible,
  isRefreshable,
  className,
  bodyClassName,
  children
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Simulate a refresh action
  // In a real-world scenario, you would fetch new data here
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };
  if (!isVisible) return null;
  return <Card className={clsx(isCollapsed && 'card-collapse', className)}>
      {isRefreshing && <div className="card-overlay">
          <div className="spinner-border text-primary" />
        </div>}

      <CardHeader className="justify-content-between align-items-center">
        <CardTitle>{title}</CardTitle>
        <div className="card-action">
          {isCollapsible && <span className="card-action-item" onClick={handleToggle}>
              <TbChevronDown style={{
            rotate: isCollapsed ? '0deg' : '180deg'
          }} />
            </span>}
          {isRefreshable && <span className="card-action-item" onClick={handleRefresh}>
              <TbRefresh />
            </span>}
          {isCloseable && <span className="card-action-item" onClick={handleClose}>
              <TbX />
            </span>}
        </div>
      </CardHeader>

      {isCollapsible ? <Collapse in={!isCollapsed}>
          <CardBody className={bodyClassName}>{children}</CardBody>
        </Collapse> : <CardBody className={bodyClassName}>{children}</CardBody>}
    </Card>;
};
export default ComponentCard;