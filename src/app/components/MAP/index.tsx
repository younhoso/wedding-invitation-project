import { ReactNode, useEffect, useRef } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { Location } from '@/types';

import Sections from '../Sections';
import { MapStyled } from './styled';

declare global {
  interface Window {
    kakao: any;
  }
}

type MapProps = {
  location: Location;
};

export default function Map({ location }: MapProps) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_REACT_APP_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(location.lat, location.lng);

        const options = {
          center: position,
          level: 3,
        };

        const marker = new window.kakao.maps.Marker({
          position: position,
        });
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        marker.setMap(map);
      });
    };
  }, [location]);

  return (
    <MapStyled className={clsx('map')}>
      <Sections
        title={
          <div className="wrapHeader">
            <span className="txtTitle">오시는길</span>
            <div className="txtSubtitleInner">
              <span className="txtSubtitle">{location.name}</span>
              <span className="txtSubtitle">{location.address}</span>
            </div>
          </div>
        }
      >
        <div className="mapContainer" ref={mapContainer}>
          <Link className="btn-find-way" href={location.link} target="_blank">
            길찾기
          </Link>
        </div>

        <div>
          <WayToCome label="버스" list={location.waytocome.bus} />
          <WayToCome label="지하철" list={location.waytocome.metro} />
        </div>
      </Sections>
    </MapStyled>
  );
}

type WayToComeProps = {
  label: ReactNode;
  list: string[];
};

function WayToCome({ label, list }: WayToComeProps) {
  return (
    <div className="wrap-waytocome">
      <div className="txt-label">{label}</div>
      <ul>
        {list.map(waytocome => {
          return <li>{waytocome}</li>;
        })}
      </ul>
      <span>{}</span>
    </div>
  );
}
