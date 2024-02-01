import { ExercisesList } from './ExercisesSubcategoriesList.styled';

import { ExercisesItem } from '../ExercisesItem';

interface ExercisesSubcategoriesListProps {
  exercisesList: {
    _id: string;
    filter: string;
    name: string;
    imgURL: string;
  }[];
}

const ExercisesSubcategoriesList: React.FC<ExercisesSubcategoriesListProps> = ({
  exercisesList
}) => {
  return (
    <ExercisesList>
      {exercisesList.length && exercisesList.map(({ _id, filter, name, imgURL}) => (
        <ExercisesItem
          key={_id} name={name} img={imgURL} filter={filter} />
      ))}
    </ExercisesList >
  );
};

export default ExercisesSubcategoriesList;
