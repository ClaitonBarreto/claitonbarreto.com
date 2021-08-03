import { useEffect, useState } from 'react'
import axios from 'axios'

import * as S from './styles'

const ProfilePhoto = () => {

    const [photoUrl, setPhotoUrl] = useState('')

    useEffect(() => {
        (async() => {
            const response = await axios.get('https://api.github.com/users/claitonbarreto')

            setPhotoUrl(response.data.avatar_url)
        })()
    })

    return (
        <S.Photo 
            src={photoUrl}
        />
    )

}

export default ProfilePhoto