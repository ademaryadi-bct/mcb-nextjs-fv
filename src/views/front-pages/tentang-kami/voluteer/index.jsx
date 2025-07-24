'use client'

import React, { useState } from 'react'

import HeroSection from '../../landing-page/HeroSection'
import StatsSection from './StatsSection'
import ContactUs from '../../landing-page/ContactUs'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

const VolunteerWrapper = ({ slides }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])

  const volunteers = [
    {
      id: 1,
      name: 'Jhon Smith',
      location: 'Jakarta',
      category: 'Pendidikan',
      joinDate: 'Februari 2025',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Jhon Smith',
      location: 'Jakarta',
      category: 'Pendidikan',
      joinDate: 'Februari 2025',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Jhon Smith',
      location: 'Jakarta',
      category: 'Pendidikan',
      joinDate: 'Februari 2025',
      avatar: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Jhon Smith',
      location: 'Jakarta',
      category: 'Pendidikan',
      joinDate: 'Februari 2025',
      avatar: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Jhon Smith',
      location: 'Jakarta',
      category: 'Pendidikan',
      joinDate: 'Februari 2025',
      avatar: '/placeholder.svg'
    }
  ]

  const categories = ['Pendidikan', 'Sejarah', 'Teknologi']

  const toggleFilter = category => {
    setSelectedFilters(prev => (prev.includes(category) ? prev.filter(f => f !== category) : [...prev, category]))
  }

  const properties = {
    volunteers,
    categories,
    searchTerm,
    setSearchTerm,
    selectedFilters,
    toggleFilter
  }

  return (
    <div className='bg-backgroundPaper'>
      <HeroSection slides={slides} />
      <StatsSection />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-8 p-5 shadow-lg'>
          <Sidebar sidebarProps={properties} />
          <MainContent MainProps={properties} />
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

export default VolunteerWrapper
