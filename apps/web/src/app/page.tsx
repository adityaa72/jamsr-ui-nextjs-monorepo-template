import { Button } from "@jamsr-ui/react";

const Page = () => {
  return (
    <div>
      <div className="flex gap-4">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  );
};

export default Page;