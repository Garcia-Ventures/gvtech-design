import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Combobox } from '@gv-tech/ui-native';

export function ComboboxDocs() {
  return (
    <>
      <ComponentShowcase>
        <Combobox />
      </ComponentShowcase>
      <PropsTable name="Combobox" />
    </>
  );
}
