import { NextApiRequest, NextApiResponse } from 'next'
import json from '../../public/post.json';

// https://nextjs.org/docs/api-routes/introduction
// post/api/ 文件夹自动转化成API格式，必须按照以下的方式来处理，返回内容JSON
export default function handler(req, res) {
  const { q } = req.query;
  if (!q) {
    res.status(400).json({ error: 'q is required for searching posts' });
  } else {
    const postList = json.posts;
    const filteredPost = postList.filter(post => {
      const lq = q.toLowerCase();
      const { title, description = '', content = '' } = post;
      return title.toLowerCase().includes(lq) || description.toLowerCase().includes(lq) || content.toLowerCase().includes(lq);
    });
    filteredPost.forEach(p => delete p.content);
    res.status(200).json(filteredPost);
  }
}

