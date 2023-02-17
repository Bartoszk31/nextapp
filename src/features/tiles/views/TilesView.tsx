import React from 'react'
import { Divider } from '@mui/material'

import MainLayout from '@/layouts/main/MainLayout'
import TilesPageWrapper from '@/features/tiles/components/TilesPageWrapper'
import SearchBar from '@/features/tiles/components/SearchBar'
import TilesSection from '@/features/tiles/components/TilesSection'
import PaginationSection from '@/features/tiles/components/PaginationSection'

const TilesView = () => (
  <MainLayout title="Tile list">
    <TilesPageWrapper>
      <SearchBar />
      <Divider />
      <TilesSection />
      <Divider />
      <PaginationSection />
    </TilesPageWrapper>
  </MainLayout>
)

export default TilesView
