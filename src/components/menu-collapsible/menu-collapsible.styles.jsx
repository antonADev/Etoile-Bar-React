import styled, { css } from 'styled-components';
import Collapsible from 'react-collapsible';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const icons = css`
  width: 23px;
  height: 23px;
  padding: 3px;
  position: absolute;
  display: inline-block;
  right: 0;
  border: 1px solid #633b0d;
  border-radius: 50%;
`;

export const MenuContainer = styled.div`
  position: relative;
  color: #633b0d;
  width: 80vw;
  max-height: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const CollapsibleMenu = styled(Collapsible)`
  width: inherit;
  border-bottom: 1px solid #633b0d;
`;

export const CollapsibleMenuContainer = styled.div`
  position: relative;
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0;
`;

export const CollapsibleTitle = styled.h2`
  font-size: 1.7rem;
  color: #633b0d;
`;

export const UpIcon = styled(FaChevronUp)`
  ${icons}
`;

export const DownIcon = styled(FaChevronDown)`
  ${icons}
`;
