import React from 'react'
import { IRouteComponentProps } from 'umi'
import { Layout } from 'antd'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SiderComponents from '@/components/Sider'
import Sider from 'antd/lib/layout/Sider'
import style from './style.less'

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
    console.log(location, route, history, match)
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <div className={style.layout_box}>
                    <div className={style.layout_box_left}>
                        <SiderComponents />
                    </div>
                    <div className={style.layout_box_right}>123123</div>
                </div>
            </Layout>
            <Footer />
        </Layout>
    )
}