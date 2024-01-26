import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import type { ReactNode } from 'react';
import { createHashRouter, type RouteObject } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout';
import { PageWrapper } from './components/layout/PageWrapper';
import { AboutPage } from './pages/about/AboutPage';
import { AssessmentsPageLayout } from './pages/assessments/AssessmentsPageLayout';
import { FormativesPage } from './pages/assessments/FormativesPage';
import { CBLPage } from './pages/cbl/CBLPage';
import { HomePage } from './pages/home/HomePage';
import { ManuscriptPage } from './pages/manuscript/ManuscriptPage';
import { ProgressReportPage } from './pages/progress_reports/ProgressReportPage';

export interface AppRoute {
  index?: boolean;
  path?: string;
  element: ReactNode;
  state: string;
  sidebarProps?: {
    displayText: string;
    icon?: ReactNode;
  };
  children?: AppRoute[];
}

export const appRoutes: AppRoute[] = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
  },
  {
    path: '/',
    element: <HomePage />,
    state: 'home',
    sidebarProps: {
      displayText: 'Home',
      icon: <HomeOutlinedIcon />,
    },
  },
  {
    path: '/about',
    element: <AboutPage />,
    state: 'about',
    sidebarProps: {
      displayText: 'About Me',
      icon: <AccountBoxOutlinedIcon />,
    },
  },
  {
    path: '/cbl',
    element: <CBLPage />,
    state: 'cbl',
    sidebarProps: {
      displayText: 'CBL Phases and LRF',
      icon: <ChurchOutlinedIcon />,
    },
  },
  {
    path: 'https://docs.google.com/document/d/1nmhZVIjO4utd_4v2YtgDnPlWp613OhFhYHENpIqiu-Q/edit?usp=sharing',
    element: <ManuscriptPage />,
    state: 'manuscript',
    sidebarProps: {
      displayText: 'Research Manuscript',
      icon: <DescriptionOutlinedIcon />,
    },
  },
  {
    path: '/assessments',
    element: <AssessmentsPageLayout />,
    state: 'assessments',
    sidebarProps: {
      displayText: 'Assessments',
      icon: <TextSnippetOutlinedIcon />,
    },
    children: [{
      path: '/assessments/formatives',
      element: <FormativesPage />,
      state: 'assessments.formatives',
      sidebarProps: { displayText: 'Formative' },
    }],
  },
  {
    path: '/progress_reports',
    element: <ProgressReportPage />,
    state: 'progressreports',
    sidebarProps: {
      displayText: 'Progress Reports',
      icon: <UpdateOutlinedIcon />,
    },
  },
];

function createRouteObject(routes: AppRoute[]): RouteObject[] {
  return routes.map((route) => route.index
    ? ({
      index: route.index,
      element: <PageWrapper state={route.state}>{route.element}</PageWrapper>,
    })
    : ({
      path: route.path,
      element: <PageWrapper state={route.state}>{route.element}</PageWrapper>,
      children: route.children
        ? createRouteObject(route.children)
        : undefined,
    }));
}

export const router = createHashRouter([{
  path: '/',
  element: <MainLayout />,
  children: createRouteObject(appRoutes),
}]);
