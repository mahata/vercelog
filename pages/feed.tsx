import {GetServerSidePropsContext} from 'next'
import {generateFeed} from '../libs/feed'

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateFeed()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate') // Cache for an hour
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {},
  }
}

const Page = () => null
export default Page
