import user2 from '@/assets/images/users/user-2.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import SimpleBar from 'simplebar-react'
import { Button, Card, CardHeader } from 'react-bootstrap'
import { useState } from 'react'
import { LuMessageSquare } from 'react-icons/lu'
import { TbClock, TbSend2 } from 'react-icons/tb'
import { messages } from '@/views/widgets/data.ts'

const ChatCard = () => {
  const [chatMessages, setChatMessages] = useState(messages)
  const [input, setInput] = useState('')

  const handleSend = (e: any) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    const now = new Date()
    const h = now.getHours()
    const m = now.getMinutes()
    const ampm = h >= 12 ? 'pm' : 'am'
    const hour = h % 12 || 12
    const min = m < 10 ? `0${m}` : m
    const timeStr = `${hour}:${min} ${ampm}`
    setChatMessages((prev) => [
      ...prev,
      {
        message: text,
        time: timeStr,
        fromUser: true,
        avatar: user2,
      },
    ])
    setInput('')
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          message: text,
          time: timeStr,
          fromUser: false,
          avatar: user5,
        },
      ])
    }, 1000)
  }
  return (
    <Card>
      <CardHeader>
        <h4 className="card-title">Chat</h4>
      </CardHeader>

      <SimpleBar className="card-body py-0" style={{ height: '380px' }} id="chat-container">
        {chatMessages.map((message, idx) => (
          <div key={idx} className={`d-flex align-items-start gap-2 my-3 chat-item${message.fromUser ? ' text-end justify-content-end' : ''}`}>
            {!message.fromUser && <img src={message.avatar} className="avatar-md rounded-circle" alt="User" />}

            <div>
              <div className={`chat-message py-2 px-3 rounded ${message.fromUser ? 'bg-info-subtle' : 'bg-warning-subtle'}`}>{message.message}</div>
              <div className="text-muted fs-xs mt-1 d-inline-flex align-items-center gap-1">
                <TbClock /> {message.time}
              </div>
            </div>

            {message.fromUser && <img src={message.avatar} className="avatar-md rounded-circle" alt="User" />}
          </div>
        ))}
      </SimpleBar>

      <div className="card-footer bg-body-secondary border-top border-dashed border-bottom-0">
        <form className="d-flex gap-2" onSubmit={handleSend}>
          <div className="app-search flex-grow-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control bg-light-subtle border-light"
              placeholder="Enter message..."
            />
            <LuMessageSquare className="app-search-icon text-muted" />
          </div>
          <Button type={'submit'} variant={'primary'} className="btn-icon">
            <TbSend2 className="fs-xl" />
          </Button>
        </form>
      </div>
    </Card>
  )
}

export default ChatCard
