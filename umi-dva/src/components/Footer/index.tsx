import React from 'react';
import style from './style.less'
import { Row, Col } from 'antd';
import { StepBackwardOutlined, StepForwardOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';

const iconFont: React.CSSProperties = {
    fontSize: '20px',
    color: '#ffffff'
}

class Footer extends React.Component {
    render() {
        return (
            <Row align="middle">
                <Col span={24} className={style.footer_box}>
                    <div className={style.footer_left_play}>
                        <div>
                            <StepBackwardOutlined style={iconFont} />
                        </div>
                        <div>
                            {/* <PauseOutlined style={iconFont} /> */}
                            <CaretRightOutlined style={iconFont} />
                        </div>
                        <div>
                            <StepForwardOutlined style={iconFont} />
                        </div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                </Col>
            </Row>
        )
    }
}

export default Footer;