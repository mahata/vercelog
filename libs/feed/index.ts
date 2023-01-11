import { Feed } from 'feed'
import {siteTitle, baseUrl} from "@/components/layout";
import {getPostData, getSortedPostsData} from "../../lib/posts";

export const generateFeed = async () => {

  const feed = new Feed({
    title: siteTitle,
    description: '',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    copyright: `Yasunori MAHATA`,
    updated: new Date(), // TODO: 記事の最終更新日に変更
    feed: `${baseUrl}/feed`,
  })

  const posts = getSortedPostsData()

  for (const post of posts) {
    const { contentHtml } = await getPostData(post.id)
    feed.addItem({
      title: post.title,
      description: contentHtml,
      content: contentHtml,
      // id: post.id,
      link: `${baseUrl}/posts/${post.id}`,
      date: new Date(post.date),
    })
  }

  return feed.rss2()
}
