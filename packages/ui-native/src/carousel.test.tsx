import { render } from '@testing-library/react';
import { Text } from 'react-native';
import { describe, expect, it, vi } from 'vitest';
import { Carousel, CarouselContent, CarouselItem } from './carousel';

vi.mock('lucide-react-native', () => ({
  ArrowLeft: () => 'ArrowLeft',
  ArrowRight: () => 'ArrowRight',
}));

describe('Carousel (Native Implementation)', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Text>Slide 1</Text>
          </CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    expect(getByText('Slide 1')).toBeDefined();
  });
});
