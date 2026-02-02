import ComponentCard from '@/components/cards/ComponentCard'
import { Button } from 'react-bootstrap'

const skills = [
  'Product Design',
  'UI/UX',
  'Tailwind CSS',
  'Bootstrap',
  'React.js',
  'Next.js',
  'Vue.js',
  'Figma',
  'Design Systems',
  'Template Authoring',
  'Responsive Design',
  'Component Libraries',
]

const Skills = () => {
  return (
    <ComponentCard title="Skills">
      <div className="d-flex flex-wrap gap-1">
        {skills.map((skill) => (
          <Button size="sm" variant="light" key={skill}>
            {skill}
          </Button>
        ))}
      </div>
    </ComponentCard>
  )
}

export default Skills
