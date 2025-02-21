import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import RoomSection from '@/components/RoomSection'
import Service from '@/components/Service/Service'
import Location from '@/components/Location'

export default function Home() {
  return (
   <main>
    <Header />
    <Service />
    <RoomSection />
    <Location />
    <ContactUs />
    <Footer />
   </main>
  )
}
