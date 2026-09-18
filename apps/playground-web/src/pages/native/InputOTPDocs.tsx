import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function InputOTPDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A 6-digit one-time password input component for Native."
        code={`import { InputOTP } from '@gv-tech/ui-native';

export function InputOTPExample() {
  return <InputOTP maxLength={6} />;
}`}
      />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'maxLength',
              type: 'number',
              defaultValue: '6',
              description: 'The maximum length of the OTP input.',
            },
          ]}
        />
      </div>
    </>
  );
}
