import { useFormContext } from 'react-hook-form';
import Button from './Button';
import { useEffect } from 'react';

export default function ObjectsPanel() {
  const { register, watch } = useFormContext();

  const test = watch();

  useEffect(() => {
    console.log(test);
  }, [test]);

  return (
    <div className="flex items-start bg-white p-6">
      <div className="flex flex-grow flex-wrap gap-3">
        <Button type="button">
          <span>Добавить</span>
        </Button>
        <Button type="button">
          <span>Экспорт</span>
        </Button>

        <input type="text" {...register('ids')} />

        <input type="text" {...register('categoryId')} />
      </div>

      <div className="flex gap-x-3"></div>
    </div>
  );
}
