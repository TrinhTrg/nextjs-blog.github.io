import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Lấy danh sách tên file trong /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    // Đọc nội dung file markdown
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Dùng gray-matter để parse metadata
    const matterResult = matter(fileContents);

    // Trả về object chứa id + metadata
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sắp xếp bài viết theo ngày (mới nhất trước)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Trả về dạng:
  // [
  //   { params: { id: 'ssg-ssr' } },
  //   { params: { id: 'pre-rendering' } }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
// export function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Dùng gray-matter để tách phần metadata
//   const matterResult = matter(fileContents);

//   // Gộp dữ liệu lại với id
//   return {
//     id,
//     ...matterResult.data,
//   };
// }
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Dùng gray-matter để lấy metadata
  const matterResult = matter(fileContents);

  // Dùng remark để chuyển Markdown thành HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Trả về dữ liệu kèm id và nội dung HTML
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

