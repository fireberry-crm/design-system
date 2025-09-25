import styled from 'styled-components';

interface _COMPONENT_NAME_Props {
  someProp: string | undefined;
}

export const _COMPONENT_NAME_ = styled.div<_COMPONENT_NAME_Props>`
  display: ${(props) => props.someProp};
`;
