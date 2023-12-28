import { Viewer } from '@bytemd/react';

import { sanitize } from './config';
import { tocPlugin } from './plugin';
import { useByteMD } from './use-bytemd';

type Props = {
  content: string;
};

// 实现目录功能，参考了这个 Issue：https://github.com/pd4d10/hashmd/issues/126
export function BytemdViewer({ content }: Props) {
  const { plugins } = useByteMD();
  return (
    <Viewer
      value={content}
      plugins={[...plugins, tocPlugin()]}
      sanitize={sanitize}
    />
  );
}
