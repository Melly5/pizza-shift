import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props: any) => {

  return (
    <ContentLoader
      speed={2}
      width={346}
      height={503}
      viewBox='0 0 346 503'
      backgroundColor='#ededed'
      foregroundColor='#cccccc'
      {...props}
    >
      <circle cx='164' cy='152' r='110' />
      <rect x='28' y='283' rx='6' ry='6' width='164' height='28' />
      <rect x='28' y='321' rx='5' ry='5' width='290' height='85' />
      <rect x='28' y='432' rx='7' ry='7' width='75' height='32' />
      <rect x='168' y='418' rx='26' ry='26' width='143' height='48' />
      <rect x='261' y='290' rx='3' ry='3' width='52' height='14' />
    </ContentLoader>
  );
};
