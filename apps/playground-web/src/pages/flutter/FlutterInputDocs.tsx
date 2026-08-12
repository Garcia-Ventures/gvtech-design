import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterInputDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyInputWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVInput(
      label: 'Email Address',
      placeholder: 'name@example.com',
      helperText: 'We will never share your email.',
      onChanged: (value) {
        print('Typed: $value');
      },
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVInput widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="input" height={360} title="GVInput Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVInput Props"
        props={[
          {
            name: 'label',
            type: 'String?',
            default: 'null',
            description: 'Field title label.',
          },
          {
            name: 'placeholder',
            type: 'String?',
            default: 'null',
            description: 'Placeholder hint text.',
          },
          {
            name: 'helperText',
            type: 'String?',
            default: 'null',
            description: 'Informative helper message rendered below input.',
          },
          {
            name: 'errorText',
            type: 'String?',
            default: 'null',
            description: 'Validation error message. Renders input in error state.',
          },
          {
            name: 'obscureText',
            type: 'bool',
            default: 'false',
            description: 'Masks input characters for passwords.',
          },
          {
            name: 'disabled',
            type: 'bool',
            default: 'false',
            description: 'Disables editing interaction.',
          },
        ]}
      />
    </>
  );
}
