import Lottie from 'lottie-react';
import LoadingData from '~/assets/loading.json';

export function Loading() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Lottie animationData={LoadingData} style={{ width: 300, height: 300 }} />;
    </div>
  );
}
