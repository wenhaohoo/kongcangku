import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { Layout } from 'antd';

const { Header,Footer,Content } = Layout;

import '../styles/main.css'

export default function App({ Component, pageProps }) {
  const YEAR = new Date().getFullYear();
  return (
   <div className="page">
     <Header className="header">
           <img src="/images/logo.jpg"
            alt="logo"
            width="auto"
            className="logo" />
            <h1 style={{display: 'inline-block'}}>胡萝卜的博客
            </h1>
      </Header>
      <div className="wrap">
         <div className="search">
            <input type="text" className="searchTerm" placeholder="你想找什么?" 
                   onKeyDown={(v) =>this.searchFunc(v)}/>
            <button type="submit" className="searchButton">Go
            </button>
        </div>
      </div>
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
