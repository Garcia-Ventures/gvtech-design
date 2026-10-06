import { ComponentShowcase, PropsTable } from '@/components/docs';
import { FlutterComponentPreview } from '@/components/docs/FlutterComponentPreview';

export function FlutterAvatarDocs() {
  const codeExample = `import 'package:flutter/material.dart';
import 'package:gv_ui_flutter/gv_ui_flutter.dart';

class MyAvatarWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GVAvatar(
      initials: 'EG',
      size: GVAvatarSize.md,
      onTap: () {
        print('Avatar tapped!');
      },
    );
  }
}`;

  return (
    <>
      <ComponentShowcase
        title="Flutter Interactive Preview"
        description="Live preview of the GVAvatar widget compiled from packages/ui-flutter."
        code={codeExample}
      >
        <FlutterComponentPreview route="avatar" height={260} title="GVAvatar Interactive Preview" />
      </ComponentShowcase>

      <h3 className="mt-6 text-xl font-semibold">GVAvatar Props</h3>
      <PropsTable
        props={[
          {
            name: 'initials',
            type: 'String?',
            defaultValue: 'null',
            description: 'Fallback text initials rendered inside avatar circle.',
          },
          {
            name: 'imageProvider',
            type: 'ImageProvider?',
            defaultValue: 'null',
            description: 'Optional image source.',
          },
          {
            name: 'size',
            type: 'GVAvatarSize',
            defaultValue: 'GVAvatarSize.md',
            description: 'Size variant: xs (24), sm (32), md (40), lg (48), xl (64).',
          },
          {
            name: 'onTap',
            type: 'VoidCallback?',
            defaultValue: 'null',
            description: 'Optional tap handler.',
          },
        ]}
      />
    </>
  );
}
