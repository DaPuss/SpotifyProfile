import { Container, Stack, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '../../utils/Theme'
import Button from '../Button'
import Loading from '../Routes/Loading'
interface Props {
    title: string
    isPageView: boolean
    isLoading: boolean
    seeMoreRoute: string
    children: React.ReactNode
}
const List = ({
    title,
    isPageView,
    isLoading,
    seeMoreRoute,
    children,
}: Props) => {
    const classes = useStyles().classes
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    return (
        <Container>
            {!isPageView && (
                <Stack direction="row" className={classes.headerContainer}>
                    <Typography variant="subtitle1" className={classes.title}>
                        {title}
                    </Typography>
                    <Button
                        className={classes.seeMoreButton}
                        variant="secondary"
                        onClick={() => navigate(seeMoreRoute)}
                    >
                        See More
                    </Button>
                </Stack>
            )}

            {children}
        </Container>
    )
}

const useStyles = makeStyles()((theme: Theme) => ({
    headerContainer: {
        alignItems: 'center',
        gap: '4rem',
    },
    seeMoreButton: {
        marginLeft: 'auto',
        whiteSpace: 'nowrap',
    },
    container: {
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    image: {
        borderRadius: 320,
        width: 150,
        height: 150,
    },
    userName: {
        fontWeight: 600,
    },
    statContainer: {
        textAlign: 'center',
    },
    statHeader: {
        fontWeight: 600,
        color: '#818181',
    },
    statValue: {
        color: '#1ed760',
    },
    title: {
        fontWeight: 600,
    },
}))

export default List
