import React from 'react';
import { ImageURISource } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

export interface IMapButtonProps extends RectButtonProperties {
  icon: ImageURISource;
  noMargin?: boolean;
  transparent?: boolean;
}

const MapButton: React.FC<IMapButtonProps> = ({
  icon,
  noMargin = false,
  transparent,
  ...props
}) => {
  return (
    <S.Container noMargin={noMargin} transparent={transparent} {...props}>
      <S.Icon source={icon} />
    </S.Container>
  );
};

export default MapButton;
