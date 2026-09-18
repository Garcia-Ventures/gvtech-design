import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterInputOTPDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyInputOTPWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVInputOTP(
      length: 6,
      onCompleted: (code) => print('OTP: $code'),
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVInputOTP widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="input-otp" height={280} title="GVInputOTP Interactive Preview" />
      </ComponentShowcase>

      <PropsTable
        title="GVInputOTP Props"
        props={[
          {
            name: 'length',
            type: 'int',
            default: '6',
            description: 'Number of digit pin boxes.',
          },
          {
            name: 'onCompleted',
            type: 'ValueChanged<String>?',
            default: 'null',
            description: 'Callback when all digit boxes are filled.',
          },
        ]}
      />
    </>
  );
}
