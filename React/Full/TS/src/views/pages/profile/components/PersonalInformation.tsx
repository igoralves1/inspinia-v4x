import ComponentCard from '@/components/cards/ComponentCard'
import { Link } from 'react-router'
import type { JSX } from 'react'
import { LuDribbble, LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from 'react-icons/lu'
import { TbBrandX, TbBriefcase, TbLink, TbMail, TbMapPin, TbSchool, TbUsers, TbWorld } from 'react-icons/tb'

type InfoType = {
  icon: JSX.Element
  info: JSX.Element
}

type SocialLinkType = {
  icon: JSX.Element
  title: string
  link: string
  variant: string
}

const personalInfo: InfoType[] = [
  {
    icon: <TbBriefcase className="fs-xl text-secondary" />,
    info: <>UI/UX Designer & Full-Stack Developer</>,
  },
  {
    icon: <TbSchool className="fs-xl text-secondary" />,
    info: (
      <>
        Studied at <span className="text-dark fw-semibold">Stanford University</span>
      </>
    ),
  },
  {
    icon: <TbMapPin className="fs-xl text-secondary" />,
    info: (
      <>
        Lives in <span className="text-dark fw-semibold">San Francisco, CA</span>
      </>
    ),
  },
  {
    icon: <TbUsers className="fs-xl text-secondary" />,
    info: (
      <>
        Followed by <span className="text-dark fw-semibold">25.3k People</span>
      </>
    ),
  },
  {
    icon: <TbMail className="fs-xl text-secondary" />,
    info: (
      <>
        Email
        <Link to="mailto:hello@example.com" className="text-primary fw-semibold">
          hello@example.com
        </Link>
      </>
    ),
  },
  {
    icon: <TbLink className="fs-xl text-secondary" />,
    info: (
      <>
        Website
        <Link to="https://www.example.dev" className="text-primary fw-semibold">
          www.example.dev
        </Link>
      </>
    ),
  },
  {
    icon: <TbWorld className="fs-xl text-secondary" />,
    info: (
      <>
        Languages <span className="text-dark fw-semibold">English, Hindi, Japanese</span>
      </>
    ),
  },
]

const socialLinks: SocialLinkType[] = [
  {
    icon: <LuFacebook className="fs-xl" />,
    title: 'Facebook',
    link: '',
    variant: 'purple',
  },
  {
    icon: <TbBrandX className="fs-xl" />,
    title: 'Twitter-x',
    link: '',
    variant: 'info',
  },
  {
    icon: <LuInstagram className="fs-xl" />,
    title: 'Instagram',
    link: '',
    variant: 'danger',
  },
  {
    icon: <LuDribbble className="fs-xl" />,
    title: 'Dribbble',
    link: '',
    variant: 'success',
  },
  {
    icon: <LuLinkedin className="fs-xl" />,
    title: 'Linkedin',
    link: '',
    variant: 'secondary',
  },
  {
    icon: <LuYoutube className="fs-xl" />,
    title: 'Youtube',
    link: '',
    variant: 'danger',
  },
]

const PersonalInformation = () => {
  return (
    <ComponentCard title="Personal Information">
      <div className="">
        {personalInfo.map((item, idx) => (
          <div className={`d-flex align-items-center gap-2 ${idx != personalInfo.length - 1 ? 'mb-2' : ''}`} key={idx}>
            <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">{item.icon}</div>
            <p className="mb-0 fs-sm">{item.info}</p>
          </div>
        ))}

        <div className="d-flex justify-content-center gap-2 mt-4 mb-2">
          {socialLinks.map((item, idx) => (
            <Link to={item.link} key={idx} className={`btn btn-icon rounded-circle btn-${item.variant}`}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </ComponentCard>
  )
}

export default PersonalInformation
