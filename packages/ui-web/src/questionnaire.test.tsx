'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Questionnaire, QuestionnaireItem, QuestionnaireTitle } from './questionnaire';

describe('Questionnaire', () => {
  it('renders an item with title', () => {
    render(
      <Questionnaire>
        <QuestionnaireItem name="contact">
          <QuestionnaireTitle>Contact?</QuestionnaireTitle>
        </QuestionnaireItem>
      </Questionnaire>,
    );
    expect(screen.getByText('Contact?')).toBeInTheDocument();
  });
});
