import { Link } from "react-router-dom";
import { Box } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const albumDefaultImage = 'https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg'

const Details = ({ info }) => {
    return (
        <Box sx={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {info.images &&
                <Box
                    component="div"
                    sx={{
                        width: '230px',
                        height: '230px',
                        position: 'relative',
                        backgroundColor: '#333',
                        boxShadow: '0 4px 60px rgb(0 0 0 / 50%)',
                        borderRadius: info.type === 'artist' ? '50%' : '4px',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        component="img"
                        src={info.images[0] ? info.images[0].url : albumDefaultImage}
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: '0',
                            left: '0',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                            borderRadius: info.type === 'artist' ? '50%' : '4px'
                        }}
                    />
                </Box>
            }
            <Box sx={{
                maxHeight: '230px',
                height: '230px',
                display: 'flex',
                flexDirection: "column",
                justifyContent: info.name?.length > 20 ? "flex-end" : "space-between",
                flexWrap: "nowrap",
                gap: '2.5rem'
            }}>
                <Box mt={1}
                    sx={{
                        fontSize: '.9rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        display: 'flex', alignItems: 'center'
                    }}>
                    {info.type === 'artist' ? <IconChecked /> : info.type}
                </Box>
                <Box sx={{
                    fontSize: info.name?.length > 15 ? '2.5rem' : '5.5rem',
                    fontWeight: '700',
                    letterSpacing: '-0.04em'
                }}>
                    {info.name}
                </Box>
                <Box sx={{ color: 'white', fontWeight: '500', fontSize: '.9rem' }}>
                    {info.label && <Box mb={1}>{info.label}</Box>}
                    {info.followers && <Box mb={1}>{info.followers} người nghe hàng tháng</Box>}
                    {info.artists?.map((artist) => (
                        <Artists artist={artist} />
                    ))}
                    {(info.totalTracks && info.totalTime) &&
                        <Box component="span">
                            <Box component="span">{info.totalTracks} bài hát, </Box>
                            <Box component="span" sx={{ color: '#b3b3b3' }}>
                                {info.totalTime}.
                            </Box>
                        </Box>
                    }
                    {info.album?.name &&
                        <Box component="span" sx={{ color: '#b3b3b3' }}>
                            Album: {info.album?.name}
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}

const Artists = ({ artist }) => {
    return (
        <Box sx={{ display: 'inline' }}>
            <Box
                component={Link}
                to={`/artist/${artist.id}`}
                sx={{ color: 'white', textDecoration: 'none' }}
            >
                {artist.name}
            </Box>
            <FiberManualRecordIcon sx={{ fontSize: '8px', mx: '4px' }} />
        </Box>
    )
}
const IconChecked = () => {
    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'left', gap: '8px'
        }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z" fill="#2E77D0"></path><path d="M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 7.2135-8.44649-.57-.48675z" fill="#fff"></path>
            </svg>
            <Box sx={{ textTransform: 'none', fontWeight: '500', fontSize: '.9rem' }}>Nghệ sĩ được xác minh</Box>
        </Box>
    )
}
export default Details;