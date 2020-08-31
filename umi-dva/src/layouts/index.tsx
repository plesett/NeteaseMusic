import React from 'react'
import { IRouteComponentProps } from 'umi'
import { Layout, Row, Col } from 'antd';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SiderComponents from '@/components/Sider'
import style from './style.less'
import MenuTab from '@/components/MenuTab';

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
	console.log(location.pathname, route, history, match)
	return (
		<Layout>
			<Header />
			<Layout>
				<div className={style.layout_box}>
					<Row style={{ width: '100%' }}>

						<Col span={3} md={3} className={style.Sider_box}>
							<SiderComponents />
						</Col>

						<Col span={21} className={style.content}>
							{/* 内容模块 */}
							{
								location.pathname !== '/day/' && <MenuTab />
							}
							<Row justify="center">
								<Col span={24}>
									<Row justify="center">
										<Col span={15}>{children}</Col>
									</Row>
								</Col>
							</Row>
						</Col>

					</Row>
				</div>
			</Layout>
			<Footer />
		</Layout>
	)
}
