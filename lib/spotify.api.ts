import { Buffer } from 'buffer'
import querystring from 'querystring'

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

export interface PlayingNowPayload {
  album: string
  albumImageUrl: string
  isPlaying?: boolean
  songUrl: string
  title: string
  artist: string
}

export const getAccessToken = async (
  client_id: string,
  client_secret: string,
  refresh_token: string
) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getNowPlaying = async (
  client_id: string,
  client_secret: string,
  refresh_token: string
) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  )

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  })
}

export const getRecentPlaying = async (
  client_id: string,
  client_secret: string,
  refresh_token: string
) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  )

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  })
}

export default async function getNowPlayingItem(
  client_id: string,
  client_secret: string,
  refresh_token: string
): Promise<PlayingNowPayload> {
  const response = await getNowPlaying(client_id, client_secret, refresh_token)
  if (response.status === 204 || response.status > 400) {
    const subRes = await getRecentPlaying(
      client_id,
      client_secret,
      refresh_token
    )

    const songs = await subRes.json()

    const song = songs.items[0]

    console.log('song: ', song.track.album.name)

    const isPlaying = false
    const title = song.track.name
    const artist = song.track.artists.map((_artist) => _artist.name).join(', ')
    const album = song.track.album.name
    const albumImageUrl = song.track.album.images[0].url
    const songUrl = song.track.external_urls.spotify

    return {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }
  }

  const song = await response.json()

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  return {
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  }
}
