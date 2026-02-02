import type { ChildrenType } from '@/types';
import { Suspense } from 'react';

const BaseLayout = ({ children }: ChildrenType) => {
    return <Suspense fallback={<div />}>{children}</Suspense>;
};

export default BaseLayout;
