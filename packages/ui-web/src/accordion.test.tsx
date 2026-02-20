import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

describe('Accordion', () => {
  it('renders correctly', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText('Trigger 1')).toBeInTheDocument();
    // Content should not be visible initially
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('expands when clicked', async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByText('Trigger 1');
    await userEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Content 1')).toBeVisible();
    });
  });

  it('collapses when clicked again', async () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Initial state open
    expect(screen.getByText('Content 1')).toBeVisible();

    const trigger = screen.getByText('Trigger 1');
    await userEvent.click(trigger);

    await waitFor(() => {
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });
  });

  it('handles single mode correctly', async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    // Click item 1
    await userEvent.click(screen.getByText('Trigger 1'));
    await waitFor(() => expect(screen.getByText('Content 1')).toBeVisible());

    // Click item 2
    await userEvent.click(screen.getByText('Trigger 2'));
    await waitFor(() => expect(screen.getByText('Content 2')).toBeVisible());

    // Item 1 should be closed
    await waitFor(() => expect(screen.queryByText('Content 1')).not.toBeInTheDocument());
  });
});
