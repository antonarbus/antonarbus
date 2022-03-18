// pages/about.js
import Footer from "../components/layout/Footer"

export default function About(params) {
  return <div className="content">About text</div>
}

About.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
)