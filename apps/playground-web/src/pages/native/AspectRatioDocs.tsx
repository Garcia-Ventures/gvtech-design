import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

export function AspectRatioDocs() {
  return (
    <>
      <ComponentShowcase
        title="16:9"
        description="A 16:9 aspect ratio container for Native."
        code={`import { AspectRatio } from "@gv-tech/design-system";
import { Image, View } from "react-native";

export function AspectRatioExample() {
  return (
    <View className="w-[300px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800" }}
          style={{ width: '100%', height: '100%' }}
          className="rounded-md"
        />
      </AspectRatio>
    </View>
  );
}`}
      />

      <ComponentShowcase
        title="Square (1:1)"
        description="A square aspect ratio container for Native."
        code={`import { AspectRatio, Text } from "@gv-tech/design-system";
import { View } from "react-native";

export function AspectRatioSquare() {
  return (
    <View className="w-[150px]">
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-md flex items-center justify-center">
        <Text className="text-muted-foreground">1:1</Text>
      </AspectRatio>
    </View>
  );
}`}
      />
    </>
  );
}
