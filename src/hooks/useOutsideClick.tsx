// hooks/useOutsideClick.ts
import { useEffect, RefObject } from 'react';

export type UseOutsideClickOptions = {
  /** the elements you want to watch */
  refs: RefObject<HTMLElement | null>[];
  /** callback when click is outside */
  handler: () => void;
  /** optional: disable the listener when false */
  enabled?: boolean;
};

export function useOutsideClick({
  refs,
  handler,
  enabled = true,
}: UseOutsideClickOptions) {
  useEffect(() => {
    if (!enabled) return;

    function onClickOutside(e: MouseEvent) {
      // if every ref is either null or does *not* contain the click target,
      // we’ve clicked outside
      if (refs.every(r => r.current && !r.current.contains(e.target as Node))) {
        handler();
      }
    }

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [refs, handler, enabled]);
}
