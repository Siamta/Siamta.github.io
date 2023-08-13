import { WithContext, Thing } from "schema-dts"

interface SEOProps {
  title: string // Page title.
  description: string // Page description.
  actualPath: string // Page path, will have root slash.
  structuredData?: WithContext<Thing>
  noindex?: boolean
}

function SEO({ title, description, actualPath, structuredData, noindex }: SEOProps): JSX.Element {
    if (!actualPath.startsWith("/")) {
      throw new Error("The `actualPath` must starts swith `/` (slash).")
    }

    return (
        <>
        </>
    );
}

export default SEO
