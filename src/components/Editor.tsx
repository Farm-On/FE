import { CSSProperties, Dispatch, SetStateAction } from 'react';
import ReactQuill from 'react-quill';

interface EditorProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  style?: CSSProperties;
}

export const Editor = ({ content, setContent, style }: EditorProps) => {
  const Size = ReactQuill.Quill.import('attributors/style/size');
  Size.whitelist = ['14px', '16px', '18px'];
  ReactQuill.Quill.register(Size, true);

  return (
    <>
      {' '}
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={{
          toolbar: {
            container: [
              [{ size: [false, '16px', '18px'] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }],
              ['link', 'image'],
            ],
          },
        }}
        style={{ display: 'flex', flexDirection: 'column', ...style }}
        placeholder={`
                글을 작성해주세요. 
                
                작성 시 유의사항
                - 본인의 전문 분야에 맞는 게시물을 작성해주세요. 
                - 비속어 및 모호한 표현을 삼가주세요. 
                - 제품, 서비스, 외부 사이트 등을 광고하거나 홍보하는 내용의 게시글은 허용하지 않습니다. 
                - 상기 규정에 따라 게시글이 별도의 경고 없이 삭제될 수 있습니다.
            `}
      />
      <style>
        {`
.ql-editor.ql-blank::before {
inset: 0;
top: 40.45px;
color:#8E8E8E;
font-family: PretendardRegular;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 166%; /* 29.88px */
}
        
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    content: '14';
    font-size: 14px !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    content: '16';
    font-size: 16px !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before {
    content: '18';
    font-size: 18px !important;
}`}
      </style>
    </>
  );
};
