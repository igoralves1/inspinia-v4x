import { Suspense } from 'react'
import { Link } from 'react-router'
import { Col, Row, Table } from 'react-bootstrap'
import { TbCircleFilled, TbSend2 } from 'react-icons/tb'

import ComponentCard from '@/components/cards/ComponentCard'
import { WorldMap } from '@/views/dashboards/dashboard/components/charts.tsx'
import { transactions } from '../data'

const TransactionsWorldwide = () => {
  return (
    <Row>
      <Col xs={12}>
        <ComponentCard title="Transactions Worldwide" isCloseable isCollapsible isRefreshable>
          <Row className="align-items-center">
            <Col xl={6}>
              <div className="table-responsive">
                <Table className="table-custom table-nowrap table-hover table-centered mb-0">
                  <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                    <tr className="text-uppercase fs-xxs">
                      <th className="text-muted">Tran. No.</th>
                      <th className="text-muted">Order</th>
                      <th className="text-muted">Date</th>
                      <th className="text-muted">Amount</th>
                      <th className="text-muted">Status</th>
                      <th className="text-muted">Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td>
                          <Link to="" className="link-reset fw-semibold">
                            {transaction.id}
                          </Link>
                        </td>
                        <td>{transaction.order}</td>
                        <td>
                          {transaction.date} <small className="text-muted">{transaction.time}</small>
                        </td>
                        <td className="fw-semibold">{transaction.amount}</td>
                        <td>
                          <span className={`badge fs-xxs d-inline-flex align-items-center gap-1 badge-soft-${transaction.statusVariant}`}>
                            <TbCircleFilled size={7} /> {transaction.status}
                          </span>
                        </td>
                        <td>
                          <img src={transaction.paymentMethod} className="me-2" height={28} alt={transaction.paymentMethod} /> xxxx
                          {transaction.lastFour}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="text-center mt-3">
                <Link to="" className="link-reset text-decoration-underline fw-semibold link-offset-3">
                  View All Transactions <TbSend2 size={13} />
                </Link>
              </div>
            </Col>
            <Col xl={6}>
              <Suspense>
                <WorldMap />
              </Suspense>
            </Col>
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  )
}

export default TransactionsWorldwide
