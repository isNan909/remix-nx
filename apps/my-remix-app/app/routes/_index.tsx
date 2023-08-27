import type { V2_MetaFunction } from "@remix-run/node";
import { Card } from 'shared';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix app with Nx</h1>
      <Card
        image="https://images.unsplash.com/photo-1603178455924-ef33372953bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
        heading="A flower vase"
        price="$12.00"
        onClick={() => console.log('Added to basket')}>Buy item</Card>
    </div>
  );
}
