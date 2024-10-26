import { CopyToClipboard } from 'react-copy-to-clipboard';

import clsx from 'clsx';

import { Person } from '@/types';

import { ContactInfoStyled } from './styled';

export default function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <ContactInfoStyled className={clsx('contactInfo')}>
      <div className="contactInfoTxt">
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{`${name}`}</span>
      </div>
      <ul className="contactInfoBtn">
        <li>
          <a href={`tel: ${phoneNumber}`} className={clsx('button')}>
            전화
          </a>
        </li>
        <li className={clsx('button')}>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.');
            }}
          >
            <button>복사</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink && (
          <li>
            <a
              className={clsx('button')}
              href={account.kakaopayLink}
              target="_black"
              rel="noreferrer"
            >
              송금
            </a>
          </li>
        )}
      </ul>
    </ContactInfoStyled>
  );
}
