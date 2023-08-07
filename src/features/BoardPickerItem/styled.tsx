import styled from 'styled-components';

import { Icon as IconWidget } from '@/widgets';

interface ISBoardPickerItem {
  $isActive: boolean;
  $isDragging: boolean;
  $isDragOverlay?: boolean;
}

export const BoardPickerItemWrapper = styled.div<ISBoardPickerItem>`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: 20px auto;
  column-gap: 4px;
  align-items: end;

  padding: 4px 8px 8px;

  border-bottom: 2px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.text.main.color : 'transparent'};

  opacity: ${({ $isDragging, $isDragOverlay }) =>
    $isDragOverlay ? 0.5 : $isDragging ? 0 : 1};

  transition-duration: 0.3s;
  transition-property: border-bottom;

  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'pointer')};
  user-select: none;
  scroll-margin: 50px;

  &::after {
    position: absolute;
    content: '';
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;

    width: calc(100% - 6px);
    height: 29px;

    border-radius: 4px;

    background-color: transparent;

    transition: 0.3s;
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.button.hover.color};
    }
  }

  &:active {
    &::after {
      background-color: ${({ theme }) => theme.button.active.color};
    }
  }
`;

export const Icon = styled(IconWidget).attrs<{ $isActive: boolean }>(
  ({ $isActive, theme }) => ({
    fill: $isActive ? theme.text.main.color : theme.text.title.color,
  })
)``;