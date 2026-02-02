type PageMetaDataProps = {
  title: string
  description?: string
  keywords?: string
}

const defaultPageMetaData: PageMetaDataProps = {
  title: 'Inspinia React',
  description:
    'Inspinia is the #1 best-selling admin dashboard template on WrapBootstrap. Perfect for building CRM, CMS, project management tools, and custom web apps with clean UI, responsive design, and powerful features.',
  keywords:
    'Inspinia, admin dashboard, WrapBootstrap, HTML template, Bootstrap admin, CRM template, CMS template, responsive admin, web app UI, admin theme, best admin template',
}

const PageMetaData = ({ title, description = defaultPageMetaData.description, keywords = defaultPageMetaData.keywords }: PageMetaDataProps) => {
  return (
    <>
      <title>{title ? `${title} | ${defaultPageMetaData.title}` : defaultPageMetaData.title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  )
}
export default PageMetaData
