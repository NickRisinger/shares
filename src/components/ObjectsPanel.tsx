import { useFormContext } from 'react-hook-form';
import Button from './Button';
import { useEffect } from 'react';

export default function ObjectsPanel({
  handelSubmit,
}: {
  handelSubmit: (...values: any) => void;
}) {
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

        <input
          type="text"
          {...register('ids', { onBlur: () => handelSubmit() })}
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <select
          {...register('categoryId', {
            onBlur: () => handelSubmit(),
            valueAsNumber: true,
          })}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option defaultChecked>Не выбрано</option>
          <option value="1">Комнаты</option>
          <option value="2">Квартиры</option>
          <option value="3">Дома, дачи, коттеджи</option>
          <option value="4">Коммерческая</option>
          <option value="5">Земельные участки</option>
          <option value="6">Гаражи и машиноместа</option>
          <option value="7">Новостройки</option>
        </select>

        <input
          type="text"
          {...register('priceFrom', {
            onBlur: () => handelSubmit(),
            valueAsNumber: true,
          })}
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <input
          type="text"
          {...register('priceTo', {
            onBlur: () => handelSubmit(),
            valueAsNumber: true,
          })}
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <input
          type="text"
          {...register('realtorIds', {
            onBlur: () => handelSubmit(),
          })}
          placeholder="Пользователь"
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <input
          type="text"
          {...register('byUser', {
            onBlur: () => handelSubmit(),
          })}
          placeholder="Адрес"
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div className="flex gap-x-3">
        <Button type="button">
          <span>Фильтры</span>
        </Button>

        <Button type="button">
          <span>Добавить</span>
        </Button>

        <select
          {...register('', {
            onBlur: () => handelSubmit(),
            valueAsNumber: true,
          })}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option defaultChecked>Не выбрано</option>
          <option value="20">по 20</option>
          <option value="50">по 50</option>
          <option value="100">по 100</option>
        </select>
      </div>
    </div>
  );
}
