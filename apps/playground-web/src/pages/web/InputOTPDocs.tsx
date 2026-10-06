import { InputOTP, InputOTPGroup, InputOTPSlot } from '@gv-tech/ui-web';

import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function InputOTPDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A one-time password input field."
        code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      >
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'maxLength',
              type: 'number',
              required: true,
              description: 'The number of OTP slots to render.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'The controlled input value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              description: 'Called when the input value changes.',
            },
            {
              name: 'containerClassName',
              type: 'string',
              description: 'Additional classes for the container element.',
            },
          ]}
        />
      </div>
    </>
  );
}
