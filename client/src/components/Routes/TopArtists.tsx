import { Container, Stack, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useState } from 'react'
import { filters, Filters, querylength } from '../../api/types'
import { makeStyles } from '../../utils/Theme'
import FilterButton from '../FilterButton'
import TopArtistList from '../List/TopArtistList'

const TopArtists = () => {
    const classes = useStyles().classes

    const [variant, setVariant] = useState<querylength>('long_term')

    return (
        <Container className={classes.container}>
            <Stack
                direction={{ sm: 'column', md: 'row' }}
                className={classes.headerContainer}
            >
                <Typography variant="h4">Top Artists</Typography>
                <Stack direction={'row'} className={classes.filterContainer}>
                    {(Object.keys(filters) as Array<keyof Filters>).map(
                        (key) => (
                            <FilterButton
                                key={key}
                                buttonText={filters[key]}
                                active={key == variant}
                                setFilter={() => setVariant(key)}
                            />
                        )
                    )}
                </Stack>
            </Stack>
            <Container>
                <TopArtistList variant={variant} isPageView={true} limit={48} />
            </Container>
        </Container>
    )
}
const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        minWidth: '75vw',
        '@media screen and (max-width: 600px)': { minWidth: '100vw' },
    },
    filterContainer: {
        marginLeft: 'auto',
        justifyContent: 'space-around',
        '@media screen and (max-width: 900px)': { marginLeft: 0 },
    },
    headerContainer: {
        padding: '2rem',
        '@media screen and (max-width: 900px)': {
            padding: '0 !important',
            paddingBottom: '2rem !important',
            paddingTop: '2rem !important',
        },
    },
}))
export default TopArtists
