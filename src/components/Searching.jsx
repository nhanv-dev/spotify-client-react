import React, { useState, useCallback, useMemo } from 'react'
import debounce from 'lodash.debounce'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

const Searching = (props) => {
    const [value, setValue] = useState('')
    const { handleSearchResults } = props
    const debouncedSearch = useMemo(
        () => debounce(value => {
            handleSearchResults(value)
        }, 650),
        [handleSearchResults]
    )

    const handleChange = useCallback(
        e => {
            setValue(e.target.value)
            debouncedSearch(e.target.value)
        },
        [debouncedSearch]
    )
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Tìm kiếm..."
                onChange={handleChange}
                defaultValue={value}
            />
        </Search>
    )
}

export default Searching

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    maxWidth: '350px',
    opacity: 1

}))
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        maxWidth: '350px'
    },
}))