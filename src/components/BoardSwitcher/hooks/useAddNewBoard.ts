import { TBoard } from '../../../types';

interface IUseAddNewBoard {
  setBoardsState: React.Dispatch<React.SetStateAction<TBoard[]>>;
  setActiveBoardId: React.Dispatch<React.SetStateAction<number>>;
}

export const useAddNewBoard = ({
  setBoardsState,
  setActiveBoardId,
}: IUseAddNewBoard) => {
  const addNewBoard = () => {
    setBoardsState((prevState: Array<TBoard>) => {
      const newBoardId = prevState.length;

      setActiveBoardId(newBoardId);

      return [...prevState, { id: newBoardId, title: 'New Board' }];
    });
  };

  return {
    addNewBoard,
  };
};
