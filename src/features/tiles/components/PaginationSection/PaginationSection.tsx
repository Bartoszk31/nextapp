import React, { FunctionComponent } from 'react'
import { Pagination } from '@mui/material'

import { PaginationSectionWrapper } from './PaginationSection.styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setPage } from '@/features/tiles/reducers/tilesSlice'
import { ITEMS_PER_PAGE } from '@/features/tiles/constants'

const PaginationSection: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const { page, totalCount } = useAppSelector(state => state.tiles)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  }

  return (
    <PaginationSectionWrapper>
      <Pagination
        count={Math.ceil(totalCount / ITEMS_PER_PAGE)}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={handleChange}
        page={page}
      />
    </PaginationSectionWrapper>
  )
}

export default PaginationSection
