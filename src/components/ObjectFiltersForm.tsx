import { useForm, FormProvider } from 'react-hook-form';
import ObjectsPanel from './ObjectsPanel';
import AdvancedFiltersObject from './AdvancedFiltersObject';

interface ObjectFiltersFormState {
  ids: string;
  categoryId: string;
  priceFrom: string;
  priceTo: string;
  realtorIds: string;
  operationId: string;
  byUser: number;
  platformId: string;
}

export default function ObjectFiltersForm() {
  const methods = useForm<ObjectFiltersFormState>({
    defaultValues: {},
  });

  const onSubmit = methods.handleSubmit((data) => console.log(data));

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="">
        <ObjectsPanel handelSubmit={onSubmit} />
        <AdvancedFiltersObject />
        <br />
        {JSON.stringify(methods.getValues())}
      </form>
    </FormProvider>
  );
}
