import { useBoolean, useMemoizedFn, useMount, useUnmount } from 'ahooks';
import { ArrowBigUpDashIcon } from 'lucide-react';

import { cn } from '@/libs';

import { Button } from '../button';

export default function BackToTop() {
  const [visible, { setFalse, setTrue }] = useBoolean(false);

  const handleScroll = useMemoizedFn(() => {
    if (window.document.documentElement.scrollTop > 100) {
      setTrue();
    } else {
      setFalse();
    }
  });

  useMount(() => {
    window.document.addEventListener('scroll', handleScroll);
  });

  useUnmount(() => {
    window.document.removeEventListener('scroll', handleScroll);
  });

  return (
    <Button
      className={cn('fixed bottom-10 right-10', !visible && 'hidden')}
      size={'icon'}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <ArrowBigUpDashIcon size={24} />
    </Button>
  );
}
