import NextHead from 'next/head'
import PropTypes from 'prop-types'


const Head = ({title}) => {
    return (
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    )
}

Head.propTypes = {
    title: PropTypes.string.isRequired
}

export default Head