import { useFormContext } from 'react-hook-form';

export default function AdvancedFiltersObject() {
  const { register, watch } = useFormContext();

  const categoryId = watch('categoryId');

  return (
    <div className="flex flex-col gap-y-6 bg-white p-6">
      <div className="flex flex-col gap-y-6">
        <div className="grid grid-flow-row grid-cols-5 gap-6"></div>

        <div className="flex gap-x-5"></div>
      </div>

      {categoryId == 1 && (
        <div className="flex flex-col gap-y-6">
          <h2 className="text-base font-bold">Комнаты</h2>

          <div className="grid grid-flow-row grid-cols-5 gap-4"></div>
        </div>
      )}

      {categoryId == 2 && (
        <div className="flex flex-col gap-y-6">
          <h2 className="text-base font-bold">Квартиры</h2>

          <div className="grid grid-flow-row grid-cols-5 gap-4"></div>
        </div>
      )}

      {categoryId == 3 && (
        <div className="flex flex-col gap-y-6">
          <h2 className="text-base font-bold">Дома, дачи, коттеджи</h2>

          <div className="grid grid-flow-row grid-cols-5 gap-4"></div>
        </div>
      )}

      {categoryId == 4 && (
        <div className="flex flex-col gap-y-6">
          <h2 className="text-base font-bold">Коммерческая</h2>

          <div className="grid grid-flow-row grid-cols-5 gap-4"></div>
        </div>
      )}

      {categoryId == 5 && (
        <div className="flex flex-col gap-y-6">
          <h2 className="text-base font-bold">Земельный участки</h2>

          <div className="grid grid-flow-row grid-cols-5 gap-4"></div>
        </div>
      )}

      {categoryId == 6 && (
        <div className="flex flex-col gap-y-6">
          <h2 className="text-base font-bold">Гаражи, машинместа</h2>

          <div className="grid grid-flow-row grid-cols-5 gap-4"></div>
        </div>
      )}

      {categoryId == 7 && (
        <div className="flex flex-col gap-y-6">
          <h2 className="text-base font-bold">Новостройки</h2>

          <div className="grid grid-flow-row grid-cols-5 gap-4"></div>
        </div>
      )}
    </div>
  );
}
