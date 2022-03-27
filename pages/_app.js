import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { Layout } from 'antd';

const { Header,Footer,Slider,Content } = Layout;

import '../styles/main.css'

export default function App({ Component, pageProps }) {
  console.log(pageProps);
  const YEAR = new Date().getFullYear();
  return (
   <div className="page">
     <Header className="header">
       <img src="/images/logo.jpg"
          alt="logo"
          width="auto"
          className="logo" />
        <h1 style={{display: 'inline-block'}}>胡萝卜的博客</h1>
      </Header>
      <Content style={{ flex: 1 }}>
        <Component {...pageProps} />
      </Content>
      <Footer className="footer">
        <footer>
          <small>
            <time>{YEAR}</time> © 胡萝卜.
            <a href="/feed.xml">RSS</a>
          </small>
          <style jsx>{`
            footer {
            }
            a {
              float: right;
            }
          `}</style>
          </footer>
        </Footer>
   </div>
  )
}