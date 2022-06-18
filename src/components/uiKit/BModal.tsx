import React, {SVGAttributes} from "react";
import styled, {css, DefaultTheme, keyframes} from "styled-components";
import get from "lodash/get";
import {FlexProps} from "@pancakeswap-libs/uikit/src/components/Flex/types";
import {flexbox, space, SpaceProps} from "styled-system";
import {Handler} from "@pancakeswap-libs/uikit/src/widgets/Modal/types";
import {BButton} from "./basicComponents";



export const tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};

export const sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

type Tags = typeof tags[keyof typeof tags];
type Sizes = typeof sizes[keyof typeof sizes];

interface HeadingProps {
    as?: Tags;
    size?: Sizes;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

const getThemeValue =
    (path: string, fallback?: string | number) =>
        (theme: DefaultTheme): string =>
            get(theme, path, fallback);

interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
    theme?: DefaultTheme;
    spin?: boolean;
}

const Svg = styled.svg<SvgProps>`
  fill: black;
  flex-shrink: 0;

  ${({ spin }) => spin && spinStyle}
  ${space}
`;

Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};

const style = {
    [sizes.MD]: {
        fontSize: "20px",
    },
    [sizes.LG]: {
        fontSize: "24px",
    },
    [sizes.XL]: {
        fontSize: "40px",
    },
    [sizes.XXL]: {
        fontSize: "64px",
    },
};

const Text = styled.div`
  color: black;
  font-size: 18px;
  line-height: 1.5;
`;

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-weight:600;
  line-height: 1.1;
`;

const Flex = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
`;

const IconButton = styled.div`
  padding: 0;
`;

export interface InjectedProps {
    onDismiss?: Handler;
}

interface Props extends InjectedProps {
    title: string;
    hideCloseButton?: boolean;
    onBack?: () => void;
    bodyPadding?: string;
}

const StyledModal = styled.div`
  background: white;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 32px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  align-items: center;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: space-between !important;
  flex: 1;
`;

const ArrowBackIcon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" {...props} color="black">
            <path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" />
        </Svg>
    );
};

const CloseIcon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" {...props}>
            <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" />
        </Svg>
    );
};


const BModal: React.FC<Props> = ({
                                    title,
                                    onDismiss,
                                    onBack,
                                    children,
                                    hideCloseButton = false,
                                    bodyPadding = "24px",
                                }) => (
    <StyledModal>
        <ModalHeader>
            <ModalTitle>
                {onBack && (
                    <IconButton onClick={onBack} area-label="go back">
                        <ArrowBackIcon color="primary" />
                    </IconButton>
                )}
                <Heading>{title}</Heading>
            </ModalTitle>
            {!hideCloseButton && (
                <IconButton onClick={onDismiss} aria-label="Close the dialog">
                    <CloseIcon color="primary" />
                </IconButton>
            )}
        </ModalHeader>
        <Flex flexDirection="column" p={bodyPadding}>
            {children}
        </Flex>
    </StyledModal>
);

export default BModal;
