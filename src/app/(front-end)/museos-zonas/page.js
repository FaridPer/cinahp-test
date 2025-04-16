import {MuseosAPI} from './getMuseos'
import { Suspense } from 'react';
import FallbackPage from './fallback'

export default function Page() {
  return (
    <Suspense fallback={<FallbackPage/>}>
      <MuseosAPI />
    </Suspense>
  );
}
