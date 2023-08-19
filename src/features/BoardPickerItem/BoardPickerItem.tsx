import { CSSProperties, ForwardedRef, forwardRef } from 'react';

import { Text } from '@/widgets';

import { TBoard } from '@/entities';

import ColumnsIcon from './icons/columns-icon.svg';
import { BoardPickerItemWrapper, Icon } from './styled';

interface IBoardPickerItemView {
  board: TBoard;
  isDragging: boolean;
  isDragOverlay?: boolean;
  isActive: boolean;
  handleBoardClick: (boardId: string) => void;
  style?: CSSProperties;
}

const BoardPickerItemView = (
  {
    board,
    isDragging,
    isDragOverlay,
    isActive,
    handleBoardClick,
    ...props
  }: IBoardPickerItemView,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <BoardPickerItemWrapper
      {...props}
      ref={ref}
      onClick={() => handleBoardClick(board.id)}
      $isActive={isActive}
      $isDragging={isDragging}
      $isDragOverlay={isDragOverlay}
      id={board.id}
    >
      <Icon
        width={20}
        height={20}
        icon={<ColumnsIcon />}
        $isActive={isActive}
      />
      <Text size="s" color={isActive ? 'main' : 'title'}>
        {board.title}
      </Text>
    </BoardPickerItemWrapper>
  );
};

export const BoardPickerItem = forwardRef(BoardPickerItemView);
