import clsx from 'clsx';

import { Person, Wedding } from '@/types';

import Accordion from '../Accordion';
import Sections from '../Sections';
import ContactInfo from './ContactInfo';
import { ContactStyled } from './styled';

export default function Contact({
  groom,
  bride,
}: {
  groom: Wedding['data']['groom'];
  bride: Wedding['data']['bride'];
}) {
  return (
    <ContactStyled className={clsx('contactStyled')}>
      <Sections title="연락처 및 마음전하실 곳">
        <Accordion label="신랑측">
          <ContactInfo name={groom.name} account={groom.account} phoneNumber={groom.phoneNumber} />
          <ContactInfo
            name={groom.parents[0].name}
            account={groom.parents[0].account}
            phoneNumber={groom.parents[0].phoneNumber}
          />
          <ContactInfo
            name={groom.parents[1].name}
            account={groom.parents[1].account}
            phoneNumber={groom.parents[1].phoneNumber}
          />
        </Accordion>
        <Accordion label="신부측">
          <ContactInfo name={bride.name} account={bride.account} phoneNumber={bride.phoneNumber} />
          <ContactInfo
            name={bride.parents[0].name}
            account={bride.parents[0].account}
            phoneNumber={bride.parents[0].phoneNumber}
          />
          <ContactInfo
            name={bride.parents[1].name}
            account={bride.parents[1].account}
            phoneNumber={bride.parents[1].phoneNumber}
          />
        </Accordion>
      </Sections>
    </ContactStyled>
  );
}
