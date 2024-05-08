import { DialogContent, MenuItem, Typography } from '@mui/material';
import { css, keyframes } from '@emotion/react';
import emotionStyled from '@emotion/styled';
import Link from 'next/link';



export const centerFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const textTruncate = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const primaryTextColor = '#363636';
export const bodyGray = '#F7F7F7';
export const light = '#FFFFFF';
export const gray = '#adadad';
export const darkGray = '#e6e6e6';
export const lightGray = '#EFEFEF';
export const silver = '#A6A6A6';
export const oliveGreen = '#4E6C54';

// notifications colors
export const success = '#02AD42';
export const warning = '#FFA700';
export const error = '#FA0B0B';
export const info = '#1673DB';







export const CustomMenuItem = emotionStyled(MenuItem)`
  width: 100%;
  font-size: 0.875rem;
  padding: 6px 0 !important;
  justify-content: left !important;

  &.MuiListItem-root.Mui-selected {
    background-color: transparent;
  }

  &.MuiListItem-root {
    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
  }
`;

export const ButtonCss = css`
  &:disabled {
    background: #e8e8e8;
    color: white !important;
  }
`;



export const scrollBarWidth = '6px';

export const scrollbar = css`
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: #ffffff;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    /* height: 6px; */
    background-color: rgba(166, 185, 200, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(166, 185, 200, 0.5);
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(166, 185, 200, 1);
  }
  &:hover::-webkit-scrollbar {
    width: ${scrollBarWidth};
    height: ${scrollBarWidth};
  }
  @media (max-width: 527px) {
    &:hover::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

const spinAnimationFrame = keyframes`
  from { transform: rotate(0) translate(-50%, -50%) }
  to { transform: rotate(360deg) translate(-50%, -50%) }
`;

export const spinAnimation = css`
  transition: 0.3s ease;
  transform-origin: 0 0;
  animation: ${spinAnimationFrame} 1s infinite;
`;

export const sizes = {
  laptopL: '1024px',
  laptopXl: '1370px',
  laptopXXl: '1600px',
};

export const devices = {
  laptopL: `(min-width: ${sizes.laptopL})`,
  laptopXl: `(min-width: ${sizes.laptopXl})`,
  laptopXXl: `(min-width: ${sizes.laptopXXl})`,
};

export const TABLE_ROW_HEIGHT = 57;
export const TABLE_ROW_HEIGHT_DENSE = 50;

export const TextContent = emotionStyled.p<{
  size?: number;
  weight?: number;
  lineHeight?: number;
  isTruncate?: boolean;
  align?: 'left' | 'right' | 'center';
}>`
  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ weight = 400 }) => weight};
  line-height: ${({ lineHeight = 20 }) => lineHeight}px;
  text-align: ${({ align }) => align};
  ${({ isTruncate }) => isTruncate && textTruncate}
`;



export type TextAlign = 'left' | 'center' | 'right';



export const SMALLEST_RESOLUTION = '(max-width: 400px)';
export const SMALL_RESOLUTION = '(max-width: 1500px)';
export const TABLET_RESOLUTION = '(max-width: 1200px)';
export const MIN_TABLET_RESOLUTION = '(min-width: 1150px)';
export const MAX_TABLET_RESOLUTION = '(max-width: 1150px)';
export const SMALL_HEIGHT_RESOLUTION = '(max-height: 900px)';
export const SMALL_TABLET_HEIGHT_RESOLUTION = '(max-height: 700px)';
export const TABLET_HEIGHT_RESOLUTION = '(max-height: 800px)';
export const SMALL_WIDTH_RESOLUTION = '(max-width: 900px)';
export const MOBILE_RESOLUTION = '(max-width: 767px)';
export const SMALL_MOBILE_RESOLUTION = '(max-width: 400px)';
export const MOBILE_TABLET_RESOLUTION = '(max-width: 1024px)';
export const MOBILE_TABLET_MIN_RESOLUTION = '(min-width: 767px)';
export const LAPTOP_MIN_RESOLUTION = '(min-width: 800px)';
export const LAPTOP_MAX_RESOLUTION = '(max-width: 1600px)';

export const TabPageContainer = emotionStyled.div`
  overflow: overlay;
  height: calc(100vh - 140px);
