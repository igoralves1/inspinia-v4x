import ComponentCard from '@/components/cards/ComponentCard'

const About = () => {
  return (
    <ComponentCard title="About Me">
      <p>
        I'm a Product Designer and template author passionate about crafting clean, scalable, and high-performing UI solutions. With a focus on
        frontend technologies and modern design systems, I create user-centric digital products that are both functional and visually appealing.
      </p>
      <p className="mb-0">
        As a template creator, I specialize in building developer-friendly UI kits and dashboards using frameworks like Tailwind CSS, Bootstrap,
        React, Next.js, Vue, and Laravel. My work powers countless web apps, helping developers save time and build faster.
      </p>

      <div className="mt-3">
        <h5 className="mb-2">My Approach :</h5>
        <p className="mb-0">
          I take a user-first approach to design—blending thoughtful UX with clean code. From wireframes to fully responsive templates, I focus on
          creating intuitive and aesthetic experiences. Whether you're launching a SaaS dashboard, admin panel, or marketing site, I strive to deliver
          pixel-perfect results that elevate your product.
        </p>
      </div>
    </ComponentCard>
  )
}

export default About
