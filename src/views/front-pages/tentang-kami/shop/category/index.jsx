'use client'

import { useState } from 'react'

import HeroSection from '@/views/front-pages/landing-page/HeroSection'
import ContactUs from '@/views/front-pages/landing-page/ContactUs'
import SearchSection from './SearchSection'
import MainContent from './MainContent'

const ShopCategoryWrapper = ({ slides }) => {
  const [filters, setFilters] = useState({
    kategori: {
      title: 'Kategori',
      options: [
        { id: 'kategori1', label: 'Kategori', checked: true },
        { id: 'kategori2', label: 'Kategori', checked: false },
        { id: 'kategori3', label: 'Kategori', checked: false }
      ]
    },
    brand: {
      title: 'Brand',
      options: [
        { id: 'brand1', label: 'Brand Name', checked: true },
        { id: 'brand2', label: 'Brand Name', checked: false },
        { id: 'brand3', label: 'Brand Name', checked: false },
        { id: 'brand4', label: 'Brand Name', checked: false }
      ]
    },
    ukuran: {
      title: 'Ukuran',
      options: [
        { id: 'ukuran1', label: 'Ukuran', checked: true },
        { id: 'ukuran2', label: 'Ukuran', checked: false },
        { id: 'ukuran3', label: 'Ukuran', checked: false },
        { id: 'ukuran4', label: 'Ukuran', checked: false }
      ]
    },
    gender: {
      title: 'Gender',
      options: [
        { id: 'gender1', label: 'Gender', checked: true },
        { id: 'gender2', label: 'Gender', checked: false },
        { id: 'gender3', label: 'Gender', checked: false },
        { id: 'gender4', label: 'Gender', checked: false }
      ]
    }
  })

  const [searchTerm, setSearchTerm] = useState('')

  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const productItems = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: 'Nama Produk',
    type: 'Tipe Produk',
    image: '/images/front-pages/tentang-kami/mbc-shop/product_category.png'
  }))

  const handleFilterChange = (section, optionId) => {
    setFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        options: prev[section].options.map(option =>
          option.id === optionId ? { ...option, checked: !option.checked } : option
        )
      }
    }))
  }

  const handleContactSubmit = e => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
  }

  return (
    <div className='min-h-screen bg-white'>
      <HeroSection slides={slides} />
      {/* Search and Filter Section */}
      <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Main Content */}
      <MainContent filters={filters} productItems={productItems} handleFilterChange={handleFilterChange} />
      <ContactUs />
    </div>
  )
}

export default ShopCategoryWrapper
