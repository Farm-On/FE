import React from 'react';

interface HighlightedTextProps {
  text: string;
  inputValue: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, inputValue }) => {
  const parts = text.split(new RegExp(`(${inputValue})`, 'gi'));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === inputValue.toLowerCase() ? (
          <span key={index} style={{ color: 'black', fontWeight: '600' }}>
            {part}
          </span>
        ) : (
          <span key={index} style={{ color: '#8E8E8E', fontWeight: '500' }}>
            {part}
          </span>
        )
      )}
    </>
  );
};

export default HighlightedText;
