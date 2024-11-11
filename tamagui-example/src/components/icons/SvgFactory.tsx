/**
 * Copyright © 2022-present Agility IO, LLC. All rights reserved.
 *
 * The contents of this file are subject to the terms of the End User License Agreement (EULA) and Enterprise Services Agreement (ESA) agreed upon between You and Agility IO, LLC, collectively ("License").
 * You may not use this file except in compliance with the License. You can obtain a copy of the License by contacting Agility IO, LLC.
 * See the License for the specific language governing permissions and limitations under the License including but not limited to modification and distribution rights of the Software.
 */
import { memo } from 'react';
import Svg, { SvgProps } from 'react-native-svg';
import { styled, StackProps, Stack } from 'tamagui';

export interface SvgFactoryProps extends StackProps {
  viewBox?: SvgProps['viewBox'];
  color?: SvgProps['color'];
  fill?: SvgProps['fill'];
}

const StyledSVG = styled(Svg, {}, { accept: { color: 'color' } as const });

const SvgFactory = ({ width, height, children, color, viewBox, fill, ...rest }: SvgFactoryProps) => (
  <Stack width={width} height={height} {...rest}>
    <StyledSVG width="100%" height="100%" viewBox={viewBox} color={color} fill={fill}>
      {children}
    </StyledSVG>
  </Stack>
);

export default memo(SvgFactory);
