import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
  return (
    <ButtonLink
      href={
        'https://drive.usercontent.google.com/download?id=1SwhAazbHVdVJ-9zXB9C3cEO57ch5C-nV&export=download&authuser=0'
      }
      size="lg"
    >
      <FontAwesomeIcon icon={faFilePdf} size="lg" />
      Download resume in PDF
    </ButtonLink>
  );
};

export default PDFDownloadButton;
