import { Button, Pagination } from 'react-bootstrap'
import { TbArrowBackUp, TbChevronLeft, TbChevronRight, TbSend2 } from 'react-icons/tb'
import { comments as commentsData } from '../data'
import { Link } from 'react-router'

const Comments = () => {
  return (
    <>
      <form action="#" className="mb-3">
        <div className="mb-3">
          <textarea className="form-control" id="form-control-textarea" rows={4} placeholder="Enter your messages..."></textarea>
        </div>
        <div className="text-end">
          <Button variant="secondary" type="submit" size="sm">
            Comment <TbSend2 className="align-baseline ms-1" />
          </Button>
        </div>
      </form>

      <h4 className="mb-3 fs-md">Comments (15)</h4>

      {commentsData.map((comment, idx) => (
        <div key={idx} className={`d-flex ${idx === commentsData.length - 1 ? 'mb-3' : 'mb-2'} border border-dashed rounded p-3`}>
          <div className="flex-shrink-0">
            <img src={comment.avatar} alt="" className="avatar-sm rounded-circle shadow-sm" />
          </div>
          <div className="flex-grow-1 ms-2">
            <h5 className="mb-1">
              {comment.name}{' '}
              <small className="text-muted">
                {comment.date} · {comment.time}
              </small>
            </h5>
            <p className="mb-2">{comment.message}</p>
            <Link to="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
              <TbArrowBackUp className="fs-lg" /> Reply
            </Link>
            {comment.reply &&
              comment.reply.map((reply, i) => (
                <div className="d-flex mt-4" key={i}>
                  <div className="flex-shrink-0">
                    <img src={reply.avatar} alt="" className="avatar-sm rounded-circle shadow-sm" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <h5 className="mb-1">
                      {reply.name}{' '}
                      <small className="text-muted">
                        {reply.date} · {reply.time}
                      </small>
                    </h5>
                    <p className="mb-2">{reply.message}</p>
                    <Link to="#" className="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                      <TbArrowBackUp className="fs-lg" /> Reply
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      <Pagination className="pagination-rounded pagination-boxed justify-content-center mb-0">
        <Pagination.Prev disabled>
          <TbChevronLeft />
        </Pagination.Prev>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Next>
          <TbChevronRight />
        </Pagination.Next>
      </Pagination>
    </>
  )
}

export default Comments
