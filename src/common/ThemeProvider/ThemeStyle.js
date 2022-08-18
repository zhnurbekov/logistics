import styled from 'styled-components';

export const ThemeWrapper = styled.main`
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.isDark ? '#eeeeee' : '#000000'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .text-primary {
    color: inherit;
  }
  .text-secondary {
    color: ${(props) => props.theme.palette.text.secondary};
  }

  // color
  .color-primary {
    color: ${(props) => props.theme.palette.primary.main};
  }
  .color-secondary {
    color: ${(props) => props.theme.palette.secondary.main};
  }
  .color-success {
    color: ${(props) => props.theme.palette.success.main};
  }
  .color-error {
    color: ${(props) => props.theme.palette.error.main};
  }
  .color-warn {
    color: ${(props) => props.theme.palette.warning.main};
  }
  .color-info {
    color: ${(props) => props.theme.palette.info.main};
  }

  .color-action {
    color: ${(props) => props.theme.palette.action.main};
  }

  // background
  .bg-color {
    background-color: ${(props) => props.theme.palette.background.default};
  }
  .bg-primary {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  .bg-secondary {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }

  // border
  .border {
    border: 1px solid ${(props) => props.theme.palette.grey[400]};
  }
  .border-top {
    border-top: 1px solid ${(props) => props.theme.palette.grey[700]};
  }
  .border-radius {
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  .border-primary {
    border: 1px solid ${(props) => props.theme.palette.primary.main};
  }
  .border-secondary {
    border: 1px solid ${(props) => props.theme.palette.secondary.main} !important;
  }
  .border-warn {
    border: 1px solid ${(props) => props.theme.palette.warning.main} !important;
  }
  .border-success {
    border: 1px solid ${(props) => props.theme.palette.success.main} !important;
  }
  .border-info {
    border: 1px solid ${(props) => props.theme.palette.info.main} !important;
  }

  // shadow
  .shadow {
    box-shadow: 0 1px 0 0 #d3d9de, 0 0 0 1px #edeef0;
  }
`;
