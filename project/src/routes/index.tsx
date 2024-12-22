import { createBrowserRouter } from 'react-router-dom';
import { RouteTransition } from '../components/transitions/RouteTransition';
import { Hero } from '../pages/Hero';
import { Council } from '../pages/council';
import { Archive } from '../pages/archive';
import { Prophecies } from '../pages/prophecies';
import { Rituals } from '../pages/rituals';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouteTransition>
        <Hero />
      </RouteTransition>
    ),
  },
  {
    path: '/council',
    element: (
      <RouteTransition>
        <Council />
      </RouteTransition>
    ),
  },
  {
    path: '/archive',
    element: (
      <RouteTransition>
        <Archive />
      </RouteTransition>
    ),
  },
  {
    path: '/prophecies',
    element: (
      <RouteTransition>
        <Prophecies />
      </RouteTransition>
    ),
  },
  {
    path: '/rituals',
    element: (
      <RouteTransition>
        <Rituals />
      </RouteTransition>
    ),
  },
]);