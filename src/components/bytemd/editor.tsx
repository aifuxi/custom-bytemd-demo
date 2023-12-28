import { Editor, type EditorProps } from '@bytemd/react';

import { sanitize } from './config';
import { tocPlugin } from './plugin';
import { useByteMD } from './use-bytemd';

type Props = {
  content?: string;
  setContent: (content: string) => void;
  editorProps?: Partial<EditorProps>;
};

export function BytemdEditor({ content, setContent, editorProps }: Props) {
  const { plugins, locale } = useByteMD();

  return (
    <Editor
      value={content ?? ''}
      plugins={[...plugins, tocPlugin()]}
      placeholder="请输入内容..."
      sanitize={sanitize}
      onChange={(v) => setContent(v)}
      locale={locale}
      editorConfig={{
        ...editorProps,
      }}
    />
  );
}
