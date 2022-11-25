// このファイルは書き直されるはず

import fs from 'fs';
import path from 'path';
import matter, {GrayMatterFile} from 'gray-matter';
// import * as matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

interface FrontMatter {
  title: string;
  date: string;
}

interface PostData extends FrontMatter {
  id: string;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    // TODO: date.title と date.date がないときにクラッシュするので、それをいい感じに skip する
    const { data } = matter(fileContents);
    const frontMatter: FrontMatter = {
      title: data.title,
      date: data.date,
    }

    // Combine the data with the id
    return {
      id,
      ...frontMatter,
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
