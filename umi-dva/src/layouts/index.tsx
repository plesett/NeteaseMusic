import React from 'react'
import { IRouteComponentProps } from 'umi'
import { Layout, Row, Col } from 'antd';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SiderComponents from '@/components/Sider'
import Sider from 'antd/lib/layout/Sider'
import style from './style.less'
import MenuTab from '@/components/MenuTab';

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
	console.log(location, route, history, match)
	return (
		<Layout>
			<Header />
			<Layout>
				<div className={style.layout_box}>
					<Row style={{ width: '100%' }}>
						<Col span={3} md={3} className={style.Sider_box}>
							<SiderComponents />
						</Col>
						<Col
							span={21}
							className={style.content}
						>
							<MenuTab />
							<Row
								justify="center"
							>
								<Col span={15}>
									<div className={style.layout_box_right_content}>
										{children}
									</div>
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
