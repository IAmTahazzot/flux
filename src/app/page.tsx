import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="m-5">
      <Card className="max-w-[400px] mx-auto">
        <CardHeader>
          <CardTitle>Something cool</CardTitle>
          <CardDescription>I would do anything for you.</CardDescription>
        </CardHeader>

        <CardContent>
          <p>I'll always be there by your side.</p>
          <br />

          <Button>I'm here</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
