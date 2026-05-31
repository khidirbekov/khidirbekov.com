import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { BlogPosts } from "@/components/blog-posts"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <About />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <Services />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <BlogPosts />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <ContactForm />
      <Footer />
    </main>
  )
}
