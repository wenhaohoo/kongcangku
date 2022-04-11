import { useState } from 'react';
import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { Layout, Input } from 'antd';
import 'antd/dist/antd.css';
import { SearchPosts } from '../utils/httpClient';

const { Search } = Input;

const { Header,Footer,Content } = Layout;

import '../styles/main.css';

export function SearchInput() {
  // 添加一个react状态，loading，用来表示搜索正在进行
  const [loading, setLoading] = useState(false);
  // 添加一个react状态，posts，用来表示搜到的posts, 默认空
  const [posts, setPosts] = useState([]);

  const handleSearch = async (value) => {
    const posts = await SearchPosts(value);
    setPosts(posts.data);
  };

  return (
    <div>
      <Search placeholder="你想找什么?" onSearch={handleSearch} style={{ width: 200 }} />
      {posts.map(p => {
        return <div><a href={p.url}>{p.title}</a></div>;
      })}
    </div>
  );
}

export default function App({ Component, pageProps }) {
  const YEAR = new Date().getFullYear();

  return (
    <div className="page">
      <Header className="header">
        <img src="/images/logo.jpg"
          alt="logo"
          width="auto"
          className="logo"
        />
        <h1 style={{display: 'inline-block'}}>胡萝卜的博客</h1>
      </Header>
      <SearchInput />
      <Content style={{ flex: 1 }}>
        <Component {...pageProps} />
      </Content>
      <Footer className="footer">
        <footer>
          <small>
            <time>{YEAR}</time> © 胡萝卜.
            <a href="/feed.xml" style={{float:'right'}}>RSS</a>
          </small>
        </footer>
        </Footer>
   </div>
  )
}
