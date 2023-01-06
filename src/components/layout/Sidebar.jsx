import { Link, NavLink } from 'react-router-dom'
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material'
import { Home, Search, LibraryMusic, AddBoxSharp, FavoriteSharp, ArrowCircleDown } from '@mui/icons-material';
import Logo from '../../assets/images/logo-white.png'
import UserPlaylist from '../user/UserPlaylist'
export default function Sidebar() {
    return (
        <Box className='sidebar'>
            <Box sx={{ px: 2 }}>
                <List >
                    <ListItem sx={{ mb: 1 }} className='sidebar__logo' component={Link} to='/'>
                        <img src={Logo} alt='Spotify' />
                    </ListItem>
                    <ItemLink url='/'>
                        <Home />
                        <ListItemText primary="Trang chủ" />
                    </ItemLink>
                    <ItemLink url='/search'>
                        <Search />
                        <ListItemText primary="Tìm kiếm" />
                    </ItemLink>
                    <ItemLink url='/collection/' exact='false'>
                        <LibraryMusic />
                        <ListItemText primary="Thư viện" />
                    </ItemLink>
                </List>
                <List >
                    <ItemLink url='/playlist/'>
                        <AddBoxSharp />
                        <ListItemText primary="Tạo playlist" />
                    </ItemLink>
                    <ItemLink url='/collection/tracks'>
                        <FavoriteSharp />
                        <ListItemText primary="Bài hát đã thích" />
                    </ItemLink>
                </List>
                <Divider variant="fullWidth" />
            </Box>
            <UserPlaylist />
            <Box sx={{ px: 2, pb: 1 }} >
                <ListItem className="sidebar__items__link" component={Link} to='/download' >
                    <ArrowCircleDown /><span> Cài đặt ứng dụng</span>
                </ListItem >
            </Box>
        </Box >
    )
}

const ItemLink = (props) => {
    return (
        <ListItem
            sx={{
                transition: 'all .2s ease'
            }}
            className='sidebar__items__link'
            component={NavLink}
            to={props.url}
            activeClassName='active'
            exact={props.exact ?? true}
        >
            {props.children}
        </ListItem>
    )
}