import Lottie from 'lottie-react';
import LoadingData from '~/assets/loading.json';

export function Loading() {
  return <Lottie animationData={LoadingData} style={{ width: 300, height: 300 }} />;
}
