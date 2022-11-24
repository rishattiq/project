import { render, screen } from '@testing-library/react';
import Collection from './Pages/Collection';
import HostDashboard from './Pages/HostDashboard';
import Form from './Pages/Form';

test('Form Page',()=>{
  render(<Form/>);
  const linkElement = screen.getByTestId("comps");
  expect(linkElement).toBeInTheDocument();
});

test('Header Page',()=>{
  render(<Headers/>);
  const linkElement = screen.getByTestId("comps");
  expect(linkElement).toBeInTheDocument();
});

test('Collection page',()=>{
  render(<Collection/>);
  const linkElement = screen.getByTestId("comps");
  expect(linkElement).toBeInTheDocument();
});

test('HostDashboard Page',()=>{
  render(<HostDashboard/>);
  const linkElement = screen.getByTestId("comps");
  expect(linkElement).toBeInTheDocument();
});

