import { useFormContext } from 'react-hook-form';

export default function AdvancedFiltersObject() {
  const { register, watch } = useFormContext();

  const categoryId = watch('categoryId');

  return (
    <div className="flex flex-col gap-y-6 bg-white p-6">
      <div className="flex flex-col gap-y-6">
        <div className="grid grid-flow-row grid-cols-5 gap-6">
          <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option defaultChecked>Не выбрано</option>
          </select>

          <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option defaultChecked>Не выбрано</option>
          </select>

          <input
            type="text"
            placeholder="Контрагент"
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option defaultChecked>Не выбрано</option>
          </select>

          <input
            type="text"
            placeholder="Цена за м², ₽"
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <input
            type="text"
            placeholder="Высота потолков, м²"
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <input
            type="text"
            placeholder="Был создан"
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

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
