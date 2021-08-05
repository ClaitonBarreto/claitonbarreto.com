import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: process.env.DATOCMS_API_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
        'Authorization': process.env.DATOCMS_API_TOKEN
    }
})

export default client