export interface ExternalUrls {
    spotify: string
}

export interface Followers {
    href?: any
    total: number
}

export interface Image {
    height: number
    url: string
    width: number
}

export interface Image {
    height: number
    url: string
    width: number
}

export interface ExternalIds {
    isrc: string
}

export interface Album {
    album_type: string
    artists: Artist[]
    available_markets: string[]
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

export interface Track {
    album: Album
    artists: ArtistOnTrack[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds
    external_urls: ExternalUrls
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
}

export interface RecentTrackItem {
    track: Track
}

export interface Artist {
    external_urls: ExternalUrls
    followers: Followers
    genres: string[]
    href: string
    id: string
    images: Image[]
    name: string
    popularity: number
    type: string
    uri: string
}

export interface Owner {
    display_name: string
    external_urls: ExternalUrls
    href: string
    id: string
    type: string
    uri: string
}

export interface Tracks {
    href: string
    total: number
}

export interface Playlist {
    collaborative: boolean
    description: string
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[]
    name: string
    owner: Owner
    primary_color?: any
    public: boolean
    snapshot_id: string
    tracks: Tracks
    type: string
    uri: string
}

export interface ArtistOnTrack {
    external_urls: ExternalUrls
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export interface AddedBy {
    external_urls: ExternalUrls
    href: string
    id: string
    type: string
    uri: string
}

export interface PlaylistItem {
    added_at: Date
    added_by: AddedBy
    is_local: boolean
    primary_color?: any
    track: Track
    video_thumbnail: VideoThumbnail
}

export interface VideoThumbnail {
    url?: any
}

export interface QueryRootUser {
    display_name: string
    external_urls: {
        spotify: string
    }
    followers: { href: null; total: number }
    href: string
    id: string
    images: { height: number; url: string; width: number }[]
    type: string
    uri: string
}

export interface QueryRootPlaylistTracks {
    href: string
    items: PlaylistItem[]
    limit: number
    next: string
    offset: number
    previous?: any
    total: number
}

export interface QueryRootTracks {
    items: Track[]
    total: number
    limit: number
    offset: number
    href: string
    previous?: any
    next: string
}

export interface QueryRootArtists {
    items: Artist[]
    total: number
    limit: number
    offset: number
    href: string
    previous?: any
    next: string
}

export interface QueryRootPlaylist {
    href: string
    items: Playlist[]
    limit: number
    next: string
    offset: number
    previous?: any
    total: number
}

export interface QueryRootFollowing {
    href: string
    items: any[]
    limit: number
    next: string
    cursors: {
        after: string
    }
    total: number
}
export interface TrackFeatures {
    danceability: number
    energy: number
    key: number
    loudness: number
    mode: number
    speechiness: number
    acousticness: number
    instrumentalness: number
    liveness: number
    valence: number
    tempo: number
    type: string
    id: string
    uri: string
    track_href: string
    analysis_url: string
    duration_ms: number
    time_signature: number
}

export interface Meta {
    analyzer_version: string
    platform: string
    detailed_status: string
    status_code: number
    timestamp: number
    analysis_time: number
    input_process: string
}

export interface Track {
    num_samples: number
    duration: number
    sample_md5: string
    offset_seconds: number
    window_seconds: number
    analysis_sample_rate: number
    analysis_channels: number
    end_of_fade_in: number
    start_of_fade_out: number
    loudness: number
    tempo: number
    tempo_confidence: number
    time_signature: number
    time_signature_confidence: number
    key: number
    key_confidence: number
    mode: number
    mode_confidence: number
    codestring: string
    code_version: number
    echoprintstring: string
    echoprint_version: number
    synchstring: string
    synch_version: number
    rhythmstring: string
    rhythm_version: number
}

export interface Bar {
    start: number
    duration: number
    confidence: number
}

export interface Beat {
    start: number
    duration: number
    confidence: number
}

export interface Section {
    start: number
    duration: number
    confidence: number
    loudness: number
    tempo: number
    tempo_confidence: number
    key: number
    key_confidence: number
    mode: number
    mode_confidence: number
    time_signature: number
    time_signature_confidence: number
}

export interface Segment {
    start: number
    duration: number
    confidence: number
    loudness_start: number
    loudness_max_time: number
    loudness_max: number
    loudness_end: number
    pitches: number[]
    timbre: number[]
}

export interface Tatum {
    start: number
    duration: number
    confidence: number
}

export interface TrackAnalysis {
    meta: Meta
    track: Track
    bars: Bar[]
    beats: Beat[]
    sections: Section[]
    segments: Segment[]
    tatums: Tatum[]
}

export type querylength = 'short_term' | 'medium_term' | 'long_term'

export type Filters = Record<querylength, string>

export const filters: Filters = {
    long_term: 'All Time',
    medium_term: 'Last 6 Months',
    short_term: 'Last Month',
}
