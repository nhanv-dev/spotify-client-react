import { Box, Grid } from '@mui/material'
import CardSection from '../components/sections/CardSection'
// import MainCard from '../components/cards/MainCard'
const Playlist = ({ items }) => {

    return (
        <Box>
            <Grid item xl={2} lg={3} md={4} sm={6}>
                {/* <MainCard item={items[0]} /> */}
            </Grid>
            {items && <CardSection items={items} title="Playlist" />}
        </Box >
    )
}
export default Playlist;


