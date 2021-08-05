import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import * as S from './styles'

const ProfilePhoto = () => {

    const { pathname } = useRouter()

    const [photoUrl, setPhotoUrl] = useState('')
    const [photoWidth, setPhotoWidth] = useState('14%')

    useEffect(() => {
        (async() => {
            const response = await axios.get('https://api.github.com/users/claitonbarreto')

            setPhotoUrl(response.data.avatar_url)
        })()
    }, [])

    useEffect(() => {
        console.log(pathname)
        if(pathname !== '/')
            setPhotoWidth('10%')
    }, [pathname])

    return (
        <S.Photo 
            src={photoUrl}
            photoWidth={photoWidth}
        />
    )

}

export default ProfilePhoto