import React from 'react'
import { IRouteComponentProps } from 'umi'
import { Layout } from 'antd'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
    console.log(location, route, history, match)
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <div>left</div>
                <div>content</div>
            </Layout>
            <Footer />
        </Layout>
    )
}