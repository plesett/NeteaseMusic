import React from 'react';
import style from './style.less'
import { Col, Row } from 'antd';
import { Link } from 'umi';

interface IRecommendedCardProps {
  title?: string;   // 标题文本
  titleSwitch?: boolean;  // 是否显示标题
  firstCard?: boolean;  // 是否显示第一张卡片
  firstCardDate?: object; // 第一张图片数据
  data?: Array<any>;   // 后续应更换为 object<{...}>
}

class RecommendedCard extends React.Component<IRecommendedCardProps> {
  render() {
    const { title, titleSwitch = false } = this.props;
    return (
      <>
        <Row className={style.RecommendedCard}>
          <Col>
            <p className={style.title}>{titleSwitch && title}</p>
          </Col>
        </Row>
        <Row className={style.ItemBox} justify="start">
          {/* 每日推荐 */}
          <Link to="/day/">
            <Col className={style.ItemCard}>
              <div className={style.week}>星期一</div>
              <h3>24</h3>
            </Col>
            <span>每日歌曲推荐</span>
          </Link>
          {/* end */}

          <Link to="">
            <Col className={style.ItemCard}>
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4077578665,593929923&fm=26&gp=0.jpg" alt="" />
            </Col>
            <span>一起听，秋天适合思恋一起听，秋天适合思恋</span>
          </Link>

        </Row>
      </>
    )
  }
}

export default RecommendedCard;