`;



export const CustomContent = emotionStyled(DialogContent)<{
  $verticalSpaceBetween?: true;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
  padding-top: 5px;
  padding-bottom: 20px;

  @media (min-width: 1500px) {
    padding: 28px 47px 30px 73px;
  }

  .MuiDialogActions-spacing {
    padding: 0;

    margin-top: ${({ $verticalSpaceBetween }) =>
      !$verticalSpaceBetween && '104px'};

    @media (max-width: 1500px) {
      margin-top: ${({ $verticalSpaceBetween }) =>
        !$verticalSpaceBetween && '40px'};
    }
  }

  .MuiFormControl-root {
    margin: 0;
  }

  .MuiTypography-root {
    margin-left: 0 !important;
  }
`;

export const CustomTitle = emotionStyled(Typography)`
  && {
   
    font-weight: 800;
    margin-left: 18px;
    margin-bottom: 40px;
    font-size: 28px;

    &.custom-margin {
      margin-bottom: 20px;
    }

    @media (max-width: 1500px) {
      margin-bottom: 49px;

      &.remove-margin {
        margin-bottom: 20px;
      }
    }
    &.relative-title {
      display: inline-block;
      margin-bottom: 0;
      position: relative;
      bottom: 20px;
      left: 20px;
    }
  }
`;

export const ControllerRoot = emotionStyled.div<{ withTabs?: true }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ withTabs }) => css`
    margin-top: ${withTabs ? 26 : 27}px;

    @media (min-width: 1500px) {
      margin-top: ${withTabs ? 26 : 45}px;
    }
  `}
`;



export const imgHost = css`
  & img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

export const gridListColClasses = css`
  .center {
    justify-self: center;
  }
  .end {
    justify-self: end;
  }
`;

export const slideAnimation = keyframes`
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  10% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  20% {
    opacity: 1
  }
  30% {
    opacity: 0
  }
`;

export const SearchWrapper = emotionStyled.div`
  margin-right: 20px;
`;

export const SecondaryLabel = emotionStyled.span`

  font-weight: 400;
`;



export const TextLinkCellStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0.8;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;


  &:hover {
    opacity: 1;
  }
`;

export const centerBackgroundImage = css`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;



export const Container = emotionStyled.div`
  width: calc(100vw - 130px);
  flex-direction: column;
`;

export const AuthProvidersWrapper = emotionStyled.div`
  margin-bottom: 30px;
  .provider-button-wrapper {
    margin: 10px 15px;
  }

  @media ${SMALL_RESOLUTION} {
    .provider-button-wrapper {
      margin: 10px 15px;
    }
  }

  @media ${MOBILE_RESOLUTION} {
    // using margin because of safari (mobile) bug with gap
    gap: 0;
    .provider-button-wrapper {
      margin: 10px 15px;
    }
  }

  @supports not (gap: 30px) {
    margin: 0 30px;
  }
`;

export const AuthLinkRow = emotionStyled.span`
  margin-top: 50px;
  font-size: 0.875rem;
  font-weight: 500;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }

  @media (max-width: 1500px) {
    margin-top: 22px;
    font-size: 0.75rem;
  }

  a {
    color: #1565d8;
  }
`;

// client
export const TextColor = '#424242';
export const ClientRoot = emotionStyled.section`
  padding: 20px 25px;
  @media (max-width: 800px) {
    padding: 20px 5px;
  }
`;

export const GenericCarouselImage = emotionStyled.div<{ imgUrl: string }>`
  z-index: 10;
  position: relative;
  background: transparent;
  border-radius: 25px;
  margin: 10px;
  z-index: 5;
  opacity: 1;
  background: url('${({ imgUrl }) => imgUrl}') center center no-repeat;
  background-size: cover;
`;

export const TermsOfUseFooter = css`
  .logo-stack-container {
    .logo-stack-container-logo-container {
      & > div {
        margin-right: 20px;
      }
    }
  }
`;

export const PlainLink = emotionStyled(Link)`
&&{
  text-decoration: none;
}
`;
