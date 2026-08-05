import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { InputOTP } from '@gv-tech/ui-native';

export function InputOTPDocs() {
  return (
    <>
      <ComponentShowcase>
        <InputOTP />
      </ComponentShowcase>
      <PropsTable name="InputOTP" />
    </>
  );
}
