const { promises: fs } = require('fs')
const path = require('path')
const matter = require('gray-matter')

async function generate() {
  const list = [];
  // 获取post下所以文件名称： eg [ 'export.md', 'git.md', 'index.md', 'markdown.md', 'next.md' ]
  const fileNames = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))
  // 读取文件内容的函数，异步函数
  const readMDPostFile = async (name) => {
    // index.md不需要读
    if (name.startsWith('index.')) return;

    // 读取内容
    const content = await fs.readFile(
      path.join(__dirname, '..', 'pages', 'posts', name)
    )
    const frontmatter = matter(content)

    list.push({
      title: frontmatter.data.title,
      url: '/posts/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.date,
      description: frontmatter.data.description,
      categories: frontmatter.data.tag.split(', '),
      author: frontmatter.data.author,
      content: frontmatter.content,
    });
  };

  for(let i = 0; i < fileNames.length; i ++) {
     await readMDPostFile(fileNames[i]);
  }

  await fs.writeFile('./public/post.json', JSON.stringify({ posts: list }));
}

generate()
