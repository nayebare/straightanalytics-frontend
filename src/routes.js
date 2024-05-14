import React from 'react';
const Dashboard = React.lazy(() => import('./Components/Dashboard/Dashboard'))
const UploadCsv = React.lazy(() => import('./Components/CSV/View.UploadCSV'))
const MergeCsv = React.lazy(() => import('./Components/CSV/View.MergeCsv'))
const SearchCsv = React.lazy(() => import('./Components/CSV/View.SearchCSV'))
const AnalyseCsv = React.lazy(() => import('./Components/CSV/View.Analysis'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/csv/upload', name: 'Upload Csv', component: UploadCsv }, 
  { path: '/csv/merge', name: 'Merge Csv', component: MergeCsv },
  { path: '/csv/search', name: 'Search Csv', component: SearchCsv },
  { path: '/csv/analysis', name: 'Analyse Csv', component: AnalyseCsv },
];

export default routes;
