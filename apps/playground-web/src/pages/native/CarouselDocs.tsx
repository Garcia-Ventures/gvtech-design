import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function CarouselDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A basic carousel using paging ScrollView on Native."
        code={`import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  Card,
  CardContent,
  Text
} from "@gv-tech/design-system";
import { View } from "react-native";

export function CarouselExample() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <View className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Text className="text-4xl font-semibold">{index + 1}</Text>
                </CardContent>
              </Card>
            </View>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Carousel component for Native is implemented using a paging <code>ScrollView</code>.
        </p>
        <h4 className="mt-6 text-lg font-medium">Carousel (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
              description: 'The orientation of the carousel.',
            },
            {
              name: 'setApi',
              type: '(api: CarouselApi) => void',
              description: 'Callback to get a shimmed Carousel API instance.',
            },
          ]}
        />
      </div>
    </>
  );
}
