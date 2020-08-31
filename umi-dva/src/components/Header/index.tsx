import React from 'react';
import style from './style.less'
import { Row, Col, Input, Avatar } from 'antd';
import { LeftOutlined, RightOutlined, SearchOutlined, UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'umi';

const iconColor: React.CSSProperties = {
    color: '#f5f5f5'
}

class Header extends React.Component {
    render() {
        return (
            <>
                <Row className={style.Warp_header}>
                    <Col flex="600px" xs={7}>
                        <Col span={12} className={style.top_warp_left}>
                            <Link to="/" className={style.logo_box}>
                                <img src={require('@/static/images/wy_logo.png')} alt="" />
                            </Link>
                            <div className={style.logo_info_search}>
                                <div className={style.icon_direction}>
                                    <div className={style.icon_left}>
                                        <LeftOutlined style={iconColor} />
                                    </div>
                                    <div className={style.icon_right}>
                                        <RightOutlined style={iconColor} />
                                    </div>
                                </div>
                                <div className={style.search_box}>
                                    <Input className={style.search_music} placeholder="搜索音乐音乐，视频，歌词，电台" />
                                    <SearchOutlined />
                                </div>
                            </div>
                        </Col>
                    </Col>
                    <Col flex="auto" style={{ lineHeight: '3' }}>
                        <Col style={{ float: 'right', marginRight: '20px' }}>
                            <div className={style.logo_info}>
                                <Avatar size={25} icon={<UserOutlined />} />
                                <span className={style.logo_Not}>未登录</span>
                                <CaretDownOutlined style={{ color: "#e2e2e2" }} />
                                <span>开通VIP</span>
                                <img className={style.yf_icon} src={require('@/static/images/yf.png')} alt="" />
                                <img className={style.yf_icon} src={require('@/static/images/dx.png')} alt="" />
                                <img className={style.yf_icon} src={require('@/static/images/cl.png')} alt="" />
                            </div>
                        </Col>
                    </Col>
                </Row>
                <div className={style.openHe}></div>
            </>
        )
    }
}

export default Header;