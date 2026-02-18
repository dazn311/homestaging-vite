import React, {useEffect, useState} from 'react';

export function useIsVisible(ref: React.RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Создаем observer
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    // Начинаем наблюдение
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Очистка при размонтировании
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

// Использование в компоненте
// export default function LestHook() {
//   const ref = useRef(null);
//   const isVisible = useIsVisible(ref);
//
//   return (
//     <div>
//       <div style={{height: '100vh'}}>Скрольте вниз</div>
//       <div ref={ref} style={{background: isVisible ? 'green' : 'red'}}>
//         {isVisible ? 'Я в поле видимости!' : 'Я скрыт'}
//       </div>
//       <div style={{height: '100vh'}}></div>
//     </div>
//   );
// }
