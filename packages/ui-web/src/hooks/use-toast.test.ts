import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { reducer } from './use-toast';

describe('useToast reducer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should handle ADD_TOAST and enforce TOAST_LIMIT', () => {
    const initialState = { toasts: [] };
    const toast1 = { id: 'toast_add_1', open: true, title: 'Toast 1' };
    const action1 = { type: 'ADD_TOAST' as const, toast: toast1 };

    const state1 = reducer(initialState, action1);
    expect(state1.toasts).toEqual([toast1]);

    const toast2 = { id: 'toast_add_2', open: true, title: 'Toast 2' };
    const action2 = { type: 'ADD_TOAST' as const, toast: toast2 };

    // Since TOAST_LIMIT is 1, the new toast replaces the old one
    const state2 = reducer(state1, action2);
    expect(state2.toasts).toEqual([toast2]);
  });

  it('should handle UPDATE_TOAST', () => {
    const initialState = {
      toasts: [
        { id: 'toast_update_1', open: true, title: 'Toast 1' },
        { id: 'toast_update_2', open: true, title: 'Toast 2' },
      ],
    };

    const action = {
      type: 'UPDATE_TOAST' as const,
      toast: { id: 'toast_update_1', title: 'Updated Toast 1' },
    };

    const nextState = reducer(initialState, action);
    expect(nextState.toasts).toEqual([
      { id: 'toast_update_1', open: true, title: 'Updated Toast 1' },
      { id: 'toast_update_2', open: true, title: 'Toast 2' },
    ]);
  });

  it('should handle DISMISS_TOAST for a specific toastId and schedule removal', () => {
    const initialState = {
      toasts: [
        { id: 'toast_dismiss_spec_1', open: true, title: 'Toast 1' },
        { id: 'toast_dismiss_spec_2', open: true, title: 'Toast 2' },
      ],
    };

    const spySetTimeout = vi.spyOn(globalThis, 'setTimeout');

    const action = {
      type: 'DISMISS_TOAST' as const,
      toastId: 'toast_dismiss_spec_1',
    };

    const nextState = reducer(initialState, action);

    // Verify state update: only toast 1 should be open: false
    expect(nextState.toasts).toEqual([
      { id: 'toast_dismiss_spec_1', open: false, title: 'Toast 1' },
      { id: 'toast_dismiss_spec_2', open: true, title: 'Toast 2' },
    ]);

    // Verify addToRemoveQueue side effect scheduled a timeout
    expect(spySetTimeout).toHaveBeenCalledTimes(1);
    expect(spySetTimeout).toHaveBeenCalledWith(expect.any(Function), 1000000);
  });

  it('should handle DISMISS_TOAST for all toasts when toastId is undefined', () => {
    const initialState = {
      toasts: [
        { id: 'toast_dismiss_all_1', open: true, title: 'Toast 1' },
        { id: 'toast_dismiss_all_2', open: true, title: 'Toast 2' },
      ],
    };

    const spySetTimeout = vi.spyOn(globalThis, 'setTimeout');

    const action = {
      type: 'DISMISS_TOAST' as const,
      toastId: undefined,
    };

    const nextState = reducer(initialState, action);

    // Verify state update: both toasts should be open: false
    expect(nextState.toasts).toEqual([
      { id: 'toast_dismiss_all_1', open: false, title: 'Toast 1' },
      { id: 'toast_dismiss_all_2', open: false, title: 'Toast 2' },
    ]);

    // Verify addToRemoveQueue side effect scheduled a timeout for each toast
    expect(spySetTimeout).toHaveBeenCalledTimes(2);
  });

  it('should handle REMOVE_TOAST for a specific toastId', () => {
    const initialState = {
      toasts: [
        { id: 'toast_remove_spec_1', open: true, title: 'Toast 1' },
        { id: 'toast_remove_spec_2', open: true, title: 'Toast 2' },
      ],
    };

    const action = {
      type: 'REMOVE_TOAST' as const,
      toastId: 'toast_remove_spec_1',
    };

    const nextState = reducer(initialState, action);
    expect(nextState.toasts).toEqual([{ id: 'toast_remove_spec_2', open: true, title: 'Toast 2' }]);
  });

  it('should handle REMOVE_TOAST and clear all toasts when toastId is undefined', () => {
    const initialState = {
      toasts: [
        { id: 'toast_remove_all_1', open: true, title: 'Toast 1' },
        { id: 'toast_remove_all_2', open: true, title: 'Toast 2' },
      ],
    };

    const action = {
      type: 'REMOVE_TOAST' as const,
      toastId: undefined,
    };

    const nextState = reducer(initialState, action);
    expect(nextState.toasts).toEqual([]);
  });
});
