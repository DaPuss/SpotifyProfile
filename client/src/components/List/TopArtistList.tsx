import { Grid } from '@mui/material'
import { Artist, querylength } from '../../api/types'
import { useFetchTopArtists } from '../../api/useFetchTopArtists'
import List from './List'
import ArtistListItem from './ListItems/ArtistListItem'

interface Props {
    isPageView: boolean
    variant: querylength
    limit?: number
}

const TopArtistList = ({ isPageView, variant, limit }: Props) => {
    const { data: topArtists, isLoading: isTopArtistsLoading } =
        useFetchTopArtists(variant, limit)

    return (
        <>
            {isPageView ? (
                <Grid container>
                    {topArtists &&
                        topArtists.items.map((item: Artist, index: number) => (
                            <Grid
                                xs={6}
                                sm={4}
                                md={3}
                                lg={2}
                                key={`dhb_tp_art_${index}`}
                            >
                                <ArtistListItem
                                    isGrid={isPageView}
                                    item={item}
                                />
                            </Grid>
                        ))}
                </Grid>
            ) : (
                <List
                    seeMoreRoute="/artists"
                    title="Top Artists of All Time"
                    isPageView={isPageView}
                    isLoading={isTopArtistsLoading}
                >
                    {topArtists &&
                        topArtists.items
                            .slice(0, 10)
                            .map((item: Artist, index: number) => (
                                <ArtistListItem
                                    isGrid={isPageView}
                                    key={`dhb_tp_art_${index}`}
                                    item={item}
                                />
                            ))}
                </List>
            )}
        </>
    )
}

export default TopArtistList
