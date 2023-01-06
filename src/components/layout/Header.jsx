import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material'
import { useHistory } from 'react-router-dom'
import UserOptions from '../user/UserOptions'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Header = (props) => {
    const history = useHistory();
    const [onScroll, setOnScroll] = useState(false)
    useEffect(() => {
        const content = document.querySelector('.container__content')
        content.addEventListener('scroll', () => {
            setOnScroll(content.scrollTop > 50)
        })
    }, [])
    return (
        <Grid container
            className={onScroll ? 'header__on-scroll' : ''}
            sx={{
                width: { sm: '100%', },
                left: { sm: '270px' },
                '&.header__on-scroll': {
                    width: { md: 'calc(100% - 270px)', },
                    left: { sx: '0', md: '270px' },
                },
                zIndex: '99',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                padding: '12px 24px',
                gap: '1.5rem'
            }}>
            <Grid item>
                <Grid container sx={{ gap: '8px' }}>
                    <Grid item >
                        <ButtonRedirect event={history.goBack}>
                            <ArrowBackIosNewIcon sx={{ fontSize: '1.25rem' }} />
                        </ButtonRedirect>
                    </Grid>
                    <Grid item >
                        <ButtonRedirect event={history.goForward} >
                            <ArrowForwardIosIcon sx={{ fontSize: '1.25rem' }} />
                        </ButtonRedirect>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{ flex: '1' }}>{props.children}</Grid>
            <Grid item> < UserOptions /></Grid>
        </Grid >
    )
}
const ButtonRedirect = props => {
    return (
        <Box onClick={props.event}
            sx={{
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,.7)',
                color: 'white',
                width: '36px',
                height: '36px',
                position: 'relative',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                    backgroundColor: 'rgba(0,0,0,.5)',
                },
                '.header__on-scroll &': {
                    backgroundColor: 'rgba(255,255,255,.2)',
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,.4)',
                    }
                }
            }}>
            {props.children}
        </Box>
    )
}
export default Header