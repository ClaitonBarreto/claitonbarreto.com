import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import * as S from './styles'

const ProfilePhoto = () => {

    const { pathname } = useRouter()

    const [photoUrl, setPhotoUrl] = useState('')
    const [photoWidth, setPhotoWidth] = useState('10%')

    useEffect(() => {
        (async() => {
            const response = await axios.get('https://api.github.com/users/claitonbarreto')

            setPhotoUrl(response.data.avatar_url)
        })()
    }, [])

    useEffect(() => {
        if(pathname !== '/')
            setPhotoWidth('10%')
    }, [pathname])

    return (
        <S.Photo 
            src={photoUrl}
            width={photoWidth}
            photoWidth={photoWidth}
        />
    )

}

export default ProfilePhoto