import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from '@gv-tech/ui-web';

export function AttachmentDocs() {
  return (
    <>
      <ComponentShowcase
        title="States"
        description="Attachments reflect upload lifecycle via the state prop."
        code={`<Attachment state="done"><AttachmentContent><AttachmentTitle>deck.pdf</AttachmentTitle></AttachmentContent></Attachment>
<Attachment state="uploading"><AttachmentContent><AttachmentTitle>video.mp4</AttachmentTitle></AttachmentContent></Attachment>
<Attachment state="processing"><AttachmentContent><AttachmentTitle>audio.wav</AttachmentTitle></AttachmentContent></Attachment>
<Attachment state="error"><AttachmentContent><AttachmentTitle>image.png</AttachmentTitle></AttachmentContent></Attachment>
<Attachment state="idle"><AttachmentContent><AttachmentTitle>draft.txt</AttachmentTitle></AttachmentContent></Attachment>`}
      >
        <AttachmentGroup>
          <Attachment state="done">
            <AttachmentMedia />
            <AttachmentContent>
              <AttachmentTitle>deck.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment state="uploading">
            <AttachmentMedia />
            <AttachmentContent>
              <AttachmentTitle>video.mp4</AttachmentTitle>
              <AttachmentDescription>68%</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment state="error">
            <AttachmentMedia />
            <AttachmentContent>
              <AttachmentTitle>image.png</AttachmentTitle>
              <AttachmentDescription>Upload failed</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction>Retry</AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </AttachmentGroup>
      </ComponentShowcase>

      <ComponentShowcase
        title="Sizes and orientation"
        description="Three sizes and horizontal or vertical layout."
        code={`<Attachment size="sm"><AttachmentContent><AttachmentTitle>note.md</AttachmentTitle></AttachmentContent></Attachment>
<Attachment size="xs"><AttachmentContent><AttachmentTitle>a.txt</AttachmentTitle></AttachmentContent></Attachment>
<Attachment orientation="vertical"><AttachmentContent><AttachmentTitle>photo.jpg</AttachmentTitle></AttachmentContent></Attachment>`}
      >
        <AttachmentGroup>
          <Attachment size="sm">
            <AttachmentContent>
              <AttachmentTitle>note.md</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
          <Attachment size="xs">
            <AttachmentContent>
              <AttachmentTitle>a.txt</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
          <Attachment orientation="vertical">
            <AttachmentMedia />
            <AttachmentContent>
              <AttachmentTitle>photo.jpg</AttachmentTitle>
            </AttachmentContent>
          </Attachment>
        </AttachmentGroup>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'state',
              type: '"idle" | "uploading" | "processing" | "error" | "done"',
              defaultValue: '"done"',
              description: 'The upload lifecycle state. Applies to Attachment only.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "xs"',
              defaultValue: '"default"',
              description: 'The size of the attachment. Applies to Attachment only.',
            },
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
              description: 'Layout direction. Applies to Attachment only.',
            },
            {
              name: 'variant',
              type: '"icon" | "image"',
              defaultValue: '"icon"',
              description: 'Media treatment. Applies to AttachmentMedia only.',
            },
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Render AttachmentTrigger as its child element. Applies to AttachmentTrigger only.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
          ]}
        />
      </div>
    </>
  );
}
