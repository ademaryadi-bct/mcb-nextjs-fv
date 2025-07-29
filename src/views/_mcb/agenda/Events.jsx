import { useState, useEffect } from 'react'

import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

export const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0)

  const events = [
    {
      id: 1,
      title: 'KONGSI: Akulturasi Tionghoa di Nusantara',
      image: '/images/events/Kongsi_Portrait.png',
      datefrom: '2025-02-11',
      dateto: '2025-02-11',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Gallery, Museum Nasional Indonesia',
      description:
        ' Pameran “KONGSI Akulturasi Tionghoa di Nusantara” menampilkan koleksi dan narasi sejarah yang menggambarkan perjalanan panjang interaksi budaya ini.'
    },
    {
      id: 2,
      title: 'INDONESIA, THE OLDEST CIVILIZATION ON EARTH?',
      image: '/images/events/Oldest Civilization_Portrait.jpg',
      datefrom: '2024-07-20',
      dateto: '2024-07-20',
      time: '2:00 PM - 8:00 PM',
      location: 'Interactive Wing, Museum Nasional Indonesia',
      description:
        '130 tahun setelah Pithecanthropus erectus, banyak temuan baru di Indonesia yang memperkaya pemahaman kita tentang evolusi manusia, kompleksitas asal usul kita, dan berbagai wujud makhluk manusia di bumi pada masa lalu. Keanekaragaman budaya dan alam Indonesia terpaut jauh ke masa lalu, termasuk asal-usul kita sendiri. Fosil-fosil Indonesia menyoroti pentingnya Nusantara dalam penelusuran persebaran dan adaptasi hominin purba di berbagai lingkungan yang terus berubah.'
    },
    {
      id: 3,
      title: 'Kampanye Pekan Inklusivitas',
      image: '/images/events/Pekan Inklusivitas_Portrait.jpg',
      datefrom: '2024-07-25',
      dateto: '2025-02-11',
      time: '11:00 AM - 4:00 PM',
      location: 'Education Center, Museum Nasional Indonesia',
      description:
        'Dalam rangka memperingati Hari Disabilitas Internasional pada 3 Desember, Museum Nasional Indonesia (MNI) dengan bangga meluncurkan Kampanye Pekan Inklusivitas yang akan berlangsung dari tanggal 5 hingga 7 Desember 2024. Inisiatif ini menjadi wujud komitmen Museum dalam menciptakan aksesibilitas dan inklusivitas bagi seluruh pengunjung, sesuai dengan misi untuk memberikan pengetahuan dan pengalaman budaya tanpa terkecuali.'
    },
    {
      id: 4,
      title: 'Pesona Keris Nusantara',
      image: '/images/events/Keris.jpg',
      date: '2024-08-01',
      time: '7:00 PM - 9:00 PM',
      location: 'Auditorium, Heritage Museum',
      description:
        'Keris, senjata tradisional Indonesia yang telah diakui sebagai warisan dunia oleh UNESCO, kini diperingati setiap 25 November sebagai Hari Keris Nasional. Sebagai bentuk apresiasi terhadap warisan budaya yang begitu kaya ini, jangan lewatkan kesempatan untuk menyaksikan keindahan dan makna mendalam dari mahakarya “Pameran Pesona Keris Nusantara”. '
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent(prev => (prev + 1) % events.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const nextEvent = () => {
    setCurrentEvent(prev => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEvent(prev => (prev - 1 + events.length) % events.length)
  }

  return (
    <section id='events' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>Upcoming Event</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Join us for exciting exhibitions, workshops, and lectures that bring history to life.
          </p>
        </div>

        <div className='relative max-w-6xl mx-auto'>
          <div className='relative overflow-hidden rounded-2xl bg-card shadow-2xl'>
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`transition-all duration-700 ${
                  index === currentEvent
                    ? 'opacity-100 translate-x-0'
                    : index < currentEvent
                      ? 'opacity-0 -translate-x-full absolute inset-0'
                      : 'opacity-0 translate-x-full absolute inset-0'
                }`}
              >
                <div className='grid md:grid-cols-2 gap-0 min-h-[500px]'>
                  <div className='relative'>
                    <img src={event.image} alt={event.title} className='w-full h-full' />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent'></div>
                  </div>

                  <div className='p-8 md:p-12 flex flex-col justify-center'>
                    <h3 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>{event.title}</h3>

                    <div className='space-y-4 mb-6'>
                      <div className='flex items-center text-muted-foreground'>
                        <Calendar className='w-5 h-5 mr-3 text-primary' />
                        <span>
                          {new Date(event.datefrom).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}{' '}
                          -{' '}
                          <span>
                            {new Date(event.dateto).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </span>
                      </div>

                      <div className='flex items-center text-muted-foreground'>
                        <Clock className='w-5 h-5 mr-3 text-primary' />
                        <span>{event.time}</span>
                      </div>

                      <div className='flex items-center text-muted-foreground'>
                        <MapPin className='w-5 h-5 mr-3 text-primary' />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className='text-muted-foreground leading-relaxed mb-8'>{event.description}</p>

                    <button className='text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors w-fit'>
                      Detil Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevEvent}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-lg transition-all'
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextEvent}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-lg transition-all'
          >
            <ChevronRight size={24} />
          </button>

          {/* Event Indicators */}
          <div className='flex justify-center mt-8 space-x-2'>
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentEvent ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
