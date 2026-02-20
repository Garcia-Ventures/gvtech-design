import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function CheckboxDocs() {
  return (
    <>
      <ComponentShowcase title="Default" description="A basic checkbox." code={`<Checkbox id="terms" />`} />

      <ComponentShowcase
        title="With Label"
        description="A checkbox with a label."
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      />

      <ComponentShowcase
        title="Disabled"
        description="A disabled checkbox."
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms-disabled" disabled />
  <Label htmlFor="terms-disabled">Accept terms and conditions</Label>
</div>`}
      />
    </>
  );
}
