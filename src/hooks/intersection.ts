import { useEffect } from 'react';

let listenerCallbacks = new WeakMap();

let observer: IntersectionObserver | undefined;

function handleIntersections(entries: any[]) {
  entries.forEach(entry => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer?.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        cb();
      }
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      root: null,
      rootMargin: '10px',
      threshold: 0.15,
    });
  }
  return observer;
}

export function useIntersection(elem: { current: any; }, callback: any) {
  useEffect(() => {
    let target = elem.current;
    let observer = getIntersectionObserver();
    listenerCallbacks.set(target, callback);
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}