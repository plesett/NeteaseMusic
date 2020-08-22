import React from 'react';
import style from './style.less'
import { Row, Col, Slider } from 'antd';
import { StepBackwardOutlined, StepForwardOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import { connect, Loading, Dispatch, ConnectProps } from 'umi';
import { IndexModelState } from '@/models/index'

const iconFont: React.CSSProperties = {
	fontSize: '20px',
	color: '#ffffff'
}

interface IFooterPagePros extends Partial<ConnectProps> {
	global: {
		play: boolean
	};
	dispatch: Dispatch
}

interface IFooterPageState {
	SliderNum: number
}

class Footer extends React.Component<IFooterPagePros, IFooterPageState> {

	constructor(props: any) {
		super(props)
		this.state = {
			SliderNum: 0
		}
	}

	render() {
		const { dispatch, global } = this.props;
		const { SliderNum } = this.state;
		const { play } = global;
		return (
			<Row align="middle" className={style.swtch_bottom}>
				<Col span={24} className={style.footer_box}>
					<Col className={style.footer_left_play}>
						<div className={style.footer_switch}>
							<StepBackwardOutlined style={iconFont} />
						</div>
						<div className={style.footer_switch} onClick={() => dispatch({ type: 'global/switchPlay' })}>
							{
								!play ? <PauseOutlined style={iconFont} /> : <CaretRightOutlined style={iconFont} />
							}
						</div>
						<div className={style.footer_switch}>
							<StepForwardOutlined style={iconFont} />
						</div>
					</Col>
					<Col pull={2} className={style.Progress}>
						<span>00:00</span>
						<div style={{ width: '90%' }}>
							<Slider
								value={SliderNum}
								disabled={false}
								onChange={(value: number) => this.setState({ SliderNum: value })}
							/>
						</div>
						<span>03:24</span>
					</Col>
					<Col>6666</Col>
				</Col>
			</Row>
		)
	}

}

export default connect(({ global }: { global: IndexModelState }) => ({
	global
}))(Footer);
