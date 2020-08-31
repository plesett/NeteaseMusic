import React from 'react';
import styles from './index.less';
import { Link, request, useRequest } from 'umi';
import { GetIndex } from '@/api';
import { Banner } from '@/components/Carousel';
import RecommendedCard from '@/components/RecommendedCard';
import { Row, Col } from 'antd';

export default () => {

  document.title = "网易云"

  const { data, error, loading }: { data: any, error: any, loading: boolean } = useRequest(() => {
    return GetIndex();
  });

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>请求错误</h1>;
  }
  return (
    <>
      <Banner />
      <RecommendedCard
        title="推荐歌单"
        titleSwitch={true}
      />
      <h1 className={styles.title}>Page index*------{data.msg}</h1>
    </>
  );
}
