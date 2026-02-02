import { abbreviatedNumber } from '@/helpers/casing'

import { TbArrowBackUp, TbEye, TbHeart, TbMessageCircle } from 'react-icons/tb'
import { comments } from '@/views/widgets/data.ts'
import { Link } from 'react-router'

const CommentCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        {comments.map((item, idx) => (
          <div className="d-flex border border-dashed rounded p-3" key={idx}>
            <div className="flex-shrink-0">
              <img src={item.avatar} alt="" className="avatar-sm rounded-circle shadow-sm" />
            </div>
            <div className="flex-grow-1 ms-2">
              <h5 className="mb-1">
                {item.name}
                <small className="text-muted">
                  {' '}
                  {item.date} · {item.time}
                </small>
              </h5>
              <p className="mb-2">{item.message}</p>
              <div className="d-flex justify-content-between mt-2 text-muted">
                <div className="d-flex gap-3">
                  <span className="d-inline-flex align-items-center gap-1">
                    <TbEye /> {abbreviatedNumber(item.views)}
                  </span>
                  <span className="d-inline-flex align-items-center gap-1">
                    <TbHeart /> {item.likes}
                  </span>
                  <span className="d-inline-flex align-items-center gap-1">
                    <TbMessageCircle /> {item.comments}
                  </span>
                </div>
                <Link to="" className="link-primary fw-semibold d-inline-flex align-items-center gap-1">
                  <TbArrowBackUp /> Reply
                </Link>
              </div>

              {item.reply &&
                item.reply.map((reply, rIdx) => (
                  <div className="d-flex mt-4" key={rIdx}>
                    <div className="flex-shrink-0">
                      <img src={reply.avatar} alt="" className="avatar-sm rounded-circle shadow-sm" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h5 className="mb-1">
                        {reply.name}
                        <small className="text-muted">
                          {' '}
                          {reply.date} · {reply.time}
                        </small>
                      </h5>
                      <p className="mb-2">{reply.message}</p>
                      <div className="d-flex justify-content-between text-muted">
                        <div className="d-flex gap-3">
                          <span className="d-inline-flex align-items-center gap-1">
                            <TbEye /> {abbreviatedNumber(reply.views)}
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <TbHeart /> {reply.likes}
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <TbMessageCircle /> {reply.comments}
                          </span>
                        </div>
                        <Link to="" className="link-primary fw-semibold d-inline-flex align-items-center gap-1">
                          <TbArrowBackUp /> Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentCard
