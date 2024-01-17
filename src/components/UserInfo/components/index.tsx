import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonContainer } from './styles'

export function SkeletonLoading() {
  return (
    <SkeletonContainer>
      <div className="skeleton-header">
        <Skeleton height="30px" />
        <Skeleton />
      </div>
      <Skeleton className="skeleton-footer" />
    </SkeletonContainer>
  )
}
